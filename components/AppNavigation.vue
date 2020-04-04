<template>
  <header>
    <div class="bk-img">
      <div class="header-img1 bg-blue-500"></div>
    </div>
    <div class="nav-wrapper">
      <nav class="container relative px-2 sm:px-0">
        <ul class="flex text-white">
          <nuxt-link
            exact
            to="/"
            class="outline-none transition duration-500 px-2 py-1 border-b-4 border-transparent hover:border-blue-500 focus:border-blue-500"
            >Home</nuxt-link
          >
          <nuxt-link
            to="/projects"
            class="outline-none transition duration-500 px-2 py-1 border-b-4 border-transparent hover:border-blue-500 focus:border-blue-500"
            >Projects</nuxt-link
          >
        </ul>
        <transition-group
          name="list"
          tag="div"
          :class="{ 'projects-page': onProjects }"
        >
          <img
            key="image"
            src="/images/MihailoPantovic.jpeg"
            alt="Mihailo Pantovic"
            class="items image rounded-full border-white border-4 w-32 h-32"
          />
          <ul key="social" class="flex items social">
            <li>
              <a
                class="block text-blue-500 rounded-full bg-white border-2 border-white"
                target="_blank"
                href="https://github.com/Mihailo23"
              >
                <svg
                  class="fill-current inline-block h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10.015 9.949h-.03c-1.191 0-2.24-.303-2.861.268a1.57 1.57 0 0 0-.527 1.197c0 1.852 1.483 2.08 3.389 2.08h.029c1.905 0 3.389-.229 3.389-2.08 0-.443-.156-.856-.527-1.197-.622-.571-1.671-.268-2.862-.268zM8.393 12.48c-.363 0-.656-.408-.656-.91s.293-.908.656-.908c.363 0 .657.406.657.908.001.502-.293.91-.657.91zm3.213 0c-.363 0-.657-.408-.657-.91s.294-.908.657-.908c.362 0 .656.406.656.908.001.502-.293.91-.656.91zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm.876 13.539c-.172 0-.514 0-.876.002-.362-.002-.704-.002-.876-.002-.76 0-3.772-.059-3.772-3.689 0-.834.286-1.445.755-1.955-.074-.184-.078-1.232.32-2.236 0 0 .916.1 2.301 1.051.289-.081.781-.122 1.272-.122s.982.041 1.273.121c1.385-.951 2.301-1.051 2.301-1.051.398 1.004.395 2.053.32 2.236.469.51.755 1.121.755 1.955-.001 3.632-3.013 3.69-3.773 3.69z"
                  />
                </svg>
              </a>
            </li>
            <li class="ml-2">
              <a
                class="block text-blue-500 rounded-full bg-white border-2 border-white"
                target="_blank"
                href="https://www.linkedin.com/in/mihailo-pantovic-a790a157/"
              >
                <svg
                  class="fill-current inline-block h-12 w-12"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <ul
            key="projects"
            class="flex text-white items projects transition duration-500"
          >
            <ProjectBubble project="dev9t" />
            <ProjectBubble project="asteria-led" />
            <ProjectBubble project="asteria-adventures" />
            <ProjectBubble project="branko-pesic" />
          </ul>
        </transition-group>
      </nav>
    </div>
  </header>
</template>
<script>
import { mapState } from "vuex";
import ProjectBubble from "~/components/UI/ProjectBubble.vue";

export default {
  components: {
    ProjectBubble
  },
  computed: {
    ...mapState(["page"]),
    onProjects() {
      return this.page.includes("projects");
    }
  }
};
</script>
<style lang="scss">
:root {
  --image-size: 128px;
}
header {
  width: 100vw;
  height: 300px;
  position: relative;
  &:before {
    content: "";
    z-index: 10;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: black;
    // background: radial-gradient(
    //   ellipse at center,
    //   transparent 50%,
    //   transparent 75%,
    //   #000000 100%
    // );
    // filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="rgba(0, 0, 0, 0)",endColorstr="rgba(166, 0, 0, 0)",GradientType=1);
    opacity: 0.6;
  }
}
.header-img1 {
  background: url("/images/hero.jpg") 50%;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 300px;
}
.bk-img {
  position: absolute;
  width: 100vw;
  height: 300px;
  overflow: hidden;
  top: 0;
}
.nav-wrapper {
  width: 100vw;
  position: relative;
  z-index: 1000;
  //   background: rgba(15, 19, 20, 0.45);
}
.items,
.list-move,
.social a,
.projects a {
  transition: all 0.6s ease;
}
.image {
  position: absolute;
  top: 236px;
  left: 0;
  z-index: 6;
  //   transform: translateX(0) translateY(100px) scale(1);
}
.social {
  position: absolute;
  top: 310px;
  left: var(--image-size);
  //   transform: translateX(0) translateY(calc(100% + 20px)) scale(1);
  a:hover {
    border-color: #4299e1;
    box-shadow: 0 0 10px #4299e1;
  }
}
.projects {
  position: absolute;
  top: 300px;
  opacity: 0;
  a {
    box-shadow: 0 0 0 #4299e1;
    &:hover {
      border-color: #4299e1;
      box-shadow: 0 0 14px #4299e1;
    }
  }
  .nuxt-link-active {
    margin-right: 0;
    box-shadow: 0 0 14px #4299e1;
  }
}
.projects-page {
  .image {
    transform: translateX(calc(100vw - var(--image-size) - 20px))
      translateY(-120px);
  }
  .social {
    top: 60px;
    left: 20px;
  }
  .projects {
    opacity: 1;
    transform: translateY(-70px);
  }
  @screen sm {
    .image {
      transform: translateX(calc(640px - var(--image-size)));
    }
    .social {
      left: 0;
    }
  }
  @screen md {
    .image {
      transform: translateX(calc(768px - var(--image-size)));
    }
  }
  @screen lg {
    .image {
      transform: translateX(calc(1024px - var(--image-size)));
    }
  }
  @screen xl {
    .image {
      transform: translateX(calc(1280px - var(--image-size))) translateY(-20px);
    }
  }
}
.nuxt-link-active {
  border-color: #4299e1;
}
.asteria-led {
  background-image: url("/images/projects/asteria-led.png");
}
.asteria-adventures {
  background-image: url("/images/projects/asteria-adventures.png");
}
.dev9t {
  background-image: url("/images/projects/dev9t.png");
}
.branko-pesic {
  background-image: url("/images/projects/branko-pesic.png");
}
</style>
