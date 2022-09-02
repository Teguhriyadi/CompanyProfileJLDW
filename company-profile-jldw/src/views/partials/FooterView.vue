<template>
	<footer class="bg-secondary pt-4">
		<div class="container">
			<div class="row py-4">

				<div class="col-lg-3 col-12 align-left" v-for="profil in profils" :key="profil.id">
					<a class="navbar-brand" href="index.html">
						<i class='bx bx-buildings bx-sm text-light'></i>
						<span class="text-light h5">
							{{ profil.profil_nama }}
						</span>
					</a>
					<p class="text-light my-lg-4 my-2">
						{{ profil.profil_deskripsi }}
					</p>
				</div>

				<div class="col-lg-3 col-md-4 my-sm-0 mt-4">
					<h3 class="h4 pb-lg-3 text-light light-300">
						Tentang Perusahaan
					</h3>
					<ul class="list-unstyled text-light light-300">
						<li class="pb-2">
							<i class='bx-fw bx bxs-chevron-right bx-xs'></i>
							<router-link class="text-decoration-none text-light" to="/">Home</router-link>
						</li>
						<li class="pb-2">
							<i class='bx-fw bx bxs-chevron-right bx-xs'></i>
							<router-link class="text-decoration-none text-light py-1" to="/about">About Us</router-link>
						</li>
						<li class="pb-2">
							<i class='bx-fw bx bxs-chevron-right bx-xs'></i>
							<router-link class="text-decoration-none text-light py-1" to="/work">Work</router-link>
						</li>
						<li class="pb-2">
							<i class='bx-fw bx bxs-chevron-right bx-xs'></i>
							<a class="text-decoration-none text-light py-1" href="pricing.html">Price</a>
						</li>
						<li class="pb-2">
							<i class='bx-fw bx bxs-chevron-right bx-xs'></i>
							<router-link class="text-decoration-none text-light py-1" to="/contact">Contact</router-link>
						</li>
					</ul>
				</div>

				<div class="col-lg-3 col-md-4 my-sm-0 mt-4">
					<h2 class="h4 pb-lg-3 text-light light-300">Our Works</h2>
					<ul class="list-unstyled text-light light-300">
						<li class="pb-2">
							<i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="#">Branding</a>
						</li>
						<li class="pb-2">
							<i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="#">Business</a>
						</li>
						<li class="pb-2">
							<i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="#">Marketing</a>
						</li>
						<li class="pb-2">
							<i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="#">Social Media</a>
						</li>
						<li class="pb-2">
							<i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="#">Digital Solution</a>
						</li>
						<li class="pb-2">
							<i class='bx-fw bx bxs-chevron-right bx-xs'></i><a class="text-decoration-none text-light py-1" href="#">Graphic</a>
						</li>
					</ul>
				</div>

				<div class="col-lg-3 col-md-4 my-sm-0 mt-4" v-for="profil in profils" :key="profil.id">
					<h2 class="h4 pb-lg-3 text-light light-300">For Client</h2>
					<ul class="list-unstyled text-light light-300">
						<li class="pb-2">
							<i class='bx-fw bx bx-phone bx-xs'></i><a class="text-decoration-none text-light py-1" href="tel:010-020-0340">{{ profil.profil_no_hp }}</a>
						</li>
						<li class="pb-2">
							<i class='bx-fw bx bx-mail-send bx-xs'></i><a class="text-decoration-none text-light py-1" href="mailto:info@company.com">{{ profil.profil_email }}</a>
						</li>
					</ul>
				</div>

			</div>
		</div>

		<div class="w-100 bg-primary py-3">
			<div class="container">
				<div class="row pt-2">
					<div class="col-lg-6 col-sm-12">
						<p class="text-lg-start text-center text-light light-300">
							© Copyright 2022 PT. Cidhayu Brenchmarking. All Rights Reserved.
						</p>
					</div>
					<div class="col-lg-6 col-sm-12">
						<p class="text-lg-end text-center text-light light-300">
							Designed by <a rel="sponsored" class="text-decoration-none text-light" href="https://templatemo.com/" target="_blank"><strong>Pejuang Milenial Rupiah</strong></a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script type="text/javascript">
	import axios from 'axios'
	export default {
		name: "ViewFooter",
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