/**
 * Created by lauro on 26/11/16.
 */
angular.module('transportadoraApp', [])
    .controller('frotaCtrl', [function () {
        var self = this;
        self.veiculos = [
            {placa : 'HNP-2300', marca : 'Scania', modelo : 'R440 6x2', cor : 'branco', ano: 2015},
            {placa : 'HNP-2305', marca : 'Scania', modelo : 'R440 6x2', cor : 'branco', ano: 2015},
            {placa : 'OPK-4144', marca : 'Scania', modelo : 'R440 6x4', cor : 'branco', ano: 2013},
            {placa : 'OPK-3156', marca : 'Scania', modelo : 'R440 6x4', cor : 'branco', ano: 2013},
            {placa : 'HKE-3609', marca : 'Scania', modelo : 'G420 6x2', cor : 'vermelho', ano: 2009},
            {placa : 'HKE-3611', marca : 'Scania', modelo : 'G420 6x2', cor : 'vermelho', ano: 2009},
            {placa : 'HJI-7155', marca : 'Scania', modelo : 'G380 6x2', cor : 'branco', ano: 2008},
            {placa : 'HJI-7161', marca : 'Scania', modelo : 'G380 6x2', cor : 'branco', ano: 2008},
            {placa : 'HCC-2310', marca : 'Scania', modelo : 'R420 6x2', cor : 'prata', ano: 2005}
        ]
    }]);