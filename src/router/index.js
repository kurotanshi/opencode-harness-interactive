import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChapterView from '../views/ChapterView.vue'
import SectionView from '../views/SectionView.vue'
import QuizView from '../views/QuizView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/chapter/:cid', name: 'chapter', component: ChapterView },
    { path: '/chapter/:cid/section/:sid', name: 'section', component: SectionView },
    { path: '/chapter/:cid/quiz', name: 'quiz', component: QuizView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

export default router
