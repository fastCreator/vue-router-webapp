export default {
  name: 'RouterView',
  functional: true,
  render (_, { props, children, parent, data }) {
    const h = parent.$createElement
    const {
      pagesList: { tabBar, pages }
    } = parent.$router
    const route = parent.$route
    const matched = route.matched && route.matched[0]
    return h('div', { class: 'vue-router-webapp' }, [
      h(
        'div',
        { class: 'vue-router-webapp-tabBar' },
        tabBar.map(it =>
          h(
            it.component,
            {
              style: {
                display: it.key === matched.path ? null : 'none'
              }
            },
            { key: it.key }
          )
        )
      ),
      h(
        'div',
        { class: 'vue-router-webapp-pages' },
        pages.map(it =>
          h(
            it.component,
            {
              style: {
                display: it.key === matched.path ? null : 'none'
              }
            },
            { key: it.key }
          )
        )
      )
    ])
  }
}
