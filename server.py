import flask, os, logging, json
from mail import sendMail


### Settings ###

host="0.0.0.0"
port=80

showLogger = False
dev_build = False

################

if not showLogger:
    logging.getLogger('werkzeug').disabled = True

app = flask.Flask('No Name')
app.secret_key = 'Its a secret'
app._static_folder = os.path.abspath("templates/static/")

@app.route('/', methods=['GET'])
def home():
    return flask.render_template('home.html')

@app.route('/stargate', methods=['GET'])
def stargate():
    return flask.render_template('stargate/main.html')

@app.route('/stargate/seasons', methods=['GET'])
def stargateSeasons():
    return flask.render_template('stargate/seasons.html')

@app.route('/stargate/characters', methods=['GET'])
def stargateCharacters():
    return flask.render_template('stargate/characters.html')

@app.route('/stargate/galery', methods=['GET'])
def stargateGalery():
    return flask.render_template('stargate/galery.html')

@app.route('/stargate/galery/preview', methods=['GET'])
def galeryPreview() :
    try:
        return flask.render_template('stargate/galery_preview.html', activeImg=flask.request.args['img'])
    except:
        return flask.render_template('stargate/galery_preview.html', activeImg='1')

@app.route('/stargate/about', methods=['GET'])
def stargateAbout():
    return flask.render_template('stargate/about.html')

@app.route('/stargate/contact', methods=['GET'])
def stargateContact():
    return flask.render_template('stargate/contact.html')

@app.route('/stargate/contact', methods=['POST'])
def stargateContactForm():
    try:
        form = flask.request.form
        sendMail(form['email'], form['name'], form['subject'], form['message'])
        return flask.render_template('stargate/thank_you.html')
    except:
        return flask.abort(500)

@app.errorhandler(404)
def PageNotFound(error):
    return flask.render_template('errors/404NotFound.html')

if dev_build:
    app.run(host=host,port=port,use_debugger=True,debug=True)
