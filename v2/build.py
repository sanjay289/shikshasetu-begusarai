#!/usr/bin/env python3
"""Build a single self-contained index.html (works when pasted into Google Sites too)."""
import base64, pathlib
d = pathlib.Path(__file__).parent
tpl = (d / 'template.html').read_text(encoding='utf-8')
img = lambda n: 'data:image/webp;base64,' + base64.b64encode((d / n).read_bytes()).decode()
out = (tpl.replace('__HERO__', img('hero.webp'))
          .replace('__CAMPUS__', img('campus.webp'))
          .replace('__DATA__', (d / 'data.js').read_text(encoding='utf-8'))
          .replace('__APP__', (d / 'app.js').read_text(encoding='utf-8')))
(d.parent / 'index.html').write_text(out, encoding='utf-8')
print('index.html', len(out.encode()) // 1024, 'KB')
