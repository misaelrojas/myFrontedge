import * as angular from 'angular'
import 'angular-material'
import 'angular-ui-router'

import 'jspm_packages/github/angular/bower-material@1.1.3/angular-material.min.css!';

import base from 'componentes/base/base'

import portada from 'componentes/portada/portada'
import tarea from 'componentes/tarea/tarea'
import configuracion from 'componentes/configuracion/configuracion'
import navegacion from 'componentes/navegacion/navegacion'

const nombreApp = 'frontEdge'

angular.module(nombreApp, ['ngMaterial', 'ui.router', base, portada, tarea, configuracion, navegacion])
  .config(['$urlRouterProvider',($urlRouterProvider) => $urlRouterProvider.otherwise('/')])

  
let documentoHTML = angular.element(document)

let iniciarApp = () => angular.bootstrap(documentoHTML, [nombreApp])

documentoHTML.ready(iniciarApp)