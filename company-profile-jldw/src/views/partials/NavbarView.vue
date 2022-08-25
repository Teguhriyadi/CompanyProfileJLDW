<template>
	<nav id="main_nav" class="navbar navbar-expand-lg navbar-light bg-white shadow">
		<div class="container d-flex justify-content-between align-items-center" v-for="profil in profils" :key="profil.id">
			<router-link to="/" class="navbar-brand h1">
				<i class='bx bx-buildings bx-sm text-dark'></i>
				<span class="text-dark h4">{{ profil.profil_nama }}</span> 
			</router-link>
			<button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler-success" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>

			<div class="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between" id="navbar-toggler-success">
				<div class="flex-fill mx-xl-5 mb-2">
					<ul class="nav navbar-nav d-flex justify-content-between mx-xl-5 text-center text-dark">
						<li class="nav-item">
							<router-link to="/" class="nav-link btn-outline-primary rounded-pill px-3">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/about" class="nav-link btn-outline-primary rounded-pill px-3">About</router-link>
						</li>
						<li class="nav-item">
							<router-link to="/work" class="nav-link btn-outline-primary rounded-pill px-3">Work</router-link>
						</li>
						<li class="nav-item">
							<a class="nav-link btn-outline-primary rounded-pill px-3" href="pricing.html">Pricing</a>
						</li>
						<li class="nav-item">
							<router-link to="/contact" class="nav-link btn-outline-primary rounded-pill px-3" href="contact.html">Contact</router-link>
						</li>
					</ul>
				</div>
				<div class="navbar align-self-center d-flex">
					<a class="nav-link" href="#">
						<i class='bx bx-user-circle bx-sm text-primary'></i>
					</a>
				</div>
			</div>
		</div>
	</nav>
</template>

<script type="text/javascript">
	import axios from 'axios'
	export default {
		name: "ViewNavbar",
		data() {
			return {
				profils: []
			}
		},
		created() {
			this.getProfil();
		},
		methods: {
			async getProfil() {
				try {
					const response = await axios.get("profil_perusahaan");
					this.profils = response.data;
				} catch (error) {
					console.log("Oops.. Terjadi Kesalahan");
				}
			}
		}
	}
</script>