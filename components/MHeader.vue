<template>
  <header class="relative w-full bg-gray-300">
    <MSVG class="micko" />
    <nav class="container relative px-2 sm:px-0">
      <NavigationList />
      <transition-group
        name="list"
        tag="div"
        :class="{ 'projects-page': onProjects }"
      >
        <img
          key="image"
          src="/images/MihailoPantovic.jpg"
          alt="Mihailo Pantovic"
          class="animated image rounded-full border-black border-4 w-24 h-24"
        />
        <ul
          key="social"
          class="flex animated social"
        >
          <SocialIcon
            link="https://github.com/Mihailo23"
            title="Github Profile"
          >
            <path d="M10.015 9.949h-.03c-1.191 0-2.24-.303-2.861.268a1.57 1.57 0 0 0-.527 1.197c0 1.852 1.483 2.08 3.389 2.08h.029c1.905 0 3.389-.229 3.389-2.08 0-.443-.156-.856-.527-1.197-.622-.571-1.671-.268-2.862-.268zM8.393 12.48c-.363 0-.656-.408-.656-.91s.293-.908.656-.908c.363 0 .657.406.657.908.001.502-.293.91-.657.91zm3.213 0c-.363 0-.657-.408-.657-.91s.294-.908.657-.908c.362 0 .656.406.656.908.001.502-.293.91-.656.91zM10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zm.876 13.539c-.172 0-.514 0-.876.002-.362-.002-.704-.002-.876-.002-.76 0-3.772-.059-3.772-3.689 0-.834.286-1.445.755-1.955-.074-.184-.078-1.232.32-2.236 0 0 .916.1 2.301 1.051.289-.081.781-.122 1.272-.122s.982.041 1.273.121c1.385-.951 2.301-1.051 2.301-1.051.398 1.004.395 2.053.32 2.236.469.51.755 1.121.755 1.955-.001 3.632-3.013 3.69-3.773 3.69z" />
          </SocialIcon>
          <SocialIcon
            link="https://www.linkedin.com/in/mihailo-pantovic-a790a157/"
            title="LinkedIn Profile"
          >
            <path d="M10 .4C4.698.4.4 4.698.4 10s4.298 9.6 9.6 9.6 9.6-4.298 9.6-9.6S15.302.4 10 .4zM7.65 13.979H5.706V7.723H7.65v6.256zm-.984-7.024c-.614 0-1.011-.435-1.011-.973 0-.549.409-.971 1.036-.971s1.011.422 1.023.971c0 .538-.396.973-1.048.973zm8.084 7.024h-1.944v-3.467c0-.807-.282-1.355-.985-1.355-.537 0-.856.371-.997.728-.052.127-.065.307-.065.486v3.607H8.814v-4.26c0-.781-.025-1.434-.051-1.996h1.689l.089.869h.039c.256-.408.883-1.01 1.932-1.01 1.279 0 2.238.857 2.238 2.699v3.699z" />
          </SocialIcon>
        </ul>
        <ul
          key="projects"
          class="flex text-white animated projects"
        >
          <ProjectBubble
            v-for="(project, name) in projects"
            :key="name"
            :project="name"
          />
        </ul>
      </transition-group>
    </nav>
  </header>
</template>
<script>
import { mapState } from "vuex";
import projects from "~/assets/projects.json";

import NavigationList from "~/components/navigation/NavigationList.vue";
import ProjectBubble from "~/components/UI/ProjectBubble.vue";
import SocialIcon from "~/components/UI/SocialIcon.vue";
import MSVG from "~/components/MSVG.vue";

export default {
  components: {
    ProjectBubble,
    NavigationList,
    SocialIcon,
    MSVG
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
  --header-height: 250px;
  --image-size: 96px;
  --social-width: 56px;
  --projects-height: 48px;
  --social-height-big: 36px;
  --social-height-small: 24px;
  --image-bottom: calc(var(--header-height) - var(--image-size) / 2);
  // TODO: check why this is not working in prod
  --image-center: calc(var(--header-height) / 2 - var(--image-size) / 2);
}
header {
  height: var(--header-height);
}
.animated,
.list-move,
.social a,
.social li,
.projects a {
  transition: all 1s ease;
}
.image {
  position: absolute;
  top: 0;
  transform: translateY(var(--image-bottom));
  z-index: 6;
  left: 0.5rem;
  @screen sm {
    left: 0;
  }
}
.micko {
  position: absolute;
  transform: translateY(1rem);
  height: calc(var(--header-height) - 2rem);
  width: 100%;
  @screen sm {
    bottom: auto;
  }
  @screen md {
    top: 0;
    height: 350px;
  }
}
.social {
  position: absolute;
  top: 0;
  transform: translateX(calc(var(--image-size) + 1rem))
    translateY(calc(var(--header-height) - var(--social-height-big) / 3)); // it's 3, not 2 because it's <a> is scaled to 1.5
  li:not(:first-child) {
    margin-left: 1rem;
  }
  a {
    transform: scale(1.5) rotate(0deg);
  }
  a:hover,
  a:focus {
    outline: none;
  }
}
.projects {
  visibility: hidden;
  position: absolute;
  top: 0;
  transform: translateY(var(--header-height));
  opacity: 0;
  left: 0.5rem;
  @screen sm {
    left: 0;
  }
  a {
    transform: rotate(-180deg);
    outline: none;
    box-shadow: 0 0 0 #000000;
    &:hover,
    &:focus {
      border-color: #000000;
      box-shadow: 0 0 14px #000000;
    }
  }
}
.projects-page {
  .image {
    // padding taken into account
    // TODO: chekc why you had to hardcode this translateY shit!
    // for your stupid shitty iPhone 5S
    // transform: translateX(calc(100vw / 2 - var(--image-size) / 2 - 0.5rem))
    //   translateY(77px) rotate(0deg);
    opacity: 0;
  }
  .social {
    transform: translateX(calc(100vw - var(--social-width) - 3rem))
      translateY(0.5rem);
    li:not(:first-child) {
      margin-left: 0.5rem;
    }
    a {
      transform: scale(1) rotate(360deg);
    }
  }
  .projects {
    visibility: visible;
    opacity: 1;
    transform: translateY(
      calc(var(--header-height) - var(--projects-height) - 0.5rem)
    );
    left: 0.5rem;
    @screen sm {
      left: 0;
    }
    a {
      transform: rotate(0deg);
    }

    a.nuxt-link-active {
      margin-right: 0.5rem;
      // transform: translateY(-15px);
      border-color: #000000;
      box-shadow: 0 0 14px #000000;
    }
  }
  @screen sm {
    .image {
      opacity: 1;
      transform: translateX(calc(640px - var(--image-size)))
        translateY(var(--image-bottom)) rotate(360deg);
    }
    .social {
      transform: translateX(calc(640px - var(--social-width) - 2rem))
        translateY(0.5rem);
    }
  }
  @screen md {
    .image {
      transform: translateX(calc(768px - var(--image-size)))
        translateY(var(--image-bottom)) rotate(360deg);
    }
    .social {
      transform: translateX(calc(768px - calc(var(--social-width) + 2rem)))
        translateY(0.5rem);
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
// .milica-pantovic {
//   background-image: url("/images/projects/milica-pantovic.png");
// }
.branko-pesic {
  background-image: url("/images/projects/branko-pesic.png");
}
.meridijan-sped {
  background-image: url("/images/projects/meridijan-sped.png");
}
</style>
