import { mount } from '@vue/test-utils'
import { Game } from 'phaser'
import PhaserGame from '~/phaserGame.vue'
import VuePhaserPlugin from './vue.index'

describe('PhaserGame.vue', () => {
    test('should mount component', () => {
        const createGame = () =>
            new Game({
                parent: 'phaser',
            })
        const wrapper = mount(PhaserGame, {
            global: {
                plugins: [VuePhaserPlugin],
            },
            propsData: {
                createGame,
            },
        })
        expect(wrapper.html()).toMatch('phaser')
    })
})
