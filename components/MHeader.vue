<template>
  <header>
    <div class="bk-img">
      <div class="header-image bg-blue-500"></div>
    </div>
    <div class="nav-wrapper">
      <nav class="container relative px-2 sm:px-0">
        <NavigationList />
        <transition-group
          name="list"
          tag="div"
          :class="{ 'projects-page': onProjects }"
        >
          <img
            key="image"
            src="/images/MihailoPantovic.jpeg"
            alt="Mihailo Pantovic"
            class="animated image rounded-full border-white border-4 w-32 h-32"
          />
          <ul key="social" class="flex animated social">
            <SocialIcon link="https://github.com/Mihailo23">
              <path
                d="M10.015 9.949h-.03c-1.191 0-2.24-.303-2.861.268a1.57 1.57 0 0 0-.527 1.197c0 1.852 1.483 2.08 3.389 2.08h.029c1.905 0 3.389-.229 3.389-2.08 0-.443-.156-.856-.527-1.197-.622-.571-1.671-.268-2.862-.268zM8.393 12.48c-.363 0-.656-.408-.656-.91s.293-.908.656-.908c.363 0 .657.406.657.908.001.502-.293.91-.657.91zm3.213 0c-.363 0-.657-.408-.657-.91s.294-.908.657-.908c.362 0 .656.406.656.908.001.502-.293.91-.656.91zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm.876 13.539c-.172 0-.514 0-.876.002-.362-.002-.704-.002-.876-.002-.76 0-3.772-.059-3.772-3.689 0-.834.286-1.445.755-1.955-.074-.184-.078-1.232.32-2.236 0 0 .916.1 2.301 1.051.289-.081.781-.122 1.272-.122s.982.041 1.273.121c1.385-.951 2.301-1.051 2.301-1.051.398 1.004.395 2.053.32 2.236.469.51.755 1.121.755 1.955-.001 3.632-3.013 3.69-3.773 3.69z"
              />
            </SocialIcon>
            <SocialIcon
              link="https://www.linkedin.com/in/mihailo-pantovic-a790a157/"
            >
              <path
                d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z"
              />
            </SocialIcon>
          </ul>
          <ul
            key="projects"
            class="flex text-white animated projects transition duration-500"
          >
            <ProjectBubble
              v-for="(project, name) in projects"
              :key="name"
              :project="name"
            />
          </ul>
        </transition-group>
      </nav>
    </div>
  </header>
</template>
<script>
import { mapState } from "vuex";
import projects from "~/assets/projects.json";

import NavigationList from "~/components/navigation/NavigationList.vue";
import ProjectBubble from "~/components/UI/ProjectBubble.vue";
import SocialIcon from "~/components/UI/SocialIcon.vue";

export default {
  components: {
    ProjectBubble,
    NavigationList,
    SocialIcon
  },

  data() {
    return {
      projects
    };
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
  --social-size: 56px;
}
header {
  width: 100vw;
  height: 200px;
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
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      #000000 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="rgba(0, 0, 0, 0)",endColorstr="rgba(166, 0, 0, 0)",GradientType=1);
    opacity: 0.6;
  }
}
.header-image {
  // background: url("/images/hero.jpg") 50%;
  background: black;
  background-size: cover;
  position: absolute;
  width: 100vw;
  height: 200px;
}
.bk-img {
  position: absolute;
  width: 100vw;
  height: 200px;
  overflow: hidden;
  top: 0;
}
.nav-wrapper {
  width: 100vw;
  position: relative;
  z-index: 1000;
}
.animated,
.list-move,
.social a,
.social li,
.projects a {
  transition: all 0.6s ease;
}
.image {
  position: absolute;
  top: 136px;
  z-index: 6;
  left: 0.5rem;
  @screen sm {
    left: 0;
  }
}
.social {
  position: absolute;
  transform: translateX(calc(var(--image-size))) translateY(188px);
  li:not(:first-child) {
    margin-left: 1rem;
  }
  a {
    transform: scale(1.5);
  }
  a:hover,
  a:focus {
    border-color: #4299e1;
    outline: none;
  }
}
.projects {
  visibility: hidden;
  position: absolute;
  top: 200px;
  opacity: 0;
  left: 0.5rem;
  @screen sm {
    left: 0;
  }
  a {
    outline: none;
    box-shadow: 0 0 0 #4299e1;
    &:hover,
    &:focus {
      border-color: #4299e1;
      box-shadow: 0 0 14px #4299e1;
    }
  }
  .nuxt-link-active {
    margin-right: 0.5rem;
    // transform: translateY(-15px);
    border-color: #4299e1;
    box-shadow: 0 0 14px #4299e1;
  }
}
.projects-page {
  .image {
    transform: translateX(calc(100vw - var(--image-size) + 10px))
      translateY(-50px) scale(0.5);
  }
  .projects {
    left: 0.5rem;
    @screen sm {
      left: 0;
    }
  }
  .social {
    transform: translateX(calc(100vw - var(--social-size) - 3rem))
      translateY(-30px);
    li:not(:first-child) {
      margin-left: 0.5rem;
    }
    a {
      transform: scale(1);
    }
  }
  .projects {
    visibility: visible;
    opacity: 1;
    transform: translateY(-70px);
  }
  @screen sm {
    .image {
      transform: translateX(calc(640px - var(--image-size)));
    }
    .social {
      transform: translateX(calc(640px - var(--social-size) - 2rem))
        translateY(-30px);
    }
  }
  @screen md {
    .image {
      transform: translateX(calc(768px - var(--image-size)));
    }
    .social {
      transform: translateX(calc(768px - calc(var(--social-size) + 2rem)))
        translateY(-30px);
    }
  }
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
.milica-pantovic {
  background-image: url("/images/projects/milica-pantovic.png");
}
.branko-pesic {
  background-image: url("/images/projects/branko-pesic.png");
}
</style>
