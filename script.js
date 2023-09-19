const checkbox = document.getElementById('checkbox')

checkbox.addEventListener ('change', () => {
    document.body.classList.toggle('dark')
    document.getElementsByClassName('lead').classList.toggle('lead-white')
})