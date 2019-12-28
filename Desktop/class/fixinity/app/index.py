from flask import Flask, jsonify, request

app = Flask(__name__)

customersData = [
                { 'Name': 'Wasif', 'Phone': "111-111-1111", 'Zip': 94321, 'VIN': "VIN2398", 'Status': "Active", 'Action': "NUL" },
                { 'Name': 'Ali', 'Phone': "111-111-1111", 'Zip': 94321, 'VIN': "VIN2398", 'Status': "Active", 'Action': "NUL" },
                { 'Name': 'Saad', 'Phone': "111-111-1111", 'Zip': 94321, 'VIN': "VIN2398", 'Status': "Active", 'Action': "NUL" },
                { 'Name': 'Asad', 'Phone': "111-111-1111", 'Zip': 94321, 'VIN': "VIN2398", 'Status': "Active", 'Action': "NUL"},
                { 'Name': 'Wasif', 'Phone': "111-111-1111", 'Zip': 94321, 'VIN': "VIN2398", 'Status': "Active", 'Action': "NUL" }
             ]


@app.route('/', methods=["GET"])
def get_incomes():
  return jsonify(customersData), 200