<template>
	<section class="service-wrapper py-3">
		<div class="container-fluid pb-3">
			<div class="row">
				<h2 class="h2 text-center col-12 py-5 semi-bold-600">
					Jasa
				</h2>
				<div class="service-header col-2 col-lg-3 text-end light-300">
					<i class='bx bx-gift h3 mt-1'></i>
				</div>
				<div class="service-heading col-10 col-lg-9 text-start float-end light-300">
					<h2 class="h3 pb-4 typo-space-line">
						Mari Kita Sukseskan
					</h2>
				</div>
			</div>
			<p class="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
				Dibawah Ini Terdapat Beberapa Jasa Yang Kami Tawarkan Kepada Pihak Customer. Silahkan Pilih Jasa Yang Customer Inginkan Agar Bisa Berlangganan Dengan Kami.
			</p>
		</div>

		<div class="service-tag py-5 bg-secondary">
			<div class="col-md-12">
				<ul class="nav d-flex justify-content-center">
					<li class="nav-item mx-lg-4">
						<a class="filter-btn nav-link btn-outline-primary active shadow rounded-pill text-light px-4 light-300" href="#" data-filter=".project">All</a>
					</li>
					<li class="nav-item mx-lg-4">
						<a class="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300" href="#" data-filter=".graphic">Graphics</a>
					</li>
					<li class="filter-btn nav-item mx-lg-4">
						<a class="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300" href="#" data-filter=".ui">UI/UX</a>
					</li>
					<li class="nav-item mx-lg-4">
						<a class="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300" href="#" data-filter=".branding">Branding</a>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
	import axios from 'axios'
	export default {
		name: "ComponentsService",
		data() {
			return {
				kategoris: []
			}
		},
		created() {
			this.getKategori();
		},
		methods: {
			async getKategori() {
				try {
					const response = await axios.get("kategori");
					this.kategoris = response.data
				} catch (error) {
					console.log("Oops.. Terjadi Kesalahan");
				}
			}	
		}
	}
</script>