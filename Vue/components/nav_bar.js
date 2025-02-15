Vue.component('main_nav',{
		template:`
					<div>
						<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
						  <a class="navbar-brand" href="#">Gestor de Contenido</a>
						  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						    <span class="navbar-toggler-icon"></span>
						  </button>

						  <div class="collapse navbar-collapse" id="navbarSupportedContent">
						    <ul class="navbar-nav ml-auto">
						      <li class="nav-item active">
						        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						      </li>
						      <li class="nav-item">
						        <a class="nav-link" href="#">Link</a>
						      </li>
						      <li class="nav-item dropdown">
						        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						          Dropdown
						        </a>
						        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
						          <a class="dropdown-item" href="#">Action</a>
						          <a class="dropdown-item" href="#">Another action</a>
						          <div class="dropdown-divider"></div>
						          <a class="dropdown-item" href="#">Something else here</a>
						        </div>
						      </li>
						      <li class="nav-item dropdown">
						        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						          <i class="fas fa-user"></i> 
						          {{log_user}}
						        </a>
						        <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
						          <a class="dropdown-item" href="#" @click="cambiarUsuario(item.usuario)" v-for="item of progs">{{item.usuario}}</a>						          
						        </div>
						      </li>
						    </ul>
						    
						  </div>
						</nav>
						<br>
						<br><br><br><br><br><br><br><br>
						<button type="button" @click="aumentar" class="btn btn-info btn-sm">+</button>
						<button type="button" @click="disminuir" class="btn btn-danger btn-sm">-</button>						
					</div>
				`,
				computed:{
					...Vuex.mapState(['log_user','progs'])
				},
		methods:{
			...Vuex.mapMutations(['aumentar','disminuir','cambiarUsuario'])			
		}
	});