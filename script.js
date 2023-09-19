const checkbox = document.getElementById('checkbox')

checkbox.addEventListener ('change', () => {
    document.body.classList.toggle('dark')
    document.body.classList.toggle('lead')
    document.body.classList.toggle('body')

})
