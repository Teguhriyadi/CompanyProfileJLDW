<template>
	<NavbarView/>

	<section class="bg-light">
		<div class="container py-4">
			<div class="row align-items-center justify-content-between">
				<div class="contact-header col-lg-4">
					<h1 class="h2 pb-3 text-primary">Kontak</h1>
					<p class="light-300"> Berisikan Profil Perusahaan , Kontak Perusahaan Secara Detail dan Terdapat Sebuah Form Pesan
					</p>
				</div>
				<div class="contact-img col-lg-5 align-items-end col-md-4">
					<img src="../assets/img/banner-img-01.svg">
				</div>
			</div>
		</div>
	</section>

	<section class="container py-5">

		<h1 class="col-12 col-xl-8 h2 text-left text-primary pt-3">
			Ayo Sukseskan Bersama Kami!
		</h1>
		<p class="col-12 col-xl-8 text-left text-muted pb-5 light-300">
			Silahkan Hubungi Kontak di Bawah ini, apabila masih terdapat kekeliruan. Isikan Form Pesan Apabila Anda Ingin Mengirim Sebuah Komentar Terhadap Pelayanan Kami.
		</p>

		<div class="row pb-4">
			<div class="col-lg-4">

				<div class="contact row mb-4">
					<div class="contact-icon col-lg-3 col-3">
						<div class="py-3 mb-2 text-center border rounded text-secondary">
							<i class='display-6 bx bx-news'></i>
						</div>
					</div>
					<ul class="contact-info list-unstyled col-lg-9 col-9  light-300" v-for="profil in profils" :key="profil.id">
						<li class="h5 mb-0">Techinal Support</li>
						<li class="text-muted">{{ profil.profil_email }}</li>
						<li class="text-muted">{{ profil.profil_no_hp }}</li>
					</ul>
				</div>
			</div>

			<div class="col-lg-8 ">
				<form class="contact-form row" @submit.prevent="saveKirimKomentar">

					<div class="col-lg-6 mb-4">
						<div class="form-floating">
							<input type="text" class="form-control form-control-lg light-300" id="floatingname" v-model="pesan_nama" placeholder="Nama">
							<label for="floatingname light-300">Nama</label>
						</div>
					</div>

					<div class="col-lg-6 mb-4">
						<div class="form-floating">
							<input type="text" class="form-control form-control-lg light-300" id="floatingemail" v-model="pesan_email" placeholder="Email">
							<label for="floatingemail light-300">Email</label>
						</div>
					</div><!-- End Input Email -->

					<div class="col-lg-6 mb-4">
						<div class="form-floating">
							<input type="text" class="form-control form-control-lg light-300" id="floatingphone" v-model="pesan_no_hp" placeholder="No. Handphone">
							<label for="floatingphone light-300">No. Handphone</label>
						</div>
					</div>

					<div class="col-lg-6 mb-4">
						<div class="form-floating">
							<input type="text" class="form-control form-control-lg light-300" id="floatingcompany" v-model="pesan_nama_perusahaan" placeholder="Nama Perusahaan">
							<label for="floatingcompany light-300">Nama Perusahaan</label>
						</div>
					</div>

					<div class="col-12">
						<div class="form-floating mb-4">
							<input type="text" class="form-control form-control-lg light-300" id="floatingsubject" v-model="pesan_subjek" placeholder="Subjek">
							<label for="floatingsubject light-300">Subjek</label>
						</div>
					</div>

					<div class="col-12">
						<div class="form-floating mb-3">
							<textarea class="form-control light-300" rows="8" placeholder="Pesan" id="floatingtextarea" v-model="pesan_teks"></textarea>
							<label for="floatingtextarea light-300">Pesan</label>
						</div>
					</div>

					<div class="col-md-12 col-12 m-auto text-end">
						<button type="submit" class="btn btn-secondary rounded-pill px-md-5 px-4 py-2 radius-0 text-light light-300">Kirim Pesan</button>
					</div>

				</form>
			</div>
		</div>
	</section>

	<FooterView/>
</template>

<script>
	import axios from 'axios'
	import NavbarView from '@/views/partials/NavbarView.vue'
	import FooterView from '@/views/partials/FooterView.vue'
	export default {
		name: "ContactView",
		components: {
			NavbarView,
			FooterView
		},
		data() {
			return {
				pesan_nama: "",
				pesan_email: "",
				pesan_no_hp: "",
				pesan_nama_perusahaan: "",
				pesan_subjek: "",
				pesan_teks: "",
				profils: []
			}
		},
		created() {
			this.getKontak();
		},
		methods: {
			async saveKirimKomentar() {
				try {
					await axios.post("pesan", {
						pesan_nama: this.pesan_nama,
						pesan_email: this.pesan_email,
						pesan_no_hp: this.pesan_no_hp,
						pesan_nama_perusahaan: this.pesan_nama_perusahaan,
						pesan_subjek: this.pesan_subjek,
						pesan_teks: this.pesan_teks
					});
					(this.pesan_nama = ''), (this.pesan_email = ''), (this.pesan_no_hp = ''), (this.pesan_nama_perusahaan = ''), (this.pesan_subjek = ''), (this.pesan_teks = ''), this.$router.push("/contact");
				} catch (error) {
					console.log("Oops.. Terjadi Kesalahan");
				}
			},

			async getKontak() {
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