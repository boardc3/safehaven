#!/usr/bin/env python3
"""Converts the static HTML page bodies into JSX page components."""
import re, pathlib, sys

SRC = pathlib.Path('/home/claude/safehaven/src/pages')
OUT = pathlib.Path('/home/claude/shp-react/src/pages')
OUT.mkdir(parents=True, exist_ok=True)

ATTR = {
  'class':'className','for':'htmlFor','tabindex':'tabIndex','autocomplete':'autoComplete',
  'inputmode':'inputMode','novalidate':'noValidate','stroke-width':'strokeWidth',
  'stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','stroke-dasharray':'strokeDasharray',
  'stroke-opacity':'strokeOpacity','fill-opacity':'fillOpacity','stop-color':'stopColor','stop-opacity':'stopOpacity',
  'font-family':'fontFamily','font-size':'fontSize','font-weight':'fontWeight','text-anchor':'textAnchor',
  'preserveaspectratio':'preserveAspectRatio','viewbox':'viewBox','patternunits':'patternUnits',
  'gradientunits':'gradientUnits','clip-path':'clipPath','xlink:href':'xlinkHref','mix-blend-mode':'mixBlendMode',
}

def camel(s):
    return re.sub(r'-([a-z])', lambda m: m.group(1).upper(), s)

def style_obj(s):
    parts=[]
    for d in s.split(';'):
        if ':' not in d: continue
        k,v=d.split(':',1); k=k.strip(); v=v.strip().replace("'", "\\'")
        parts.append(f"{camel(k)}:'{v}'")
    return '{{'+','.join(parts)+'}}'

def fix_attrs(tag):
    def repl(m):
        name,val=m.group(1),m.group(2)
        low=name.lower()
        if low=='style': return f' style={style_obj(val)}'
        if low=='value': name='defaultValue'
        elif low in ATTR: name=ATTR[low]
        elif low.startswith('aria-') or low.startswith('data-'): name=low
        return f' {name}="{val}"'
    tag=re.sub(r' ([a-zA-Z:-]+)="([^"]*)"', repl, tag)
    tag=re.sub(r' checked(?=[ />])',' defaultChecked',tag)
    tag=re.sub(r' selected(?=[ />])','',tag)
    return tag

def convert(html):
    html=re.sub(r'<!--.*?-->','',html,flags=re.S)
    html=re.sub(r'<(input|img|br|hr)([^>]*?)(?<!/)>', r'<\1\2/>', html)
    html=re.sub(r'<[a-zA-Z][^>]*>', lambda m: fix_attrs(m.group(0)), html)
    # links -> <A>
    html=re.sub(r'<a( |>)', r'<A\1', html).replace('</a>','</A>')
    # sections -> Reveal sections
    html=re.sub(r'<section( |>)', r'<Section\1', html).replace('</section>','</Section>')
    # non-breaking spaces & entities are fine in JSX; but '{' or '}' in text would break
    html=html.replace('{','&#123;').replace('}','&#125;')
    # restore style object braces we just escaped
    html=re.sub(r'style=&#123;&#123;(.*?)&#125;&#125;', r'style={{\1}}', html)
    return html

def main(names):
    for n in names:
        txt=(SRC/f'{n}.html').read_text()
        title=re.search(r'<!-- title: (.*?) -->',txt).group(1)
        desc=re.search(r'<!-- desc: (.*?) -->',txt).group(1)
        body=convert(txt).strip()
        comp=''.join(w.capitalize() for w in n.replace('-',' ').split())
        jsx=f'''import {{ A, Section, usePageMeta }} from '../ui.jsx'
import {{ PageHero }} from '../components.jsx'

export default function {comp}() {{
  usePageMeta({title!r}, {desc!r})
  return (<>
{body}
  </>)
}}
'''
        (OUT/f'{comp}.jsx').write_text(jsx)
        print('wrote',comp)

if __name__=='__main__':
    main(sys.argv[1:])
