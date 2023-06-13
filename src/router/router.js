import {createRouter, createWebHistory} from "vue-router";
import MainContent from "../views/content/MainContent.vue";
import StudyContent from "../views/content/StudyContent.vue";
import NotFound from "../views/content/NotFound.vue";
import VideoPlay from "../views/content/VideoPlay.vue";
import UploadFile from "../views/content/UploadFile.vue";


const routerHistory = createWebHistory()
export default createRouter({
    history: routerHistory,
    strict: true,
    routes: [
        {
            path: '/',
            component: MainContent
        },
        {
            path: '/study-content',
            component: StudyContent
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/video-play',
            component: VideoPlay,

        },
        {
            path: '/upload-file',
            component: UploadFile,

        },
    ]
})
