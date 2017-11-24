var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Flyweight;
(function (Flyweight) {
    var Style;
    (function (Style) {
        Style[Style["Block"] = 0] = "Block";
        Style[Style["Inline"] = 1] = "Inline";
    })(Style || (Style = {}));
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    var Writer = /** @class */ (function () {
        function Writer(tagName, color) {
            this.tagName = tagName;
            this.color = color;
        }
        Writer.prototype.write = function (content) {
            console.log("<" + this.tagName + " style='color:" + Color[this.color] + "'>" +
                content +
                "");
        };
        return Writer;
    }());
    var BlockWriter = /** @class */ (function (_super) {
        __extends(BlockWriter, _super);
        function BlockWriter(color) {
            return _super.call(this, "div", color) || this;
        }
        return BlockWriter;
    }(Writer));
    var InlineWriter = /** @class */ (function (_super) {
        __extends(InlineWriter, _super);
        function InlineWriter(color) {
            return _super.call(this, "span", color) || this;
        }
        return InlineWriter;
    }(Writer));
    var FlyWeightWriterFactory = /** @class */ (function () {
        function FlyWeightWriterFactory() {
        }
        FlyWeightWriterFactory.getWriter = function (style, color) {
            var key = style.toString() + color.toString();
            if (!this._elements[key]) {
                switch (style) {
                    case Style.Block:
                        this._elements[key] = new BlockWriter(color);
                        break;
                    case Style.Inline:
                        this._elements[key] = new InlineWriter(color);
                        break;
                }
            }
            var retVal = this._elements[key];
            return retVal;
        };
        FlyWeightWriterFactory._elements = {};
        return FlyWeightWriterFactory;
    }());
    var HtmlElement = /** @class */ (function () {
        function HtmlElement(style, color) {
            this.writer = FlyWeightWriterFactory.getWriter(style, color);
        }
        Object.defineProperty(HtmlElement.prototype, "content", {
            get: function () {
                return this._content;
            },
            set: function (value) {
                this._content = value;
            },
            enumerable: true,
            configurable: true
        });
        HtmlElement.prototype.write = function () {
            this.writer.write(this.content);
        };
        return HtmlElement;
    }());
    window.addEventListener("load", function () {
        for (var i = 0; i < 100; i++) {
            var style = Math.floor(Math.random() * 2);
            var color = Math.floor(Math.random() * 3);
            var element = new HtmlElement(style, color);
            element.content = "This element uses a flyweight for rendering!";
            element.write();
        }
    });
})(Flyweight || (Flyweight = {}));