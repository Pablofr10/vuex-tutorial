<template>
  <div class="toastr-bg" :class="{ show: mostraToastr, hide: !mostraToastr }">
    <div class="toastr">
      <a class="fechar" @click="fechar()">X</a>
      <span>Mensagem toastr</span>
    </div>
  </div>
</template>

<script>
import { ref, watch } from "vue";
export default {
  setup() {
    const mostraToastr = ref(false);

    function fechar() {
      mostraToastr.value = false;
    }

    watch(mostraToastr, (valor) => {
      if (valor) {
        setTimeout(() => {
          mostraToastr.value = false;
        }, 3000);
      }
    });
    return { mostraToastr, fechar };
  },
};
</script>

<style scoped>
.toastr-bg {
  background: rgb(97, 233, 137);
  border-radius: 5px;
  position: absolute;
  top: 100px;
  right: 10px;
}

.toastr {
  padding: 5px 15px;
  position: relative;
}

.fechar {
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 3px;
  font-size: 12px;
}

.show {
  visibility: visible;
}

.show {
  animation: show 0.5s forwards;
}

@keyframes show {
  0% {
    transform: translate(-15px, 15px) scale(0);
  }
  50% {
    transform: translate(-15px, 15px) scale(1.2);
  }
  70% {
    transform: translate(-15px, 15px) scale(0.9);
  }
  100% {
    transform: translate(-15px, 15px) scale(1);
  }
}

.hide {
  visibility: hidden;
}
</style>
