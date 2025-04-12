from flask import Flask, request, jsonify
from agent import get_response


app = Flask(__name__)

@app.route('/save_data', methods=["POST"])
def save_data():
    data = request.json
    print("Received data:", data)
    prompt = f"""I am giving you the extracted text from a job site. 
    Your job is to extract the details from the text and return it in a json format.
    The details must include the job title('job_title'), company('company'), status('status', possible values: ('Applied', 'Interviewed', 'Rejected', 'Offered', 'Awaiting Interview', '(if nothig matched then put by yourself, like if it is Hiring Challenge)')), job location('location), date of apply
    (or) date of interview (or) date of test('date', fomat: yyyy-mm-dd) and link to the job('link'). Just return the json
    data and nothing else. If you are not able to find any of the details, just put None for that field.
    Here is the data: {data}
    """
    job_details = get_response(prompt)
    print(job_details)
    return jsonify({"status": "success", "recieved": data, "job_details": job_details})


if __name__ == '__main__':
    app.run(debug=True, port=5000)