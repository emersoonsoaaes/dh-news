const express = require('express');

const HomeController = {
    showHomePage: (req, res) => {
        return res.render("index")
    }
}

module.exports = HomeController;