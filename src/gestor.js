var gestor = {};
var Usuariog = require("./schemasUsuG");
var Usuariot = require("./schemasUsuT");
var Usuariof = require("./schemasUsuF");
gestor.verifUser = async () => {
    var users = await Usuariog.find();
    var users1 = await Usuariot.find();
    var users2 = await Usuariof.find();
    var programa = true;
    var puntaje = 0;
    function validar() {
        var res = false;
        if (users2.length > 0) {
            res = true;
        }
        return res;
    }
    console.log(users2.length);

    users.map((user) => {
        users1.map(async (usu) => {
            if (!validar()) {
                if (!user.programaSocial && !usu.programaSocial) {
                    programa = false;
                }
                if (user.numSalarios <= 4) {
                    puntaje += 5;
                }
                if (usu.numSalarios <= 2) {
                    puntaje += 5;
                }
                if (user.ciudad == usu.ciudad && user.departamento == usu.departamento) {
                    puntaje += 5;
                }
                if (user.barrio == usu.barrio && user.direccion == usu.direccion) {
                    puntaje += 5;
                }
                if (user.cuartos == usu.cuartos || user.cuartos == usu.cuartos + 1 || user.cuartos == usu.cuartos + 2) {
                    puntaje += 10;
                }
                if (user.bath == usu.bath || user.bath == usu.bath + 1 || user.bath == usu.bath + 2) {
                    puntaje += 10;
                }
                if (usu.vulnerabilidad == true) {
                    if (usu.miembrosVulnerables > 2) {
                        puntaje += 5;
                    } else {
                        puntaje += 2;
                    }
                }
                if (puntaje <= 42 && !programa) {
                    var usuario = new Usuariof({ "cedula": usu.cedula, "nombre": usu.nombre, "celular": usu.celular, "departamento": usu.departamento, "ciudad": usu.departamento, "barrio": usu.barrio, "direccion": usu.direccion, "estrato": usu.estrato, "numSalarios": usu.numSalarios, "cuartos": usu.cuartos, "bath": usu.bath, "miembros": usu.miembros, "vulnerabilidad": usu.vulnerabilidad, "miembrosVulnerables": usu.miembrosVulnerables, "programaSocial": usu.programaSocial });
                    await usuario.save();
                }

            } else {
                users2.map(async (u) => {
                    if (u.cedula != users.cedula) {
                        if (!user.programaSocial && !usu.programaSocial) {
                            programa = false;
                        }
                        if (user.numSalarios <= 4) {
                            puntaje += 5;
                        }
                        if (usu.numSalarios <= 2) {
                            puntaje += 5;
                        }
                        if (user.ciudad == usu.ciudad && user.departamento == usu.departamento) {
                            puntaje += 5;
                        }
                        if (user.barrio == usu.barrio && user.direccion == usu.direccion) {
                            puntaje += 5;
                        }
                        if (user.cuartos == usu.cuartos || user.cuartos == usu.cuartos + 1 || user.cuartos == usu.cuartos + 2) {
                            puntaje += 10;
                        }
                        if (user.bath == usu.bath || user.bath == usu.bath + 1 || user.bath == usu.bath + 2) {
                            puntaje += 10;
                        }
                        if (usu.vulnerabilidad == true) {
                            if (usu.miembrosVulnerables > 2) {
                                puntaje += 5;
                            } else {
                                puntaje += 2;
                            }
                        }
                        if (puntaje <= 42 && !programa) {
                            var usuario = new Usuariof({ "cedula": usu.cedula, "nombre": usu.nombre, "celular": usu.celular, "departamento": usu.departamento, "ciudad": usu.departamento, "barrio": usu.barrio, "direccion": usu.direccion, "estrato": usu.estrato, "numSalarios": usu.numSalarios, "cuartos": usu.cuartos, "bath": usu.bath, "miembros": usu.miembros, "vulnerabilidad": usu.vulnerabilidad, "miembrosVulnerables": usu.miembrosVulnerables, "programaSocial": usu.programaSocial });
                            await usuario.save();
                        }
                    }
                });
            }

        }

        );
    });
};

module.exports = gestor;
