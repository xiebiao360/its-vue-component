import Dialog from './dialog'

const components = [
    Dialog
]

// 定义 install 方法
const install = function (Vue, option) {
    if (install.installed) return
    install.installed = true
    if (option) {
        const { size } = option;
        if (size) {
            Vue.prototype.$ELEMENT = { size };
        }
    }
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
    })
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具备一个 install 方法
    install,
    // 组件列表
    ...components
}