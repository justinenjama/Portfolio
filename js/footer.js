const setFooter = () => {
    const currentYear = new Date().getFullYear();
    document.querySelector("footer span").innerHTML = `Copyright &copy; ${currentYear} by Justine Njama Stanslous. Software Engineer - All rights reserved`;
}
window.onload = setFooter;