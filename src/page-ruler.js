"use strict";

var body = document.body,
    html = document.documentElement;

module.exports = {

    /*
        Measures the width and height of current document
        
        @return [object]
            [number]: Width
            [number]: Height
    */
    document: function () {
        return {
            width: this.documentWidth(),
            height: this.documentHeight()
        };
    },

    /*
    */
    documentWidth: function () {
        return Math.max(body.scrollWidth, body.offsetWidth,
                        html.scrollWidth, html.offsetWidth, html.clientWidth);
    },

    /*

    */
    documentHeight: function () {
        return Math.max(body.scrollHeight, body.offsetHeight,
                        html.scrollHeight, html.offsetHeight, html.clientHeight);
    },
    
    /*
        Measures the width and height of current viewport
        
        @return [object]
            [number]: Width
            [number]: Height
    */
    viewport: function () {
        return {
            width: this.viewportWidth(),
            height: this.viewportHeight()
        }
    },
    
    
    /*
        Measures height of current viewport
        
        @return [number]: Height of current viewport
    */
    viewportHeight: function () {
        var windowHeight = window.innerHeight || html.clientHeight || body.clientHeight;
        
        return Math.max(html.clientHeight, windowHeight || 0);
    },
    
    
    /*
        Measures width of current viewport
        
        @return [number]: Width of current viewport
    */
    viewportWidth: function () {
        var windowWidth = window.innerWidth || html.clientWidth || body.clientWidth;
        
        return Math.max(html.clientWidth, windowWidth || 0);
    },
    
    
    /*
        Measures offset of current viewport from document
        
        @return [object]
            [number]: Top
            [number]: Left
    */
    offset: function () {
        return {
            top: this.offsetTop(),
            left: this.offsetLeft()
        }
    },
    
    
    /*
        Offset of current viewport from document top
        
        @return [number]: Viewport from document top
    */
    offsetTop: function () {
        return window.pageYOffset || html.scrollTop;
    },
    
    
    /*
        Offset of current viewport from document left
        
        @return [number]: Viewport from document left
    */
    offsetLeft: function () {
        return window.pageXOffset || html.scrollLeft;
    }
};
