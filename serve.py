"""Local static preview. Standard library only; no application backend."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from functools import partial
import webbrowser

root = Path(__file__).resolve().parent
handler = partial(SimpleHTTPRequestHandler, directory=str(root))
try:
    server = ThreadingHTTPServer(('127.0.0.1', 8765), handler)
except OSError:
    print('Port 8765 unavailable. Trying port 8766.')
    server = ThreadingHTTPServer(('127.0.0.1', 8766), handler)
url = f'http://localhost:{server.server_port}/index.html'
print('Rentie: ' + url + '\nKeep this window open. Ctrl+C to stop.')
webbrowser.open(url)
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()
