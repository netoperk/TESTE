Vue.component('main_component',{
		template:`
					<div>
						<main_nav></main_nav>
						<div id="container" style="margin-top:60px;">Usuario Logeado: {{log_user}}</div>
						<button type="button" @click="aumentar" class="btn btn-info btn-sm">+</button>
						<button type="button" @click="disminuir" class="btn btn-danger btn-sm">-</button>
						<h3>{{numero}}</h3>
						<button type="button" @click="obtenerDatos" class="btn btn-danger btn-sm">Obtener Datos</button>
						<ul v-for="item of progs">
							<li>{{item.id_programador}} - {{item.usuario}}</li>
						</ul>
					</div>
				`,

		computed:{
			...Vuex.mapState(['log_user','numero','progs'])
		},
		methods:{
			...Vuex.mapMutations(['aumentar','disminuir','cambiarUsuario']),
			...Vuex.mapActions(['obtenerDatos'])	
		},
		created: function(){
        	///this.getSession()
        	this.obtenerDatos();
    	}

	});