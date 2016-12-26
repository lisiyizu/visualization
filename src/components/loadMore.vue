<template lang="html">
<div class="entry-more" v-show="load">
    <!-- <em>加载中....</em> -->
  <span></span>
  <span></span>
  <span></span>
</div>
</template>

<script>
export default {
  props: {
    load: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less">
.entry-more {
    padding: 2rem;
    text-align: center;
    position: relative;
    em {
        display: inline-block;
        font-size: 16px;
        color: #999;
    }
    span {
        width:16px;
    	height:16px;
    	border-radius:50%;
    	display:inline-block;
    	position:absolute;
    	left:50%;
    	margin-left:-8px;
        animation:3s infinite linear;
    	-webkit-animation:3s infinite linear;
        &:nth-child(2){
        	background:#E84C3D;
            animation: csshub-kiri 1.2s infinite linear;
        	-webkit-animation:csshub-kiri 1.2s infinite linear;
        }
        &:nth-child(3){
        	background:#F1C40F;
        	z-index:100;
        }
        &:nth-child(4){
        	background:#2FCC71;
            animation:csshub-kanan 1.2s infinite linear;
        	-webkit-animation:csshub-kanan 1.2s infinite linear;
        }
    }
}
@-webkit-keyframes csshub-kanan {
    0% {-webkit-transform:translateX(20px);
    }

	50%{-webkit-transform:translateX(-20px);
	}

	100%{-webkit-transform:translateX(20px);
	z-index:200;
	}
}
@keyframes csshub-kanan {
    0% {transform:translateX(20px);
    }

	50%{transform:translateX(-20px);
	}

	100%{transform:translateX(20px);
	z-index:200;
	}
}

@-webkit-keyframes csshub-kiri {
     0% {-webkit-transform:translateX(-20px);
	z-index:200;
    }
	50%{-webkit-transform:translateX(20px);
	}
	100%{-webkit-transform:translateX(-20px);
	}
}

@keyframes csshub-kiri {
    0%{ transform:translateX(-20px);
	z-index:200;
    }
	50%{transform:translateX(20px);
	}
	100%{transform:translateX(-20px);
	}
}
</style>
