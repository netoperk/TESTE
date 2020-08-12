<!DOCTYPE html>
<html>
<head>
	<title>COMPONENTES DE VUE</title>
	  <link rel="stylesheet" href="../libs/bootstrap-4.5.0/css/bootstrap.min.css">
	  <link rel="stylesheet" href="../libs/fontawesome-5.14.0/css/all.css">
	  <script src="../libs/jquery-3.5.1/jquery-3.5.1.min.js"></script>	  
	  <script src="../libs/bootstrap-4.5.0/js/bootstrap.min.js"></script>
</head>
<body>
	<div id="main_app">
		<main_component></main_component>		
	</div>
</body>
<script src="../libs/Vue/vue.js"></script>
<script src="../libs/Vue/vuex.js"></script>
<script src="components/main.js"></script>
<script src="components/nav_bar.js"></script>
<script>
	const store = new Vuex.Store({
		state:{
			log_user:'PEDRO',
			numero:0,
			progs:[]
		},
		mutations:{
			aumentar(state){
				state.numero++
			},
			disminuir(state){
				state.numero--
			},
			llenarDatos(state,datosAccion){
				state.progs = datosAccion
			},
			cambiarUsuario(state,user){
				state.log_user = user
				console.log(user);
			}
		},
		actions:{
			obtenerDatos: async function({commit}){
				const data = await fetch('../datos.json');
				const progs = await data.json();
				commit('llenarDatos',progs)
			}
		}
	});
	new Vue({
		el:'#main_app',
		store:store
	});
</script>
</html>