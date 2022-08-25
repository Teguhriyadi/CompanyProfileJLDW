<template>
	<section class="container overflow-hidden py-5">
		<div class="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">
			<div class="col-md-3 col-sm-6 project ui branding" v-for="jasa in jasas" :key="jasa.id">
				<a href="#" class="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
					<img class="service card-img" src="../assets/img/services-01.jpg" alt="Card image">
					<div class="service-work-vertical card-img-overlay d-flex align-items-end">
						<div class="service-work-content text-left text-light">
							<span class="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">
								{{ jasa.id_kategori }}
							</span>
							<p class="card-text">
								{{ jasa.jasa_deskripsi }}
							</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
	import axios from 'axios';
	export default {
		name: "ComponentsJasa",
		data() {
			return {
				jasas: []
			}
		},
		created() {
			this.getJasa();
		},
		methods: {
			async getJasa() {
				try {
					const response = await axios.get("jasa");
					this.jasas = response.data;
				} catch (error) {
					console.log("Oops.. Terjadi Kesalahan");
				}
			}
		}
	}
</script>