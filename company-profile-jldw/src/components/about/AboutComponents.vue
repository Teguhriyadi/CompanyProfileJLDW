<template>
	<section class="bg-light w-100">
        <div class="container">
            <div class="row d-flex align-items-center py-5">
                <div class="col-lg-6 text-start">
                    <h1 class="h2 py-5 text-primary typo-space-line">
                        Tentang Kami
                    </h1>
                    <p class="light-300">
                        Pada halaman ini terdapat gambaran perusahaan yang terdiri dari tampilan <b>Team, Partner dan Alasan Memilih Kami</b>
                    </p>
                </div>
                <div class="col-lg-6">
                    <img src="@/assets/img/banner-img-02.svg">
                </div>
            </div>
        </div>
    </section>
    <!-- End Banner Hero -->


    <!-- Start Team Member -->
    <section class="container py-5">
        <div class="pt-5 pb-3 d-lg-flex align-items-center gx-5">

            <div class="col-lg-3">
                <h2 class="h2 py-5 typo-space-line">Team Kami</h2>
                <p class="text-muted light-300">
                    Kami Mempunyai Team Yang Cukup Kuat , dan Relevan Dalam Melayani Keinginan Para Pelanggan Yang Ingin Berlangganan
                </p>
            </div>

            <div class="col-lg-9 row">
                <div class="team-member col-md-4" v-for="team in teams" :key="team.id">
                    <img class="team-member-img img-fluid rounded-circle p-4" :src="team.team_foto" alt="Card image">
                    <ul class="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                        <li>{{ team.team_nama }}</li>
                        <li>{{ team.team_jabatan }}</li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
    <!-- End Team Member -->

    <!-- Start Our Partner -->
    <section class="bg-secondary py-3">
        <div class="container py-5">
            <h2 class="h2 text-white text-center py-5">Partner Kami</h2>
            <div class="row text-center">
                <div class="col-md-3 mb-3" v-for="partner in partners" :key="partner.id">
                    <div class="card partner-wap">
                        <img :src="partner.partner_logo">
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <!-- Start Choice -->
    <section class="why-us banner-bg bg-light">
        <div class="container my-4">
            <div class="row">
                <div class="banner-img col-lg-5">
                    <img src="@/assets/img/work.svg" class="rounded img-fluid" alt="">
                </div>
                <div class="banner-content col-lg-7 align-self-end">
                    <h2 class="h2 pb-3">Mengapa Anda Memilih Kami?</h2>
                    <p class="text-muted pb-5 light-300">
                        Karena Kami Mengutamakan Kebutuhan dan Kenyamanan Customer. Dan Kami Juga Memiliki Tim Yang Cukup Sehingga Memudahkan Dalam Menganalisis Kebutuhan User Yang Diinginkan.
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- End Choice -->

    <!-- Start Aim -->
    <section class="banner-bg bg-white py-5">
        <div class="container my-4">
            <div class="row text-center">

                <div class="objective col-lg-4">
                    <div class="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-secondary shadow-lg">
                        <i class="display-4 bx bxs-bulb text-light"></i>
                    </div>
                    <h2 class="objective-heading h3 mb-2 mb-sm-4 light-300">
                        Visi
                    </h2>
                    <p class="light-300" v-for="target in targets" :key="target.id">
                        {{ target.visi }}
                    </p>
                </div>

                <div class="objective col-lg-4 mt-sm-0 mt-4">
                    <div class="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-secondary shadow-lg">
                        <i class='display-4 bx bx-revision text-light'></i>
                    </div>
                    <h2 class="objective-heading h3 mb-2 mb-sm-4 light-300">
                        Misi
                    </h2>
                    <p class="light-300" v-for="target in targets" :key="target.id">
                        {{ target.misi }}
                    </p>
                </div>

                <div class="objective col-lg-4 mt-sm-0 mt-4">
                    <div class="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-secondary shadow-lg">
                        <i class="display-4 bx bxs-select-multiple text-light"></i>
                    </div>
                    <h2 class="objective-heading h3 mb-2 mb-sm-4 light-300">Our Goal</h2>
                    <p class="light-300" v-for="target in targets" :key="target.id">
                        {{ target.goal }}
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>

<script type="text/javascript">
    import axios from 'axios';
	export default {
		name: "ComponentsAbout",
        data() {
            return {
                teams: [],
                partners: [],
                targets: []
            }
        },
        created() {
            this.getTeam();
            this.getPartner();
            this.getTarget();
        },
        methods: {
            async getTeam() {
                try {
                    const response = await axios.get("team");
                    this.teams = response.data;
                } catch (error) {
                    console.log("Oops.. Terjadi Kesalahan");
                }
            },

            async getPartner() {
                try {
                    const response = await axios.get("partner");
                    this.partners = response.data;
                } catch (error) {   
                    console.log("Oops.. Terjadi Kesalahan");
                }
            },

            async getTarget() {
                try {
                    const response = await axios.get("target");
                    this.targets = response.data;
                } catch (error) {
                    console.log("Oops.. Terjadi Kesalahan");
                }
            }

        }
	}
</script>