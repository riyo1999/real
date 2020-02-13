<template>
    <div class="hello">
    <iframe src="/static/mp3/tolong.mp3" style="display:none" allow="autoplay"/>
        <div class="container text-left" v-if="run">
            <p>Page 2</p>
            <table class="table" border="solid">
                <tr class="thead-light">
                    <th>Why &#128102;</th>
                </tr>
                <tr>
                    <td>
                        <p class="text-justify">
                            Sedikit cerita mereka yang tak pernah tersentuh orang lain dan cenderung terlihat menjauh, sebernarnya memiliki sebuah mimpi untuk mendapatkan sebuah titik terang untuk merubah hidupnya.
                            Tapi hanya beberapa orang yang dapat mengertikan keberadaannya, mereka yang tak pernah tersentuh pun mulai mencari apa yang ingin dilakukan dan selalu bergumam dalam benaknya
                            apakah keberadaannya terlihat nyata atau hanya ilusi yang menghilang setelah pagi menjelang. Yang berarti hanya mimpi yang mereka anggap nyata dan hilang dalam kenyataan kemudian.
                            <b>Mereka yang selalu berharap datangnya kenyataan pun perlahan mulai mencoba menemukan apa yang bagi mereka berarti, lalu kenyataan itu mulai mendekat namun hilang kemudian setelah cahaya kenyataan itu merasa takut dengan heningnya hidupnya. Dan berharap dapat kembali bertemu dalam suatu waktu yang menakjubkan.</b>
                            <b>Terima kasih bagi mereka yang menemani seorang sepi itu, walau hanya sementara namun bagi mereka itu berharga.</b>
                        </p>
                    </td>
                </tr>
            </table>
            <div class="text-right">
                <a class="btn btn-success text-light" :href="'/final'">Lanjut</a>
            </div>
        </div>

        <div class="text-center" v-else="run=false">
            <img src="../assets/heartbeat.gif" class="img">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            run: false,
        }
    },

    methods: {
        flash: function(){
            var v = this;
            setTimeout(function(){
                v.run = true;
            },3000);
        }
    },

    mounted() {
        this.flash();
    },
}
</script>

<style scoped>
    .container{
        background-color: white;
        width: 80%;
        padding-bottom: 30px;
    }

    .hello {
        background-color: #DD5152;
        width: 100%;
        height: 100%;
        padding-bottom: 100%;
        padding-top: 40px;
    }

    .img {
        width: 50%;
    }

    @media screen and (max-width: 600px) {
        .container {
            background-color: white;
            width: 90%;
        }

        .img {
            width: 100%;
        }
    }
</style>