<template>
    <div class="hello">
        <iframe src="/static/mp3/ada.mp3" style="display:none" allow="autoplay"/>
        <div class="container text-left" v-if="run">
            <p>Page 1</p>
            <table class="table" border="solid">
                <tr class="thead-light">
                    <th>Background &#128102;</th>
                </tr>
                <tr>
                    <td>
                        <p class="text-justify">
                            Kata adalah suatu hal mudah diucapkan oleh semua orang, tapi apakah kamu tahu ada beberapa orang yang tak bisa berbicara walau pun dia tak bisu,
                            sedikit berkhayal dapat berbicara dalam sebuah ilusi adalah sesuatu yang berharga bagi mereka, memang itu aneh tapi itulah kenyataannya bagi mereka yang tak pernah bisa menyampaikan kata apa yang ada di dalam pikirannya.
                        </p>
                    </td>
                </tr>
            </table>
            <div class="text-right">
                <a class="btn btn-success text-light" :href="'/third'">Lanjut</a>
            </div>
        </div>

        <div class="text-center" v-else="run=false">
            <img src="../assets/open.gif" class="img">
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
        background-color: #FFFFFF;
        width: 100%;
        height: 100%;
        padding-bottom: 100%;
        padding-top: 40px;
    }

    p {
        text-decoration: underline;
    }

    .img {
        background-color: white;
        width: 70%;
    }

    @media screen and (max-width: 360px) {
        .container {
            background-color: white;
            width: 90%;
        }
    }
</style>