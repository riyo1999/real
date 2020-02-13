<template>
    <div class="container text-center">
    <iframe src="/static/mp3/celengan.mp3" style="display:none" allow="autoplay"/>
        <div v-if="flash" class="isi">
            <h1>I <i class="emoji">❤️</i> U <font class="name">RIZKA</font></h1>
            <p>Maaf jika ini mengganggumu tapi ini kenyataan yang selalu ingin diungkapkan.</p>
        </div>
        <div v-else="!flash" class="bfr">
            <img class="send" src="../assets/animation.gif">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            flash: false,
        }
    },
    methods:{
        run: function() {
            var v = this;
            setTimeout(function(){
                v.flash = true;
            }, 3000);
        }
    },

    mounted() {
        this.run();
    },
}
</script>

<style>
    .send {
        width: 70%;
        height: auto;
    }

    .bfr {
        margin-top: 40px;
    }

    .isi {
        margin-top: 40px;
    }

    .emoji {
        width: 100%;
        color: red;
    }

    .name {
        color: pink;
    }

    @media screen and (max-width: 450px;) {
        .send {
            width: 100%;
            height: auto;
        }
    }
</style>