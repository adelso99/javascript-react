@app.route('/logout', methods=['POST'])
def logout():
    token = request.headers.get('Authorization')
    # Guardar token en lista negra (revocado)
    add_to_blacklist(token)
    return jsonify({"message": "Sesión cerrada correctamente"}), 200

@app.route('/api/data')
def protected_data():
    token = request.headers.get('Authorization')
    if token_in_blacklist(token):
        return jsonify({"error": "Token inválido"}), 401
    return jsonify({"data": "Acceso autorizado"})

#Hola x-----1
#Hola x-----1





