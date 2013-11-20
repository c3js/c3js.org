from jinja2 import Environment, FileSystemLoader
import os, glob

"""
1. Prepare js on htdocs/js/samples, like htdocs/js/samples/simple.js
2. Prepare template on templates, like templates/simple.html
3. Run this script
"""

"""
Define Vars
"""
pwd = os.path.dirname(os.path.abspath(__file__))
html_dir = '%s/../htdocs/samples' % pwd
js_dir = '%s/../htdocs/js/samples' % pwd
data_dir = '%s/../htdocs/data' % pwd
template_dir = '%s/../templates' % pwd
env = Environment(loader=FileSystemLoader(template_dir))

"""
Define Functions
"""
def to_code(name):
    return open('%s/%s.js' % (js_dir, name)).read().decode('utf-8')

def to_data(data):
    return open('%s/%s' % (data_dir, data)).read().decode('utf-8')

"""
Main
"""
env.filters['to_code'] = to_code
env.filters['to_data'] = to_data

for path in glob.glob('%s/*.html' % template_dir):
    template_name = os.path.basename(path)
    template = env.get_template(template_name)
    html = template.render()
    html_path = '%s/%s' % (html_dir, template_name)

    f = open(html_path, 'w')
    f.write(html.encode('utf-8'))
    f.close()
