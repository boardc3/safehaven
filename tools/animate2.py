#!/usr/bin/env python3
"""Second motion pass over the JSX pages: masked headings, tilting hero art, parallax, scene effects."""
import re, pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from animate import TAG, element_end
P = pathlib.Path(__file__).resolve().parent.parent / 'src' / 'pages'

def rename(s, open_re, new_tag, extra_attrs=''):
    """Rename every element whose opening tag matches open_re."""
    pos = 0
    while True:
        m = re.compile(open_re).search(s, pos)
        if not m: break
        a = m.start(); b = element_end(s, a)
        om = TAG.match(s, a); tag = om.group(2)
        inner_open = '<' + new_tag + extra_attrs + om.group(3) + '>'
        body = s[om.end():b - len('</' + tag + '>')]
        s = s[:a] + inner_open + body + '</' + new_tag + '>' + s[b:]
        pos = a + len(inner_open)
    return s

for f in sorted(P.glob('*.jsx')):
    if f.name in ('Login.jsx', 'Privacy.jsx'): continue
    s = f.read_text()
    if 'H2' in s.split('\n')[0] or "import { H2" in s: continue
    # plain-text h2/h3 headings inside sections -> masked reveal
    s = re.sub(r'<h2>([^<{}]+)</h2>', r'<H2>\1</H2>', s)
    s = re.sub(r'<h2( style=\{\{[^}]*\}\})>([^<{}]+)</h2>', r'<H2\1>\2</H2>', s)
    s = re.sub(r'<h1>([^<{}]+)</h1>', r'<H2 as="h1">\1</H2>', s)
    s = re.sub(r'<h1( style=\{\{[^}]*\}\})>([^<{}]+)</h1>', r'<H2 as="h1"\1>\2</H2>', s)
    # page hero art -> Tilt
    s = rename(s, r'<div className="art" aria-hidden="true">', 'Tilt')
    # home hero visual -> Tilt, with parallax on the photo
    s = rename(s, r'<div className="hero-visual" aria-hidden="true">', 'Tilt', ' strength={6}')
    s = rename(s, r'<div className="photo">', 'Parallax', ' speed={0.25}')
    # home: the promise scene parallax, the mosaic tiles get alternating parallax, lighthouse beam sweep, steam, stars, lamp glow
    if f.name == 'Index.jsx':
        s = s.replace('<path d="M232 150L600 60v180z" fill="url(#beam2)"/>',
            '<motion.path className="beam-rot" d="M232 150L600 60v180z" fill="url(#beam2)" animate={{ rotate: [-14, 10, -14], opacity: [0.6, 1, 0.6] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}/>')
        s = s.replace('<g fill="#fff" opacity=".8"><circle cx="80" cy="60" r="2"/>', '<g className="stars" fill="#fff" opacity=".8"><circle cx="80" cy="60" r="2"/>')
        s = s.replace('<path d="M140 330c0-14 8-14 8-26M158 330c0-14 8-14 8-26" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".7"/>',
            '<g className="steam"><path d="M140 330c0-14 8-14 8-26" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".7"/><path d="M158 330c0-14 8-14 8-26" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".7"/></g>')
        s = s.replace('<ellipse cx="470" cy="160" rx="22" ry="6" fill="#fff3c4" opacity=".9"/>', '<ellipse className="lamp-glow" cx="470" cy="160" rx="22" ry="6" fill="#fff3c4" opacity=".9"/>')
        s = s.replace('<div className="scene" aria-hidden="true">', '<Parallax className="scene" aria-hidden="true" speed={0.35}>')
        # close that Parallax: the scene div ends right before '</div>\n</Section>' of the promise section
        i = s.index('<Parallax className="scene"'); j = s.index('</svg>\n    </div>', i)
        s = s[:j] + '</svg>\n    </Parallax>' + s[j + len('</svg>\n    </div>'):]
        # marquee after the trust strip
        s = s.replace('<!-- ================= FEE CHECK ================= -->', '')
        s = s.replace('<Section className="feecheck" id="check">', '<Marquee items={MERCHANTS} />\n\n<Section className="feecheck" id="check">')
        s = s.replace('\nexport default function Index()', "\nconst MERCHANTS = ['Cafés', 'Contractors', 'Dental clinics', 'Salons', 'Auto shops', 'Restaurants', 'Boutiques', 'Gyms', 'Law firms', 'Nonprofits', 'Franchises', 'Municipalities', 'Online stores', 'Food trucks']\n\nexport default function Index()")
    s = s.replace("import { A, Section, Stagger, item, usePageMeta } from '../ui.jsx'", "import { A, Section, Stagger, item, usePageMeta, H2, Tilt, Parallax, Marquee } from '../ui.jsx'")
    s = s.replace("import { A, Section, usePageMeta } from '../ui.jsx'", "import { A, Section, usePageMeta, H2, Tilt, Parallax } from '../ui.jsx'")
    f.write_text(s)
    print('pass2', f.name)
