function init() {
    camera = new THREE.PerspectiveCamera(75, $container.width() / $container.height(), 1, 1e4),
    scene = new THREE.Scene,
    particles = new Array;
    for (var e = 2 * Math.PI,
    t = new THREE.SpriteCanvasMaterial({
        color: 16777215,
        program: function(t) {
            t.beginPath(),
            t.arc(0, 0, R, 0, e, !0),
            t.fill()
        }
    }), r = 0, i = 0; AMOUNTX > i; i++) for (var n = 0; AMOUNTY > n; n++) particle = particles[r++] = new THREE.Sprite(t),
    particle.position.x = i * SEPARATION - AMOUNTX * SEPARATION / 2,
    particle.position.z = n * SEPARATION - AMOUNTY * SEPARATION / 2,
    scene.add(particle);
    renderer = new THREE.CanvasRenderer({
        alpha: !0
    }),
    renderer.setPixelRatio(window.devicePixelRatio),
    renderer.setSize($container.width(), $container.height()),
    renderer.setClearColor(16777215, 0),
    $container.append(renderer.domElement),
    window.addEventListener("resize", onWindowResize, !1)
}

function onWindowResize() {
    camera.aspect = $container.width() / $container.height(),
    camera.updateProjectionMatrix(),
    renderer.setSize($container.width(), $container.height())
}

function animate() {
    requestAnimationFrame(animate),
    render()
}

function render() {
    camera.position.set(0, CAMERAY, CAMERAZ);
    for (var e = 0,
    t = 0; AMOUNTX > t; t++) for (var r = 0; AMOUNTY > r; r++) particle = particles[e++],
    particle.position.y = 50 * Math.sin(.4 * (t + count)) + 50 * Math.sin(.5 * (r + count)),
    particle.scale.x = particle.scale.y = 4 * (Math.sin(.4 * (t + count)) + 1) + 4 * (Math.sin(.5 * (r + count)) + 1);
    renderer.render(scene, camera),
    count += .05
}
var THREE = {
    REVISION: "73"
};
"function" == typeof define && define.amd ? define("three", THREE) : "undefined" != typeof exports && "undefined" != typeof module && (module.exports = THREE),
void 0 !== self.requestAnimationFrame && void 0 !== self.cancelAnimationFrame ||
function() {
    for (var e = 0,
    t = ["ms", "moz", "webkit", "o"], r = 0; r < t.length && !self.requestAnimationFrame; ++r) self.requestAnimationFrame = self[t[r] + "RequestAnimationFrame"],
    self.cancelAnimationFrame = self[t[r] + "CancelAnimationFrame"] || self[t[r] + "CancelRequestAnimationFrame"];
    void 0 === self.requestAnimationFrame && void 0 !== self.setTimeout && (self.requestAnimationFrame = function(t) {
        var r = Date.now(),
        i = Math.max(0, 16 - (r - e)),
        n = self.setTimeout(function() {
            t(r + i)
        },
        i);
        return e = r + i,
        n
    }),
    void 0 === self.cancelAnimationFrame && void 0 !== self.clearTimeout && (self.cancelAnimationFrame = function(e) {
        self.clearTimeout(e)
    })
} (),
void 0 === self.performance && (self.performance = {}),
void 0 === self.performance.now &&
function() {
    var e = Date.now();
    self.performance.now = function() {
        return Date.now() - e
    }
} (),
void 0 === Number.EPSILON && (Number.EPSILON = Math.pow(2, -52)),
void 0 === Math.sign && (Math.sign = function(e) {
    return 0 > e ? -1 : e > 0 ? 1 : +e
}),
void 0 === Function.prototype.name && void 0 !== Object.defineProperty && Object.defineProperty(Function.prototype, "name", {
    get: function() {
        return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1]
    }
}),
THREE.MOUSE = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2
},
THREE.CullFaceNone = 0,
THREE.CullFaceBack = 1,
THREE.CullFaceFront = 2,
THREE.CullFaceFrontBack = 3,
THREE.FrontFaceDirectionCW = 0,
THREE.FrontFaceDirectionCCW = 1,
THREE.BasicShadowMap = 0,
THREE.PCFShadowMap = 1,
THREE.PCFSoftShadowMap = 2,
THREE.FrontSide = 0,
THREE.BackSide = 1,
THREE.DoubleSide = 2,
THREE.FlatShading = 1,
THREE.SmoothShading = 2,
THREE.NoColors = 0,
THREE.FaceColors = 1,
THREE.VertexColors = 2,
THREE.NoBlending = 0,
THREE.NormalBlending = 1,
THREE.AdditiveBlending = 2,
THREE.SubtractiveBlending = 3,
THREE.MultiplyBlending = 4,
THREE.CustomBlending = 5,
THREE.AddEquation = 100,
THREE.SubtractEquation = 101,
THREE.ReverseSubtractEquation = 102,
THREE.MinEquation = 103,
THREE.MaxEquation = 104,
THREE.ZeroFactor = 200,
THREE.OneFactor = 201,
THREE.SrcColorFactor = 202,
THREE.OneMinusSrcColorFactor = 203,
THREE.SrcAlphaFactor = 204,
THREE.OneMinusSrcAlphaFactor = 205,
THREE.DstAlphaFactor = 206,
THREE.OneMinusDstAlphaFactor = 207,
THREE.DstColorFactor = 208,
THREE.OneMinusDstColorFactor = 209,
THREE.SrcAlphaSaturateFactor = 210,
THREE.NeverDepth = 0,
THREE.AlwaysDepth = 1,
THREE.LessDepth = 2,
THREE.LessEqualDepth = 3,
THREE.EqualDepth = 4,
THREE.GreaterEqualDepth = 5,
THREE.GreaterDepth = 6,
THREE.NotEqualDepth = 7,
THREE.MultiplyOperation = 0,
THREE.MixOperation = 1,
THREE.AddOperation = 2,
THREE.UVMapping = 300,
THREE.CubeReflectionMapping = 301,
THREE.CubeRefractionMapping = 302,
THREE.EquirectangularReflectionMapping = 303,
THREE.EquirectangularRefractionMapping = 304,
THREE.SphericalReflectionMapping = 305,
THREE.RepeatWrapping = 1e3,
THREE.ClampToEdgeWrapping = 1001,
THREE.MirroredRepeatWrapping = 1002,
THREE.NearestFilter = 1003,
THREE.NearestMipMapNearestFilter = 1004,
THREE.NearestMipMapLinearFilter = 1005,
THREE.LinearFilter = 1006,
THREE.LinearMipMapNearestFilter = 1007,
THREE.LinearMipMapLinearFilter = 1008,
THREE.UnsignedByteType = 1009,
THREE.ByteType = 1010,
THREE.ShortType = 1011,
THREE.UnsignedShortType = 1012,
THREE.IntType = 1013,
THREE.UnsignedIntType = 1014,
THREE.FloatType = 1015,
THREE.HalfFloatType = 1025,
THREE.UnsignedShort4444Type = 1016,
THREE.UnsignedShort5551Type = 1017,
THREE.UnsignedShort565Type = 1018,
THREE.AlphaFormat = 1019,
THREE.RGBFormat = 1020,
THREE.RGBAFormat = 1021,
THREE.LuminanceFormat = 1022,
THREE.LuminanceAlphaFormat = 1023,
THREE.RGBEFormat = THREE.RGBAFormat,
THREE.RGB_S3TC_DXT1_Format = 2001,
THREE.RGBA_S3TC_DXT1_Format = 2002,
THREE.RGBA_S3TC_DXT3_Format = 2003,
THREE.RGBA_S3TC_DXT5_Format = 2004,
THREE.RGB_PVRTC_4BPPV1_Format = 2100,
THREE.RGB_PVRTC_2BPPV1_Format = 2101,
THREE.RGBA_PVRTC_4BPPV1_Format = 2102,
THREE.RGBA_PVRTC_2BPPV1_Format = 2103,
THREE.LoopOnce = 2200,
THREE.LoopRepeat = 2201,
THREE.LoopPingPong = 2202,
THREE.Projector = function() {
    console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js."),
    this.projectVector = function(e, t) {
        console.warn("THREE.Projector: .projectVector() is now vector.project()."),
        e.project(t)
    },
    this.unprojectVector = function(e, t) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
        e.unproject(t)
    },
    this.pickingRay = function(e, t) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    }
},
THREE.CanvasRenderer = function() {
    console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js"),
    this.domElement = document.createElement("canvas"),
    this.clear = function() {},
    this.render = function() {},
    this.setClearColor = function() {},
    this.setSize = function() {}
},
THREE.Color = function(e) {
    return 3 === arguments.length ? this.fromArray(arguments) : this.set(e)
},
THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    set: function(e) {
        return e instanceof THREE.Color ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e),
        this
    },
    setHex: function(e) {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (255 & e) / 255,
        this
    },
    setRGB: function(e, t, r) {
        return this.r = e,
        this.g = t,
        this.b = r,
        this
    },
    setHSL: function() {
        function e(e, t, r) {
            return 0 > r && (r += 1),
            r > 1 && (r -= 1),
            1 / 6 > r ? e + 6 * (t - e) * r: .5 > r ? t: 2 / 3 > r ? e + 6 * (t - e) * (2 / 3 - r) : e
        }
        return function(t, r, i) {
            return t = THREE.Math.euclideanModulo(t, 1),
            r = THREE.Math.clamp(r, 0, 1),
            i = THREE.Math.clamp(i, 0, 1),
            0 === r ? this.r = this.g = this.b = i: (r = .5 >= i ? i * (1 + r) : i + r - i * r, i = 2 * i - r, this.r = e(i, r, t + 1 / 3), this.g = e(i, r, t), this.b = e(i, r, t - 1 / 3)),
            this
        }
    } (),
    setStyle: function(e) {
        function t(t) {
            void 0 !== t && 1 > parseFloat(t) && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        var r;
        if (r = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(e)) {
            var i = r[2];
            switch (r[1]) {
            case "rgb":
            case "rgba":
                if (r = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)) return this.r = Math.min(255, parseInt(r[1], 10)) / 255,
                this.g = Math.min(255, parseInt(r[2], 10)) / 255,
                this.b = Math.min(255, parseInt(r[3], 10)) / 255,
                t(r[5]),
                this;
                if (r = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)) return this.r = Math.min(100, parseInt(r[1], 10)) / 100,
                this.g = Math.min(100, parseInt(r[2], 10)) / 100,
                this.b = Math.min(100, parseInt(r[3], 10)) / 100,
                t(r[5]),
                this;
                break;
            case "hsl":
            case "hsla":
                if (r = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(i)) {
                    var i = parseFloat(r[1]) / 360,
                    n = parseInt(r[2], 10) / 100,
                    o = parseInt(r[3], 10) / 100;
                    return t(r[5]),
                    this.setHSL(i, n, o)
                }
            }
        } else if (r = /^\#([A-Fa-f0-9]+)$/.exec(e)) {
            if (r = r[1], i = r.length, 3 === i) return this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255,
            this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255,
            this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255,
            this;
            if (6 === i) return this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255,
            this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255,
            this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255,
            this
        }
        return e && 0 < e.length && (r = THREE.ColorKeywords[e], void 0 !== r ? this.setHex(r) : console.warn("THREE.Color: Unknown color " + e)),
        this
    },
    clone: function() {
        return new this.constructor(this.r, this.g, this.b)
    },
    copy: function(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    },
    copyGammaToLinear: function(e, t) {
        return void 0 === t && (t = 2),
        this.r = Math.pow(e.r, t),
        this.g = Math.pow(e.g, t),
        this.b = Math.pow(e.b, t),
        this
    },
    copyLinearToGamma: function(e, t) {
        void 0 === t && (t = 2);
        var r = t > 0 ? 1 / t: 1;
        return this.r = Math.pow(e.r, r),
        this.g = Math.pow(e.g, r),
        this.b = Math.pow(e.b, r),
        this
    },
    convertGammaToLinear: function() {
        var e = this.r,
        t = this.g,
        r = this.b;
        return this.r = e * e,
        this.g = t * t,
        this.b = r * r,
        this
    },
    convertLinearToGamma: function() {
        return this.r = Math.sqrt(this.r),
        this.g = Math.sqrt(this.g),
        this.b = Math.sqrt(this.b),
        this
    },
    getHex: function() {
        return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
    },
    getHexString: function() {
        return ("000000" + this.getHex().toString(16)).slice( - 6)
    },
    getHSL: function(e) {
        e = e || {
            h: 0,
            s: 0,
            l: 0
        };
        var t, r = this.r,
        i = this.g,
        n = this.b,
        o = Math.max(r, i, n),
        a = Math.min(r, i, n),

        s = (a + o) / 2;
        if (a === o) a = t = 0;
        else {
            var h = o - a,
            a = .5 >= s ? h / (o + a) : h / (2 - o - a);
            switch (o) {
            case r:
                t = (i - n) / h + (n > i ? 6 : 0);
                break;
            case i:
                t = (n - r) / h + 2;
                break;
            case n:
                t = (r - i) / h + 4
            }
            t /= 6
        }
        return e.h = t,
        e.s = a,
        e.l = s,
        e
    },
    getStyle: function() {
        return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
    },
    offsetHSL: function(e, t, r) {
        var i = this.getHSL();
        return i.h += e,
        i.s += t,
        i.l += r,
        this.setHSL(i.h, i.s, i.l),
        this
    },
    add: function(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    },
    addColors: function(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    },
    addScalar: function(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    },
    multiply: function(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    },
    multiplyScalar: function(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    },
    lerp: function(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    },
    equals: function(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
},
THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,

    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
},
THREE.Quaternion = function(e, t, r, i) {
    this._x = e || 0,
    this._y = t || 0,
    this._z = r || 0,
    this._w = void 0 !== i ? i: 1
},
THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    get x() {
        return this._x
    },
    set x(e) {
        this._x = e,
        this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(e) {
        this._y = e,
        this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(e) {
        this._z = e,
        this.onChangeCallback()
    },
    get w() {
        return this._w
    },
    set w(e) {
        this._w = e,
        this.onChangeCallback()
    },
    set: function(e, t, r, i) {
        return this._x = e,
        this._y = t,
        this._z = r,
        this._w = i,
        this.onChangeCallback(),
        this
    },
    clone: function() {
        return new this.constructor(this._x, this._y, this._z, this._w)
    },
    copy: function(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this.onChangeCallback(),
        this
    },
    setFromEuler: function(e, t) {
        if (!1 == e instanceof THREE.Euler) throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var r = Math.cos(e._x / 2),
        i = Math.cos(e._y / 2),
        n = Math.cos(e._z / 2),
        o = Math.sin(e._x / 2),
        a = Math.sin(e._y / 2),
        s = Math.sin(e._z / 2),
        h = e.order;
        return "XYZ" === h ? (this._x = o * i * n + r * a * s, this._y = r * a * n - o * i * s, this._z = r * i * s + o * a * n, this._w = r * i * n - o * a * s) : "YXZ" === h ? (this._x = o * i * n + r * a * s, this._y = r * a * n - o * i * s, this._z = r * i * s - o * a * n, this._w = r * i * n + o * a * s) : "ZXY" === h ? (this._x = o * i * n - r * a * s, this._y = r * a * n + o * i * s, this._z = r * i * s + o * a * n, this._w = r * i * n - o * a * s) : "ZYX" === h ? (this._x = o * i * n - r * a * s, this._y = r * a * n + o * i * s, this._z = r * i * s - o * a * n, this._w = r * i * n + o * a * s) : "YZX" === h ? (this._x = o * i * n + r * a * s, this._y = r * a * n + o * i * s, this._z = r * i * s - o * a * n, this._w = r * i * n - o * a * s) : "XZY" === h && (this._x = o * i * n - r * a * s, this._y = r * a * n - o * i * s, this._z = r * i * s + o * a * n, this._w = r * i * n + o * a * s),
        !1 !== t && this.onChangeCallback(),
        this
    },
    setFromAxisAngle: function(e, t) {
        var r = t / 2,
        i = Math.sin(r);
        return this._x = e.x * i,
        this._y = e.y * i,
        this._z = e.z * i,
        this._w = Math.cos(r),
        this.onChangeCallback(),
        this
    },
    setFromRotationMatrix: function(e) {
        var t = e.elements,
        r = t[0];
        e = t[4];
        var i = t[8],
        n = t[1],
        o = t[5],
        a = t[9],
        s = t[2],
        h = t[6],
        t = t[10],
        c = r + o + t;
        return c > 0 ? (r = .5 / Math.sqrt(c + 1), this._w = .25 / r, this._x = (h - a) * r, this._y = (i - s) * r, this._z = (n - e) * r) : r > o && r > t ? (r = 2 * Math.sqrt(1 + r - o - t), this._w = (h - a) / r, this._x = .25 * r, this._y = (e + n) / r, this._z = (i + s) / r) : o > t ? (r = 2 * Math.sqrt(1 + o - r - t), this._w = (i - s) / r, this._x = (e + n) / r, this._y = .25 * r, this._z = (a + h) / r) : (r = 2 * Math.sqrt(1 + t - r - o), this._w = (n - e) / r, this._x = (i + s) / r, this._y = (a + h) / r, this._z = .25 * r),
        this.onChangeCallback(),
        this
    },
    setFromUnitVectors: function() {
        var e, t;
        return function(r, i) {
            return void 0 === e && (e = new THREE.Vector3),
            t = r.dot(i) + 1,
            1e-6 > t ? (t = 0, Math.abs(r.x) > Math.abs(r.z) ? e.set( - r.y, r.x, 0) : e.set(0, -r.z, r.y)) : e.crossVectors(r, i),
            this._x = e.x,
            this._y = e.y,
            this._z = e.z,
            this._w = t,
            this.normalize(),
            this
        }
    } (),
    inverse: function() {
        return this.conjugate().normalize(),
        this
    },
    conjugate: function() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this.onChangeCallback(),
        this
    },
    dot: function(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    },
    lengthSq: function() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    },
    length: function() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    },
    normalize: function() {
        var e = this.length();
        return 0 === e ? (this._z = this._y = this._x = 0, this._w = 1) : (e = 1 / e, this._x *= e, this._y *= e, this._z *= e, this._w *= e),
        this.onChangeCallback(),
        this
    },
    multiply: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."), this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e)
    },
    multiplyQuaternions: function(e, t) {
        var r = e._x,
        i = e._y,
        n = e._z,
        o = e._w,
        a = t._x,
        s = t._y,
        h = t._z,
        c = t._w;
        return this._x = r * c + o * a + i * h - n * s,
        this._y = i * c + o * s + n * a - r * h,
        this._z = n * c + o * h + r * s - i * a,
        this._w = o * c - r * a - i * s - n * h,
        this.onChangeCallback(),
        this
    },
    multiplyVector3: function(e) {
        return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),
        e.applyQuaternion(this)
    },
    slerp: function(e, t) {
        if (0 === t) return this;
        if (1 === t) return this.copy(e);
        var r = this._x,
        i = this._y,
        n = this._z,
        o = this._w,
        a = o * e._w + r * e._x + i * e._y + n * e._z;
        if (0 > a ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1) return this._w = o,
        this._x = r,
        this._y = i,
        this._z = n,
        this;
        var s = Math.acos(a),
        h = Math.sqrt(1 - a * a);
        return.001 > Math.abs(h) ? (this._w = .5 * (o + this._w), this._x = .5 * (r + this._x), this._y = .5 * (i + this._y), this._z = .5 * (n + this._z), this) : (a = Math.sin((1 - t) * s) / h, s = Math.sin(t * s) / h, this._w = o * a + this._w * s, this._x = r * a + this._x * s, this._y = i * a + this._y * s, this._z = n * a + this._z * s, this.onChangeCallback(), this)
    },
    equals: function(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this.onChangeCallback(),
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    },
    onChange: function(e) {
        return this.onChangeCallback = e,
        this
    },
    onChangeCallback: function() {}
},
THREE.Quaternion.slerp = function(e, t, r, i) {
    return r.copy(e).slerp(t, i)
},
THREE.Vector2 = function(e, t) {
    this.x = e || 0,
    this.y = t || 0
},
THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    get width() {
        return this.x
    },
    set width(e) {
        this.x = e
    },
    get height() {
        return this.y
    },
    set height(e) {
        this.y = e
    },
    set: function(e, t) {
        return this.x = e,
        this.y = t,
        this
    },
    setX: function(e) {
        return this.x = e,
        this
    },
    setY: function(e) {
        return this.y = e,
        this
    },
    setComponent: function(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw Error("index is out of range: " + e)
        }
    },
    getComponent: function(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw Error("index is out of range: " + e)
        }
    },
    clone: function() {
        return new this.constructor(this.x, this.y)
    },
    copy: function(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    },
    add: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this)
    },
    addScalar: function(e) {
        return this.x += e,
        this.y += e,
        this
    },
    addVectors: function(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    },
    addScaledVector: function(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    },
    sub: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this)
    },
    subScalar: function(e) {
        return this.x -= e,
        this.y -= e,
        this
    },
    subVectors: function(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    },
    multiply: function(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    },
    multiplyScalar: function(e) {
        return isFinite(e) ? (this.x *= e, this.y *= e) : this.y = this.x = 0,
        this
    },
    divide: function(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    },
    divideScalar: function(e) {
        return this.multiplyScalar(1 / e)
    },
    min: function(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    },
    max: function(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    },
    clamp: function(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this
    },
    clampScalar: function() {
        var e, t;
        return function(r, i) {
            return void 0 === e && (e = new THREE.Vector2, t = new THREE.Vector2),
            e.set(r, r),
            t.set(i, i),
            this.clamp(e, t)
        }
    } (),
    clampLength: function(e, t) {
        var r = this.length();
        return this.multiplyScalar(Math.max(e, Math.min(t, r)) / r),
        this
    },
    floor: function() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    },
    round: function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    },
    roundToZero: function() {
        return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    },
    dot: function(e) {
        return this.x * e.x + this.y * e.y
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    distanceTo: function(e) {
        return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
        var t = this.x - e.x;
        return e = this.y - e.y,
        t * t + e * e
    },
    setLength: function(e) {
        return this.multiplyScalar(e / this.length())
    },
    lerp: function(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    },
    lerpVectors: function(e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e),
        this
    },
    equals: function(e) {
        return e.x === this.x && e.y === this.y
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.x = e[t],
        this.y = e[t + 1],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.x,
        e[t + 1] = this.y,
        e
    },
    fromAttribute: function(e, t, r) {
        return void 0 === r && (r = 0),
        t = t * e.itemSize + r,
        this.x = e.array[t],
        this.y = e.array[t + 1],
        this
    },
    rotateAround: function(e, t) {
        var r = Math.cos(t),
        i = Math.sin(t),
        n = this.x - e.x,
        o = this.y - e.y;
        return this.x = n * r - o * i + e.x,
        this.y = n * i + o * r + e.y,
        this
    }
},
THREE.Vector3 = function(e, t, r) {
    this.x = e || 0,
    this.y = t || 0,
    this.z = r || 0
},
THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function(e, t, r) {
        return this.x = e,
        this.y = t,
        this.z = r,
        this
    },

    setX: function(e) {
        return this.x = e,
        this
    },
    setY: function(e) {
        return this.y = e,
        this
    },
    setZ: function(e) {
        return this.z = e,
        this
    },
    setComponent: function(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw Error("index is out of range: " + e)
        }
    },
    getComponent: function(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw Error("index is out of range: " + e)
        }
    },
    clone: function() {
        return new this.constructor(this.x, this.y, this.z)
    },
    copy: function(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    },
    add: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this)
    },
    addScalar: function(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    },
    addVectors: function(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    },
    addScaledVector: function(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    },
    sub: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this)
    },
    subScalar: function(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    },
    subVectors: function(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    },
    multiply: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."), this.multiplyVectors(e, t)) : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this)
    },
    multiplyScalar: function(e) {
        return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e) : this.z = this.y = this.x = 0,
        this
    },
    multiplyVectors: function(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    },
    applyEuler: function() {
        var e;
        return function(t) {
            return ! 1 == t instanceof THREE.Euler && console.error("THREE.Vector3: .applyEuler() now expects a Euler rotation rather than a Vector3 and order."),
            void 0 === e && (e = new THREE.Quaternion),
            this.applyQuaternion(e.setFromEuler(t)),
            this
        }
    } (),
    applyAxisAngle: function() {
        var e;
        return function(t, r) {
            return void 0 === e && (e = new THREE.Quaternion),
            this.applyQuaternion(e.setFromAxisAngle(t, r)),
            this
        }
    } (),
    applyMatrix3: function(e) {
        var t = this.x,
        r = this.y,
        i = this.z;
        return e = e.elements,
        this.x = e[0] * t + e[3] * r + e[6] * i,
        this.y = e[1] * t + e[4] * r + e[7] * i,
        this.z = e[2] * t + e[5] * r + e[8] * i,
        this
    },
    applyMatrix4: function(e) {
        var t = this.x,
        r = this.y,
        i = this.z;
        return e = e.elements,
        this.x = e[0] * t + e[4] * r + e[8] * i + e[12],
        this.y = e[1] * t + e[5] * r + e[9] * i + e[13],
        this.z = e[2] * t + e[6] * r + e[10] * i + e[14],
        this
    },
    applyProjection: function(e) {
        var t = this.x,
        r = this.y,
        i = this.z;
        e = e.elements;
        var n = 1 / (e[3] * t + e[7] * r + e[11] * i + e[15]);
        return this.x = (e[0] * t + e[4] * r + e[8] * i + e[12]) * n,
        this.y = (e[1] * t + e[5] * r + e[9] * i + e[13]) * n,
        this.z = (e[2] * t + e[6] * r + e[10] * i + e[14]) * n,
        this
    },
    applyQuaternion: function(e) {
        var t = this.x,
        r = this.y,
        i = this.z,
        n = e.x,
        o = e.y,
        a = e.z;
        e = e.w;
        var s = e * t + o * i - a * r,
        h = e * r + a * t - n * i,
        c = e * i + n * r - o * t,
        t = -n * t - o * r - a * i;
        return this.x = s * e + t * -n + h * -a - c * -o,
        this.y = h * e + t * -o + c * -n - s * -a,
        this.z = c * e + t * -a + s * -o - h * -n,
        this
    },
    project: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.multiplyMatrices(t.projectionMatrix, e.getInverse(t.matrixWorld)),
            this.applyProjection(e)
        }
    } (),
    unproject: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.multiplyMatrices(t.matrixWorld, e.getInverse(t.projectionMatrix)),
            this.applyProjection(e)
        }
    } (),
    transformDirection: function(e) {
        var t = this.x,
        r = this.y,
        i = this.z;
        return e = e.elements,
        this.x = e[0] * t + e[4] * r + e[8] * i,
        this.y = e[1] * t + e[5] * r + e[9] * i,
        this.z = e[2] * t + e[6] * r + e[10] * i,
        this.normalize(),
        this
    },
    divide: function(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    },
    divideScalar: function(e) {
        return this.multiplyScalar(1 / e)
    },
    min: function(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    },
    max: function(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    },
    clamp: function(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this
    },
    clampScalar: function() {
        var e, t;
        return function(r, i) {
            return void 0 === e && (e = new THREE.Vector3, t = new THREE.Vector3),
            e.set(r, r, r),
            t.set(i, i, i),
            this.clamp(e, t)
        }
    } (),
    clampLength: function(e, t) {
        var r = this.length();
        return this.multiplyScalar(Math.max(e, Math.min(t, r)) / r),
        this
    },
    floor: function() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    },
    round: function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    },
    roundToZero: function() {
        return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    },
    dot: function(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(e) {
        return this.multiplyScalar(e / this.length())
    },
    lerp: function(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    },
    lerpVectors: function(e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e),
        this
    },
    cross: function(e, t) {
        if (void 0 !== t) return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
        this.crossVectors(e, t);
        var r = this.x,
        i = this.y,
        n = this.z;
        return this.x = i * e.z - n * e.y,
        this.y = n * e.x - r * e.z,
        this.z = r * e.y - i * e.x,
        this
    },
    crossVectors: function(e, t) {
        var r = e.x,
        i = e.y,
        n = e.z,
        o = t.x,
        a = t.y,
        s = t.z;
        return this.x = i * s - n * a,
        this.y = n * o - r * s,
        this.z = r * a - i * o,
        this
    },
    projectOnVector: function() {
        var e, t;
        return function(r) {
            return void 0 === e && (e = new THREE.Vector3),
            e.copy(r).normalize(),
            t = this.dot(e),
            this.copy(e).multiplyScalar(t)
        }
    } (),
    projectOnPlane: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Vector3),
            e.copy(this).projectOnVector(t),
            this.sub(e)
        }
    } (),
    reflect: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Vector3),
            this.sub(e.copy(t).multiplyScalar(2 * this.dot(t)))
        }
    } (),
    angleTo: function(e) {
        return e = this.dot(e) / (this.length() * e.length()),
        Math.acos(THREE.Math.clamp(e, -1, 1))
    },
    distanceTo: function(e) {
        return Math.sqrt(this.distanceToSquared(e))
    },
    distanceToSquared: function(e) {
        var t = this.x - e.x,
        r = this.y - e.y;
        return e = this.z - e.z,
        t * t + r * r + e * e
    },
    setEulerFromRotationMatrix: function(e, t) {
        console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")
    },
    setEulerFromQuaternion: function(e, t) {
        console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")
    },
    getPositionFromMatrix: function(e) {
        return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),
        this.setFromMatrixPosition(e)
    },
    getScaleFromMatrix: function(e) {
        return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),
        this.setFromMatrixScale(e)
    },
    getColumnFromMatrix: function(e, t) {
        return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),
        this.setFromMatrixColumn(e, t)
    },
    setFromMatrixPosition: function(e) {
        return this.x = e.elements[12],
        this.y = e.elements[13],
        this.z = e.elements[14],
        this
    },
    setFromMatrixScale: function(e) {
        var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
        r = this.set(e.elements[4], e.elements[5], e.elements[6]).length();
        return e = this.set(e.elements[8], e.elements[9], e.elements[10]).length(),
        this.x = t,
        this.y = r,
        this.z = e,
        this
    },
    setFromMatrixColumn: function(e, t) {
        var r = 4 * e,
        i = t.elements;
        return this.x = i[r],
        this.y = i[r + 1],
        this.z = i[r + 2],
        this
    },
    equals: function(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    },
    fromAttribute: function(e, t, r) {
        return void 0 === r && (r = 0),
        t = t * e.itemSize + r,
        this.x = e.array[t],
        this.y = e.array[t + 1],
        this.z = e.array[t + 2],
        this
    }
},
THREE.Vector4 = function(e, t, r, i) {
    this.x = e || 0,
    this.y = t || 0,
    this.z = r || 0,
    this.w = void 0 !== i ? i: 1
},
THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function(e, t, r, i) {
        return this.x = e,
        this.y = t,
        this.z = r,
        this.w = i,
        this
    },
    setX: function(e) {
        return this.x = e,
        this
    },
    setY: function(e) {
        return this.y = e,
        this
    },
    setZ: function(e) {
        return this.z = e,
        this
    },
    setW: function(e) {
        return this.w = e,
        this
    },
    setComponent: function(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw Error("index is out of range: " + e)
        }
    },
    getComponent: function(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw Error("index is out of range: " + e)
        }
    },
    clone: function() {
        return new this.constructor(this.x, this.y, this.z, this.w)
    },
    copy: function(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = void 0 !== e.w ? e.w: 1,
        this
    },
    add: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."), this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this)
    },
    addScalar: function(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    },
    addVectors: function(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    },
    addScaledVector: function(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    },
    sub: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."), this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this)
    },
    subScalar: function(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    },
    subVectors: function(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    },
    multiplyScalar: function(e) {
        return isFinite(e) ? (this.x *= e, this.y *= e, this.z *= e, this.w *= e) : this.w = this.z = this.y = this.x = 0,
        this
    },
    applyMatrix4: function(e) {
        var t = this.x,
        r = this.y,
        i = this.z,
        n = this.w;
        return e = e.elements,
        this.x = e[0] * t + e[4] * r + e[8] * i + e[12] * n,
        this.y = e[1] * t + e[5] * r + e[9] * i + e[13] * n,
        this.z = e[2] * t + e[6] * r + e[10] * i + e[14] * n,
        this.w = e[3] * t + e[7] * r + e[11] * i + e[15] * n,
        this
    },
    divideScalar: function(e) {
        return this.multiplyScalar(1 / e)
    },
    setAxisAngleFromQuaternion: function(e) {
        this.w = 2 * Math.acos(e.w);
        var t = Math.sqrt(1 - e.w * e.w);
        return 1e-4 > t ? (this.x = 1, this.z = this.y = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t),
        this
    },
    setAxisAngleFromRotationMatrix: function(e) {
        var t, r, i;
        e = e.elements;
        var n = e[0];
        i = e[4];
        var o = e[8],
        a = e[1],
        s = e[5],
        h = e[9];
        r = e[2],
        t = e[6];
        var c = e[10];
        return.01 > Math.abs(i - a) && .01 > Math.abs(o - r) && .01 > Math.abs(h - t) ? .1 > Math.abs(i + a) && .1 > Math.abs(o + r) && .1 > Math.abs(h + t) && .1 > Math.abs(n + s + c - 3) ? (this.set(1, 0, 0, 0), this) : (e = Math.PI, n = (n + 1) / 2, s = (s + 1) / 2, c = (c + 1) / 2, i = (i + a) / 4, o = (o + r) / 4, h = (h + t) / 4, n > s && n > c ? .01 > n ? (t = 0, i = r = .707106781) : (t = Math.sqrt(n), r = i / t, i = o / t) : s > c ? .01 > s ? (t = .707106781, r = 0, i = .707106781) : (r = Math.sqrt(s), t = i / r, i = h / r) : .01 > c ? (r = t = .707106781, i = 0) : (i = Math.sqrt(c), t = o / i, r = h / i), this.set(t, r, i, e), this) : (e = Math.sqrt((t - h) * (t - h) + (o - r) * (o - r) + (a - i) * (a - i)), .001 > Math.abs(e) && (e = 1), this.x = (t - h) / e, this.y = (o - r) / e, this.z = (a - i) / e, this.w = Math.acos((n + s + c - 1) / 2), this)
    },
    min: function(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    },
    max: function(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    },
    clamp: function(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this.w = Math.max(e.w, Math.min(t.w, this.w)),
        this
    },
    clampScalar: function() {
        var e, t;
        return function(r, i) {
            return void 0 === e && (e = new THREE.Vector4, t = new THREE.Vector4),
            e.set(r, r, r, r),
            t.set(i, i, i, i),
            this.clamp(e, t)
        }
    } (),
    floor: function() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    },
    ceil: function() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    },
    round: function() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    },
    roundToZero: function() {
        return this.x = 0 > this.x ? Math.ceil(this.x) : Math.floor(this.x),
        this.y = 0 > this.y ? Math.ceil(this.y) : Math.floor(this.y),
        this.z = 0 > this.z ? Math.ceil(this.z) : Math.floor(this.z),
        this.w = 0 > this.w ? Math.ceil(this.w) : Math.floor(this.w),
        this
    },
    negate: function() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    },
    dot: function(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    },
    lengthSq: function() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    },
    length: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    },
    lengthManhattan: function() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    },
    normalize: function() {
        return this.divideScalar(this.length())
    },
    setLength: function(e) {
        return this.multiplyScalar(e / this.length())
    },
    lerp: function(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    },
    lerpVectors: function(e, t, r) {
        return this.subVectors(t, e).multiplyScalar(r).add(e),
        this
    },
    equals: function(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    },
    fromArray: function(e, t) {
        return void 0 === t && (t = 0),
        this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    },
    fromAttribute: function(e, t, r) {
        return void 0 === r && (r = 0),
        t = t * e.itemSize + r,
        this.x = e.array[t],
        this.y = e.array[t + 1],
        this.z = e.array[t + 2],
        this.w = e.array[t + 3],
        this
    }
},
THREE.Euler = function(e, t, r, i) {
    this._x = e || 0,
    this._y = t || 0,
    this._z = r || 0,
    this._order = i || THREE.Euler.DefaultOrder
},
THREE.Euler.RotationOrders = "XYZ YZX ZXY XZY YXZ ZYX".split(" "),
THREE.Euler.DefaultOrder = "XYZ",
THREE.Euler.prototype = {
    constructor: THREE.Euler,
    get x() {
        return this._x
    },
    set x(e) {
        this._x = e,
        this.onChangeCallback()
    },
    get y() {
        return this._y
    },
    set y(e) {
        this._y = e,
        this.onChangeCallback()
    },
    get z() {
        return this._z
    },
    set z(e) {
        this._z = e,
        this.onChangeCallback()
    },
    get order() {
        return this._order
    },
    set order(e) {
        this._order = e,
        this.onChangeCallback()
    },
    set: function(e, t, r, i) {
        return this._x = e,
        this._y = t,
        this._z = r,
        this._order = i || this._order,
        this.onChangeCallback(),
        this
    },
    clone: function() {
        return new this.constructor(this._x, this._y, this._z, this._order)
    },
    copy: function(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this.onChangeCallback(),
        this
    },
    setFromRotationMatrix: function(e, t, r) {
        var i = THREE.Math.clamp,
        n = e.elements;
        e = n[0];
        var o = n[4],
        a = n[8],
        s = n[1],
        h = n[5],
        c = n[9],
        l = n[2],
        u = n[6],
        n = n[10];
        return t = t || this._order,
        "XYZ" === t ? (this._y = Math.asin(i(a, -1, 1)), .99999 > Math.abs(a) ? (this._x = Math.atan2( - c, n), this._z = Math.atan2( - o, e)) : (this._x = Math.atan2(u, h), this._z = 0)) : "YXZ" === t ? (this._x = Math.asin( - i(c, -1, 1)), .99999 > Math.abs(c) ? (this._y = Math.atan2(a, n), this._z = Math.atan2(s, h)) : (this._y = Math.atan2( - l, e), this._z = 0)) : "ZXY" === t ? (this._x = Math.asin(i(u, -1, 1)), .99999 > Math.abs(u) ? (this._y = Math.atan2( - l, n), this._z = Math.atan2( - o, h)) : (this._y = 0, this._z = Math.atan2(s, e))) : "ZYX" === t ? (this._y = Math.asin( - i(l, -1, 1)), .99999 > Math.abs(l) ? (this._x = Math.atan2(u, n), this._z = Math.atan2(s, e)) : (this._x = 0, this._z = Math.atan2( - o, h))) : "YZX" === t ? (this._z = Math.asin(i(s, -1, 1)), .99999 > Math.abs(s) ? (this._x = Math.atan2( - c, h), this._y = Math.atan2( - l, e)) : (this._x = 0, this._y = Math.atan2(a, n))) : "XZY" === t ? (this._z = Math.asin( - i(o, -1, 1)), .99999 > Math.abs(o) ? (this._x = Math.atan2(u, h), this._y = Math.atan2(a, e)) : (this._x = Math.atan2( - c, n), this._y = 0)) : console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + t),
        this._order = t,
        !1 !== r && this.onChangeCallback(),
        this
    },
    setFromQuaternion: function() {
        var e;
        return function(t, r, i) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationFromQuaternion(t),
            this.setFromRotationMatrix(e, r, i),
            this
        }
    } (),
    setFromVector3: function(e, t) {
        return this.set(e.x, e.y, e.z, t || this._order)
    },
    reorder: function() {
        var e = new THREE.Quaternion;
        return function(t) {
            e.setFromEuler(this),
            this.setFromQuaternion(e, t)
        }
    } (),
    equals: function(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    },
    fromArray: function(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        void 0 !== e[3] && (this._order = e[3]),
        this.onChangeCallback(),
        this
    },
    toArray: function(e, t) {
        return void 0 === e && (e = []),
        void 0 === t && (t = 0),
        e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    },
    toVector3: function(e) {
        return e ? e.set(this._x, this._y, this._z) : new THREE.Vector3(this._x, this._y, this._z)
    },
    onChange: function(e) {
        return this.onChangeCallback = e,
        this
    },
    onChangeCallback: function() {}
},
THREE.Line3 = function(e, t) {
    this.start = void 0 !== e ? e: new THREE.Vector3,
    this.end = void 0 !== t ? t: new THREE.Vector3
},
THREE.Line3.prototype = {
    constructor: THREE.Line3,
    set: function(e, t) {
        return this.start.copy(e),
        this.end.copy(t),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.start.copy(e.start),
        this.end.copy(e.end),
        this
    },
    center: function(e) {
        return (e || new THREE.Vector3).addVectors(this.start, this.end).multiplyScalar(.5)
    },
    delta: function(e) {
        return (e || new THREE.Vector3).subVectors(this.end, this.start)
    },
    distanceSq: function() {
        return this.start.distanceToSquared(this.end)
    },
    distance: function() {
        return this.start.distanceTo(this.end)
    },
    at: function(e, t) {
        var r = t || new THREE.Vector3;
        return this.delta(r).multiplyScalar(e).add(this.start)
    },
    closestPointToPointParameter: function() {
        var e = new THREE.Vector3,
        t = new THREE.Vector3;
        return function(r, i) {
            e.subVectors(r, this.start),
            t.subVectors(this.end, this.start);
            var n = t.dot(t),
            n = t.dot(e) / n;
            return i && (n = THREE.Math.clamp(n, 0, 1)),
            n
        }
    } (),
    closestPointToPoint: function(e, t, r) {
        return e = this.closestPointToPointParameter(e, t),
        r = r || new THREE.Vector3,
        this.delta(r).multiplyScalar(e).add(this.start)
    },
    applyMatrix4: function(e) {
        return this.start.applyMatrix4(e),
        this.end.applyMatrix4(e),
        this
    },
    equals: function(e) {
        return e.start.equals(this.start) && e.end.equals(this.end)
    }
},
THREE.Box2 = function(e, t) {
    this.min = void 0 !== e ? e: new THREE.Vector2(1 / 0, 1 / 0),
    this.max = void 0 !== t ? t: new THREE.Vector2( - (1 / 0), -(1 / 0))
},
THREE.Box2.prototype = {
    constructor: THREE.Box2,
    set: function(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    },
    setFromPoints: function(e) {
        this.makeEmpty();
        for (var t = 0,
        r = e.length; r > t; t++) this.expandByPoint(e[t]);
        return this
    },
    setFromCenterAndSize: function() {
        var e = new THREE.Vector2;
        return function(t, r) {
            var i = e.copy(r).multiplyScalar(.5);
            return this.min.copy(t).sub(i),
            this.max.copy(t).add(i),
            this
        }
    } (),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    },
    makeEmpty: function() {
        return this.min.x = this.min.y = 1 / 0,
        this.max.x = this.max.y = -(1 / 0),
        this
    },
    empty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y
    },
    center: function(e) {
        return (e || new THREE.Vector2).addVectors(this.min, this.max).multiplyScalar(.5)
    },
    size: function(e) {
        return (e || new THREE.Vector2).subVectors(this.max, this.min)
    },
    expandByPoint: function(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    },
    expandByVector: function(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    },
    expandByScalar: function(e) {
        return this.min.addScalar( - e),
        this.max.addScalar(e),
        this
    },
    containsPoint: function(e) {
        return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y ? !1 : !0
    },
    containsBox: function(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y ? !0 : !1
    },
    getParameter: function(e, t) {
        return (t || new THREE.Vector2).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y))
    },
    isIntersectionBox: function(e) {
        return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y ? !1 : !0
    },
    clampPoint: function(e, t) {
        return (t || new THREE.Vector2).copy(e).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var e = new THREE.Vector2;
        return function(t) {
            return e.copy(t).clamp(this.min, this.max).sub(t).length()
        }
    } (),
    intersect: function(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this
    },
    union: function(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    },
    translate: function(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    },
    equals: function(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
},
THREE.Box3 = function(e, t) {
    this.min = void 0 !== e ? e: new THREE.Vector3(1 / 0, 1 / 0, 1 / 0),
    this.max = void 0 !== t ? t: new THREE.Vector3( - (1 / 0), -(1 / 0), -(1 / 0))
},
THREE.Box3.prototype = {
    constructor: THREE.Box3,
    set: function(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    },
    setFromPoints: function(e) {
        this.makeEmpty();
        for (var t = 0,
        r = e.length; r > t; t++) this.expandByPoint(e[t]);
        return this
    },
    setFromCenterAndSize: function() {
        var e = new THREE.Vector3;
        return function(t, r) {
            var i = e.copy(r).multiplyScalar(.5);
            return this.min.copy(t).sub(i),
            this.max.copy(t).add(i),
            this
        }
    } (),
    setFromObject: function() {
        var e = new THREE.Vector3;
        return function(t) {
            var r = this;
            return t.updateMatrixWorld(!0),
            this.makeEmpty(),
            t.traverse(function(t) {
                var i = t.geometry;
                if (void 0 !== i) if (i instanceof THREE.Geometry) for (var n = i.vertices,
                i = 0,
                o = n.length; o > i; i++) e.copy(n[i]),
                e.applyMatrix4(t.matrixWorld),
                r.expandByPoint(e);
                else if (i instanceof THREE.BufferGeometry && void 0 !== i.attributes.position) for (n = i.attributes.position.array, i = 0, o = n.length; o > i; i += 3) e.set(n[i], n[i + 1], n[i + 2]),
                e.applyMatrix4(t.matrixWorld),
                r.expandByPoint(e)
            }),
            this
        }
    } (),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    },
    makeEmpty: function() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -(1 / 0),
        this
    },
    empty: function() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    },
    center: function(e) {
        return (e || new THREE.Vector3).addVectors(this.min, this.max).multiplyScalar(.5)
    },
    size: function(e) {
        return (e || new THREE.Vector3).subVectors(this.max, this.min)
    },
    expandByPoint: function(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    },
    expandByVector: function(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    },
    expandByScalar: function(e) {
        return this.min.addScalar( - e),
        this.max.addScalar(e),
        this
    },
    containsPoint: function(e) {
        return e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z ? !1 : !0
    },
    containsBox: function(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z ? !0 : !1
    },
    getParameter: function(e, t) {
        return (t || new THREE.Vector3).set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    },
    isIntersectionBox: function(e) {
        return e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z ? !1 : !0
    },
    clampPoint: function(e, t) {
        return (t || new THREE.Vector3).copy(e).clamp(this.min, this.max)
    },
    distanceToPoint: function() {
        var e = new THREE.Vector3;
        return function(t) {
            return e.copy(t).clamp(this.min, this.max).sub(t).length()
        }
    } (),
    getBoundingSphere: function() {
        var e = new THREE.Vector3;
        return function(t) {
            return t = t || new THREE.Sphere,
            t.center = this.center(),
            t.radius = .5 * this.size(e).length(),
            t
        }
    } (),
    intersect: function(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this
    },
    union: function(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    },
    applyMatrix4: function() {
        var e = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3, new THREE.Vector3];
        return function(t) {
            return e[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
            e[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
            e[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
            e[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
            e[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
            e[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
            e[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
            e[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
            this.makeEmpty(),
            this.setFromPoints(e),
            this
        }
    } (),
    translate: function(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    },
    equals: function(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
},
THREE.Matrix3 = function() {
    this.elements = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]),
    0 < arguments.length && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
},
THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    set: function(e, t, r, i, n, o, a, s, h) {
        var c = this.elements;
        return c[0] = e,
        c[3] = t,
        c[6] = r,
        c[1] = i,
        c[4] = n,
        c[7] = o,
        c[2] = a,
        c[5] = s,
        c[8] = h,
        this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    },
    clone: function() {
        return (new this.constructor).fromArray(this.elements)
    },
    copy: function(e) {
        return e = e.elements,
        this.set(e[0], e[3], e[6], e[1], e[4], e[7], e[2], e[5], e[8]),
        this
    },
    multiplyVector3: function(e) {
        return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),
        e.applyMatrix3(this)
    },
    multiplyVector3Array: function(e) {
        return console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
        this.applyToVector3Array(e)
    },
    applyToVector3Array: function() {
        var e;
        return function(t, r, i) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === r && (r = 0),
            void 0 === i && (i = t.length);
            for (var n = 0; i > n; n += 3, r += 3) e.fromArray(t, r),
            e.applyMatrix3(this),
            e.toArray(t, r);
            return t
        }
    } (),
    applyToBuffer: function() {
        var e;
        return function(t, r, i) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === r && (r = 0),
            void 0 === i && (i = t.length / t.itemSize);
            for (var n = 0; i > n; n++, r++) e.x = t.getX(r),
            e.y = t.getY(r),
            e.z = t.getZ(r),
            e.applyMatrix3(this),
            t.setXYZ(e.x, e.y, e.z);
            return t
        }
    } (),
    multiplyScalar: function(e) {
        var t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    },
    determinant: function() {
        var e = this.elements,
        t = e[0],
        r = e[1],
        i = e[2],
        n = e[3],
        o = e[4],
        a = e[5],
        s = e[6],
        h = e[7],
        e = e[8];
        return t * o * e - t * a * h - r * n * e + r * a * s + i * n * h - i * o * s
    },
    getInverse: function(e, t) {
        var r = e.elements,
        i = this.elements;
        if (i[0] = r[10] * r[5] - r[6] * r[9], i[1] = -r[10] * r[1] + r[2] * r[9], i[2] = r[6] * r[1] - r[2] * r[5], i[3] = -r[10] * r[4] + r[6] * r[8], i[4] = r[10] * r[0] - r[2] * r[8], i[5] = -r[6] * r[0] + r[2] * r[4], i[6] = r[9] * r[4] - r[5] * r[8], i[7] = -r[9] * r[0] + r[1] * r[8], i[8] = r[5] * r[0] - r[1] * r[4], r = r[0] * i[0] + r[1] * i[3] + r[2] * i[6], 0 === r) {
            if (t) throw Error("Matrix3.getInverse(): can't invert matrix, determinant is 0");
            return console.warn("Matrix3.getInverse(): can't invert matrix, determinant is 0"),
            this.identity(),
            this
        }
        return this.multiplyScalar(1 / r),
        this
    },
    transpose: function() {
        var e, t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    },
    flattenToArrayOffset: function(e, t) {
        var r = this.elements;
        return e[t] = r[0],
        e[t + 1] = r[1],
        e[t + 2] = r[2],
        e[t + 3] = r[3],
        e[t + 4] = r[4],
        e[t + 5] = r[5],
        e[t + 6] = r[6],
        e[t + 7] = r[7],
        e[t + 8] = r[8],
        e
    },
    getNormalMatrix: function(e) {
        return this.getInverse(e).transpose(),
        this
    },
    transposeIntoArray: function(e) {
        var t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    },
    fromArray: function(e) {
        return this.elements.set(e),
        this
    },
    toArray: function() {
        var e = this.elements;
        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]]
    }
},
THREE.Matrix4 = function() {
    this.elements = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
    0 < arguments.length && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
},
THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function(e, t, r, i, n, o, a, s, h, c, l, u, p, E, d, f) {
        var m = this.elements;
        return m[0] = e,
        m[4] = t,
        m[8] = r,
        m[12] = i,
        m[1] = n,
        m[5] = o,
        m[9] = a,
        m[13] = s,
        m[2] = h,
        m[6] = c,
        m[10] = l,
        m[14] = u,
        m[3] = p,
        m[7] = E,
        m[11] = d,
        m[15] = f,
        this
    },
    identity: function() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    },
    clone: function() {
        return (new THREE.Matrix4).fromArray(this.elements)
    },
    copy: function(e) {
        return this.elements.set(e.elements),
        this
    },
    extractPosition: function(e) {
        return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),
        this.copyPosition(e)
    },
    copyPosition: function(e) {
        var t = this.elements;
        return e = e.elements,
        t[12] = e[12],
        t[13] = e[13],
        t[14] = e[14],
        this
    },
    extractBasis: function(e, t, r) {
        var i = this.elements;
        return e.set(i[0], i[1], i[2]),
        t.set(i[4], i[5], i[6]),
        r.set(i[8], i[9], i[10]),
        this
    },
    makeBasis: function(e, t, r) {
        return this.set(e.x, t.x, r.x, 0, e.y, t.y, r.y, 0, e.z, t.z, r.z, 0, 0, 0, 0, 1),
        this
    },
    extractRotation: function() {
        var e;
        return function(t) {
            void 0 === e && (e = new THREE.Vector3);
            var r = this.elements;
            t = t.elements;
            var i = 1 / e.set(t[0], t[1], t[2]).length(),
            n = 1 / e.set(t[4], t[5], t[6]).length(),
            o = 1 / e.set(t[8], t[9], t[10]).length();
            return r[0] = t[0] * i,
            r[1] = t[1] * i,
            r[2] = t[2] * i,
            r[4] = t[4] * n,
            r[5] = t[5] * n,
            r[6] = t[6] * n,
            r[8] = t[8] * o,
            r[9] = t[9] * o,
            r[10] = t[10] * o,
            this
        }
    } (),
    makeRotationFromEuler: function(e) { ! 1 == e instanceof THREE.Euler && console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
        var t = this.elements,
        r = e.x,
        i = e.y,
        n = e.z,
        o = Math.cos(r),
        r = Math.sin(r),
        a = Math.cos(i),
        i = Math.sin(i),
        s = Math.cos(n),
        n = Math.sin(n);
        if ("XYZ" === e.order) {
            e = o * s;
            var h = o * n,
            c = r * s,
            l = r * n;
            t[0] = a * s,
            t[4] = -a * n,
            t[8] = i,
            t[1] = h + c * i,
            t[5] = e - l * i,
            t[9] = -r * a,
            t[2] = l - e * i,
            t[6] = c + h * i,
            t[10] = o * a
        } else "YXZ" === e.order ? (e = a * s, h = a * n, c = i * s, l = i * n, t[0] = e + l * r, t[4] = c * r - h, t[8] = o * i, t[1] = o * n, t[5] = o * s, t[9] = -r, t[2] = h * r - c, t[6] = l + e * r, t[10] = o * a) : "ZXY" === e.order ? (e = a * s, h = a * n, c = i * s, l = i * n, t[0] = e - l * r, t[4] = -o * n, t[8] = c + h * r, t[1] = h + c * r, t[5] = o * s, t[9] = l - e * r, t[2] = -o * i, t[6] = r, t[10] = o * a) : "ZYX" === e.order ? (e = o * s, h = o * n, c = r * s, l = r * n, t[0] = a * s, t[4] = c * i - h, t[8] = e * i + l, t[1] = a * n, t[5] = l * i + e, t[9] = h * i - c, t[2] = -i, t[6] = r * a, t[10] = o * a) : "YZX" === e.order ? (e = o * a, h = o * i, c = r * a, l = r * i, t[0] = a * s, t[4] = l - e * n, t[8] = c * n + h, t[1] = n, t[5] = o * s, t[9] = -r * s, t[2] = -i * s, t[6] = h * n + c, t[10] = e - l * n) : "XZY" === e.order && (e = o * a, h = o * i, c = r * a, l = r * i, t[0] = a * s, t[4] = -n, t[8] = i * s, t[1] = e * n + l, t[5] = o * s, t[9] = h * n - c, t[2] = c * n - h, t[6] = r * s, t[10] = l * n + e);
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    },
    setRotationFromQuaternion: function(e) {
        return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),
        this.makeRotationFromQuaternion(e)
    },
    makeRotationFromQuaternion: function(e) {
        var t = this.elements,
        r = e.x,
        i = e.y,
        n = e.z,
        o = e.w,
        a = r + r,
        s = i + i,
        h = n + n;
        e = r * a;
        var c = r * s,
        r = r * h,
        l = i * s,
        i = i * h,
        n = n * h,
        a = o * a,
        s = o * s,
        o = o * h;
        return t[0] = 1 - (l + n),
        t[4] = c - o,
        t[8] = r + s,
        t[1] = c + o,
        t[5] = 1 - (e + n),
        t[9] = i - a,
        t[2] = r - s,
        t[6] = i + a,
        t[10] = 1 - (e + l),
        t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    },
    lookAt: function() {
        var e, t, r;
        return function(i, n, o) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === t && (t = new THREE.Vector3),
            void 0 === r && (r = new THREE.Vector3);
            var a = this.elements;
            return r.subVectors(i, n).normalize(),
            0 === r.lengthSq() && (r.z = 1),
            e.crossVectors(o, r).normalize(),
            0 === e.lengthSq() && (r.x += 1e-4, e.crossVectors(o, r).normalize()),
            t.crossVectors(r, e),
            a[0] = e.x,
            a[4] = t.x,
            a[8] = r.x,
            a[1] = e.y,
            a[5] = t.y,
            a[9] = r.y,
            a[2] = e.z,
            a[6] = t.z,
            a[10] = r.z,
            this
        }
    } (),
    multiply: function(e, t) {
        return void 0 !== t ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."), this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e)
    },
    multiplyMatrices: function(e, t) {
        var r = e.elements,
        i = t.elements,
        n = this.elements,
        o = r[0],
        a = r[4],
        s = r[8],
        h = r[12],
        c = r[1],
        l = r[5],
        u = r[9],
        p = r[13],
        E = r[2],
        d = r[6],
        f = r[10],
        m = r[14],
        T = r[3],
        v = r[7],
        g = r[11],
        r = r[15],
        y = i[0],
        R = i[4],
        H = i[8],
        x = i[12],
        b = i[1],
        w = i[5],
        M = i[9],
        S = i[13],
        _ = i[2],
        C = i[6],
        A = i[10],
        L = i[14],
        P = i[3],
        D = i[7],
        k = i[11],
        i = i[15];
        return n[0] = o * y + a * b + s * _ + h * P,
        n[4] = o * R + a * w + s * C + h * D,
        n[8] = o * H + a * M + s * A + h * k,
        n[12] = o * x + a * S + s * L + h * i,
        n[1] = c * y + l * b + u * _ + p * P,
        n[5] = c * R + l * w + u * C + p * D,
        n[9] = c * H + l * M + u * A + p * k,
        n[13] = c * x + l * S + u * L + p * i,
        n[2] = E * y + d * b + f * _ + m * P,
        n[6] = E * R + d * w + f * C + m * D,
        n[10] = E * H + d * M + f * A + m * k,
        n[14] = E * x + d * S + f * L + m * i,
        n[3] = T * y + v * b + g * _ + r * P,
        n[7] = T * R + v * w + g * C + r * D,
        n[11] = T * H + v * M + g * A + r * k,
        n[15] = T * x + v * S + g * L + r * i,
        this
    },
    multiplyToArray: function(e, t, r) {
        var i = this.elements;
        return this.multiplyMatrices(e, t),
        r[0] = i[0],
        r[1] = i[1],
        r[2] = i[2],
        r[3] = i[3],
        r[4] = i[4],
        r[5] = i[5],
        r[6] = i[6],
        r[7] = i[7],
        r[8] = i[8],
        r[9] = i[9],
        r[10] = i[10],
        r[11] = i[11],
        r[12] = i[12],
        r[13] = i[13],
        r[14] = i[14],
        r[15] = i[15],
        this
    },
    multiplyScalar: function(e) {
        var t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    },
    multiplyVector3: function(e) {
        return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead."),
        e.applyProjection(this)
    },
    multiplyVector4: function(e) {
        return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),
        e.applyMatrix4(this)
    },
    multiplyVector3Array: function(e) {
        return console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead."),
        this.applyToVector3Array(e)
    },
    applyToVector3Array: function() {
        var e;
        return function(t, r, i) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === r && (r = 0),
            void 0 === i && (i = t.length);
            for (var n = 0; i > n; n += 3, r += 3) e.fromArray(t, r),
            e.applyMatrix4(this),
            e.toArray(t, r);
            return t
        }
    } (),
    applyToBuffer: function() {
        var e;
        return function(t, r, i) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === r && (r = 0),
            void 0 === i && (i = t.length / t.itemSize);
            for (var n = 0; i > n; n++, r++) e.x = t.getX(r),
            e.y = t.getY(r),
            e.z = t.getZ(r),
            e.applyMatrix4(this),
            t.setXYZ(e.x, e.y, e.z);
            return t
        }
    } (),
    rotateAxis: function(e) {
        console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),
        e.transformDirection(this)
    },
    crossVector: function(e) {
        return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),
        e.applyMatrix4(this)
    },
    determinant: function() {
        var e = this.elements,
        t = e[0],
        r = e[4],
        i = e[8],
        n = e[12],
        o = e[1],
        a = e[5],
        s = e[9],
        h = e[13],
        c = e[2],
        l = e[6],
        u = e[10],
        p = e[14];
        return e[3] * ( + n * s * l - i * h * l - n * a * u + r * h * u + i * a * p - r * s * p) + e[7] * ( + t * s * p - t * h * u + n * o * u - i * o * p + i * h * c - n * s * c) + e[11] * ( + t * h * l - t * a * p - n * o * l + r * o * p + n * a * c - r * h * c) + e[15] * ( - i * a * c - t * s * l + t * a * u + i * o * l - r * o * u + r * s * c)
    },
    transpose: function() {
        var e, t = this.elements;
        return e = t[1],
        t[1] = t[4],
        t[4] = e,
        e = t[2],
        t[2] = t[8],
        t[8] = e,
        e = t[6],
        t[6] = t[9],
        t[9] = e,
        e = t[3],
        t[3] = t[12],
        t[12] = e,
        e = t[7],
        t[7] = t[13],
        t[13] = e,
        e = t[11],
        t[11] = t[14],
        t[14] = e,
        this
    },
    flattenToArrayOffset: function(e, t) {
        var r = this.elements;
        return e[t] = r[0],
        e[t + 1] = r[1],
        e[t + 2] = r[2],
        e[t + 3] = r[3],
        e[t + 4] = r[4],
        e[t + 5] = r[5],
        e[t + 6] = r[6],
        e[t + 7] = r[7],
        e[t + 8] = r[8],
        e[t + 9] = r[9],
        e[t + 10] = r[10],
        e[t + 11] = r[11],
        e[t + 12] = r[12],
        e[t + 13] = r[13],
        e[t + 14] = r[14],
        e[t + 15] = r[15],
        e
    },
    getPosition: function() {
        var e;
        return function() {
            void 0 === e && (e = new THREE.Vector3),
            console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
            var t = this.elements;
            return e.set(t[12], t[13], t[14])
        }
    } (),
    setPosition: function(e) {
        var t = this.elements;
        return t[12] = e.x,
        t[13] = e.y,
        t[14] = e.z,
        this
    },
    getInverse: function(e, t) {
        var r = this.elements,
        i = e.elements,
        n = i[0],
        o = i[4],
        a = i[8],
        s = i[12],
        h = i[1],
        c = i[5],
        l = i[9],
        u = i[13],
        p = i[2],
        E = i[6],
        d = i[10],
        f = i[14],
        m = i[3],
        T = i[7],
        v = i[11],
        i = i[15];
        if (r[0] = l * f * T - u * d * T + u * E * v - c * f * v - l * E * i + c * d * i, r[4] = s * d * T - a * f * T - s * E * v + o * f * v + a * E * i - o * d * i, r[8] = a * u * T - s * l * T + s * c * v - o * u * v - a * c * i + o * l * i, r[12] = s * l * E - a * u * E - s * c * d + o * u * d + a * c * f - o * l * f, r[1] = u * d * m - l * f * m - u * p * v + h * f * v + l * p * i - h * d * i, r[5] = a * f * m - s * d * m + s * p * v - n * f * v - a * p * i + n * d * i, r[9] = s * l * m - a * u * m - s * h * v + n * u * v + a * h * i - n * l * i, r[13] = a * u * p - s * l * p + s * h * d - n * u * d - a * h * f + n * l * f, r[2] = c * f * m - u * E * m + u * p * T - h * f * T - c * p * i + h * E * i, r[6] = s * E * m - o * f * m - s * p * T + n * f * T + o * p * i - n * E * i, r[10] = o * u * m - s * c * m + s * h * T - n * u * T - o * h * i + n * c * i, r[14] = s * c * p - o * u * p - s * h * E + n * u * E + o * h * f - n * c * f, r[3] = l * E * m - c * d * m - l * p * T + h * d * T + c * p * v - h * E * v, r[7] = o * d * m - a * E * m + a * p * T - n * d * T - o * p * v + n * E * v, r[11] = a * c * m - o * l * m - a * h * T + n * l * T + o * h * v - n * c * v, r[15] = o * l * p - a * c * p + a * h * E - n * l * E - o * h * d + n * c * d, r = n * r[0] + h * r[4] + p * r[8] + m * r[12], 0 === r) {
            if (t) throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");
            return console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0"),
            this.identity(),
            this
        }
        return this.multiplyScalar(1 / r),
        this
    },
    translate: function(e) {
        console.error("THREE.Matrix4: .translate() has been removed.")
    },
    rotateX: function(e) {
        console.error("THREE.Matrix4: .rotateX() has been removed.")
    },
    rotateY: function(e) {
        console.error("THREE.Matrix4: .rotateY() has been removed.")
    },
    rotateZ: function(e) {
        console.error("THREE.Matrix4: .rotateZ() has been removed.")
    },
    rotateByAxis: function(e, t) {
        console.error("THREE.Matrix4: .rotateByAxis() has been removed.")
    },
    scale: function(e) {
        var t = this.elements,
        r = e.x,
        i = e.y;
        return e = e.z,
        t[0] *= r,
        t[4] *= i,
        t[8] *= e,
        t[1] *= r,
        t[5] *= i,
        t[9] *= e,
        t[2] *= r,
        t[6] *= i,
        t[10] *= e,
        t[3] *= r,
        t[7] *= i,
        t[11] *= e,
        this
    },
    getMaxScaleOnAxis: function() {
        var e = this.elements;
        return Math.sqrt(Math.max(e[0] * e[0] + e[1] * e[1] + e[2] * e[2], e[4] * e[4] + e[5] * e[5] + e[6] * e[6], e[8] * e[8] + e[9] * e[9] + e[10] * e[10]))
    },
    makeTranslation: function(e, t, r) {
        return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, r, 0, 0, 0, 1),
        this
    },
    makeRotationX: function(e) {
        var t = Math.cos(e);
        return e = Math.sin(e),
        this.set(1, 0, 0, 0, 0, t, -e, 0, 0, e, t, 0, 0, 0, 0, 1),
        this
    },
    makeRotationY: function(e) {
        var t = Math.cos(e);
        return e = Math.sin(e),
        this.set(t, 0, e, 0, 0, 1, 0, 0, -e, 0, t, 0, 0, 0, 0, 1),
        this
    },
    makeRotationZ: function(e) {
        var t = Math.cos(e);
        return e = Math.sin(e),
        this.set(t, -e, 0, 0, e, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    },
    makeRotationAxis: function(e, t) {
        var r = Math.cos(t),
        i = Math.sin(t),
        n = 1 - r,
        o = e.x,
        a = e.y,
        s = e.z,
        h = n * o,
        c = n * a;
        return this.set(h * o + r, h * a - i * s, h * s + i * a, 0, h * a + i * s, c * a + r, c * s - i * o, 0, h * s - i * a, c * s + i * o, n * s * s + r, 0, 0, 0, 0, 1),
        this
    },
    makeScale: function(e, t, r) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1),
        this
    },
    compose: function(e, t, r) {
        return this.makeRotationFromQuaternion(t),
        this.scale(r),
        this.setPosition(e),
        this
    },
    decompose: function() {
        var e, t;
        return function(r, i, n) {
            void 0 === e && (e = new THREE.Vector3),
            void 0 === t && (t = new THREE.Matrix4);
            var o = this.elements,
            a = e.set(o[0], o[1], o[2]).length(),
            s = e.set(o[4], o[5], o[6]).length(),
            h = e.set(o[8], o[9], o[10]).length();
            0 > this.determinant() && (a = -a),
            r.x = o[12],
            r.y = o[13],
            r.z = o[14],
            t.elements.set(this.elements),
            r = 1 / a;
            var o = 1 / s,
            c = 1 / h;
            return t.elements[0] *= r,
            t.elements[1] *= r,
            t.elements[2] *= r,
            t.elements[4] *= o,
            t.elements[5] *= o,
            t.elements[6] *= o,
            t.elements[8] *= c,
            t.elements[9] *= c,
            t.elements[10] *= c,
            i.setFromRotationMatrix(t),
            n.x = a,
            n.y = s,
            n.z = h,
            this
        }
    } (),
    makeFrustum: function(e, t, r, i, n, o) {
        var a = this.elements;
        return a[0] = 2 * n / (t - e),
        a[4] = 0,
        a[8] = (t + e) / (t - e),
        a[12] = 0,
        a[1] = 0,
        a[5] = 2 * n / (i - r),
        a[9] = (i + r) / (i - r),
        a[13] = 0,
        a[2] = 0,
        a[6] = 0,
        a[10] = -(o + n) / (o - n),
        a[14] = -2 * o * n / (o - n),
        a[3] = 0,
        a[7] = 0,
        a[11] = -1,
        a[15] = 0,
        this
    },
    makePerspective: function(e, t, r, i) {
        e = r * Math.tan(THREE.Math.degToRad(.5 * e));
        var n = -e;
        return this.makeFrustum(n * t, e * t, n, e, r, i)
    },
    makeOrthographic: function(e, t, r, i, n, o) {
        var a = this.elements,
        s = t - e,
        h = r - i,
        c = o - n;
        return a[0] = 2 / s,
        a[4] = 0,
        a[8] = 0,
        a[12] = -((t + e) / s),
        a[1] = 0,
        a[5] = 2 / h,
        a[9] = 0,
        a[13] = -((r + i) / h),
        a[2] = 0,
        a[6] = 0,
        a[10] = -2 / c,
        a[14] = -((o + n) / c),
        a[3] = 0,
        a[7] = 0,
        a[11] = 0,
        a[15] = 1,
        this
    },
    equals: function(e) {
        var t = this.elements;
        e = e.elements;
        for (var r = 0; 16 > r; r++) if (t[r] !== e[r]) return ! 1;
        return ! 0
    },
    fromArray: function(e) {
        return this.elements.set(e),
        this
    },
    toArray: function() {
        var e = this.elements;
        return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]]
    }
},
THREE.Ray = function(e, t) {
    this.origin = void 0 !== e ? e: new THREE.Vector3,
    this.direction = void 0 !== t ? t: new THREE.Vector3
},
THREE.Ray.prototype = {
    constructor: THREE.Ray,
    set: function(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    },
    at: function(e, t) {
        return (t || new THREE.Vector3).copy(this.direction).multiplyScalar(e).add(this.origin)
    },
    recast: function() {
        var e = new THREE.Vector3;
        return function(t) {
            return this.origin.copy(this.at(t, e)),
            this
        }
    } (),
    closestPointToPoint: function(e, t) {
        var r = t || new THREE.Vector3;
        r.subVectors(e, this.origin);
        var i = r.dot(this.direction);
        return 0 > i ? r.copy(this.origin) : r.copy(this.direction).multiplyScalar(i).add(this.origin)
    },
    distanceToPoint: function(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    },
    distanceSqToPoint: function() {
        var e = new THREE.Vector3;
        return function(t) {
            var r = e.subVectors(t, this.origin).dot(this.direction);
            return 0 > r ? this.origin.distanceToSquared(t) : (e.copy(this.direction).multiplyScalar(r).add(this.origin), e.distanceToSquared(t))
        }
    } (),
    distanceSqToSegment: function() {
        var e = new THREE.Vector3,
        t = new THREE.Vector3,
        r = new THREE.Vector3;
        return function(i, n, o, a) {
            e.copy(i).add(n).multiplyScalar(.5),
            t.copy(n).sub(i).normalize(),
            r.copy(this.origin).sub(e);
            var s, h = .5 * i.distanceTo(n),
            c = -this.direction.dot(t),
            l = r.dot(this.direction),
            u = -r.dot(t),
            p = r.lengthSq(),
            E = Math.abs(1 - c * c);
            return E > 0 ? (i = c * u - l, n = c * l - u, s = h * E, i >= 0 ? n >= -s ? s >= n ? (h = 1 / E, i *= h, n *= h, c = i * (i + c * n + 2 * l) + n * (c * i + n + 2 * u) + p) : (n = h, i = Math.max(0, -(c * n + l)), c = -i * i + n * (n + 2 * u) + p) : (n = -h, i = Math.max(0, -(c * n + l)), c = -i * i + n * (n + 2 * u) + p) : -s >= n ? (i = Math.max(0, -( - c * h + l)), n = i > 0 ? -h: Math.min(Math.max( - h, -u), h), c = -i * i + n * (n + 2 * u) + p) : s >= n ? (i = 0, n = Math.min(Math.max( - h, -u), h), c = n * (n + 2 * u) + p) : (i = Math.max(0, -(c * h + l)), n = i > 0 ? h: Math.min(Math.max( - h, -u), h), c = -i * i + n * (n + 2 * u) + p)) : (n = c > 0 ? -h: h, i = Math.max(0, -(c * n + l)), c = -i * i + n * (n + 2 * u) + p),
            o && o.copy(this.direction).multiplyScalar(i).add(this.origin),
            a && a.copy(t).multiplyScalar(n).add(e),
            c
        }
    } (),
    isIntersectionSphere: function(e) {
        return this.distanceToPoint(e.center) <= e.radius
    },
    intersectSphere: function() {
        var e = new THREE.Vector3;
        return function(t, r) {
            e.subVectors(t.center, this.origin);
            var i = e.dot(this.direction),
            n = e.dot(e) - i * i,
            o = t.radius * t.radius;
            return n > o ? null: (o = Math.sqrt(o - n), n = i - o, i += o, 0 > n && 0 > i ? null: 0 > n ? this.at(i, r) : this.at(n, r))
        }
    } (),
    isIntersectionPlane: function(e) {
        var t = e.distanceToPoint(this.origin);
        return 0 === t || 0 > e.normal.dot(this.direction) * t ? !0 : !1
    },
    distanceToPlane: function(e) {
        var t = e.normal.dot(this.direction);
        return 0 === t ? 0 === e.distanceToPoint(this.origin) ? 0 : null: (e = -(this.origin.dot(e.normal) + e.constant) / t, e >= 0 ? e: null)
    },
    intersectPlane: function(e, t) {
        var r = this.distanceToPlane(e);
        return null === r ? null: this.at(r, t)
    },
    isIntersectionBox: function() {
        var e = new THREE.Vector3;
        return function(t) {
            return null !== this.intersectBox(t, e)
        }
    } (),
    intersectBox: function(e, t) {
        var r, i, n, o, a;
        i = 1 / this.direction.x,
        o = 1 / this.direction.y,
        a = 1 / this.direction.z;
        var s = this.origin;
        return i >= 0 ? (r = (e.min.x - s.x) * i, i *= e.max.x - s.x) : (r = (e.max.x - s.x) * i, i *= e.min.x - s.x),
        o >= 0 ? (n = (e.min.y - s.y) * o, o *= e.max.y - s.y) : (n = (e.max.y - s.y) * o, o *= e.min.y - s.y),
        r > o || n > i ? null: ((n > r || r !== r) && (r = n), (i > o || i !== i) && (i = o), a >= 0 ? (n = (e.min.z - s.z) * a, a *= e.max.z - s.z) : (n = (e.max.z - s.z) * a, a *= e.min.z - s.z), r > a || n > i ? null: ((n > r || r !== r) && (r = n), (i > a || i !== i) && (i = a), 0 > i ? null: this.at(r >= 0 ? r: i, t)))
    },
    intersectTriangle: function() {
        var e = new THREE.Vector3,
        t = new THREE.Vector3,
        r = new THREE.Vector3,
        i = new THREE.Vector3;
        return function(n, o, a, s, h) {
            if (t.subVectors(o, n), r.subVectors(a, n), i.crossVectors(t, r), o = this.direction.dot(i), o > 0) {
                if (s) return null;
                s = 1
            } else {
                if (! (0 > o)) return null;
                s = -1,
                o = -o
            }
            return e.subVectors(this.origin, n),
            n = s * this.direction.dot(r.crossVectors(e, r)),
            0 > n ? null: (a = s * this.direction.dot(t.cross(e)), 0 > a || n + a > o ? null: (n = -s * e.dot(i), 0 > n ? null: this.at(n / o, h)))
        }
    } (),
    applyMatrix4: function(e) {
        return this.direction.add(this.origin).applyMatrix4(e),
        this.origin.applyMatrix4(e),
        this.direction.sub(this.origin),
        this.direction.normalize(),
        this
    },
    equals: function(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
},
THREE.Sphere = function(e, t) {
    this.center = void 0 !== e ? e: new THREE.Vector3,
    this.radius = void 0 !== t ? t: 0
},
THREE.Sphere.prototype = {
    constructor: THREE.Sphere,
    set: function(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    },
    setFromPoints: function() {
        var e = new THREE.Box3;
        return function(t, r) {
            var i = this.center;
            void 0 !== r ? i.copy(r) : e.setFromPoints(t).center(i);
            for (var n = 0,
            o = 0,
            a = t.length; a > o; o++) n = Math.max(n, i.distanceToSquared(t[o]));
            return this.radius = Math.sqrt(n),
            this
        }
    } (),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    },
    empty: function() {
        return 0 >= this.radius
    },
    containsPoint: function(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    },
    distanceToPoint: function(e) {
        return e.distanceTo(this.center) - this.radius
    },
    intersectsSphere: function(e) {
        var t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    },
    clampPoint: function(e, t) {
        var r = this.center.distanceToSquared(e),
        i = t || new THREE.Vector3;
        return i.copy(e),
        r > this.radius * this.radius && (i.sub(this.center).normalize(), i.multiplyScalar(this.radius).add(this.center)),
        i
    },
    getBoundingBox: function(e) {
        return e = e || new THREE.Box3,
        e.set(this.center, this.center),
        e.expandByScalar(this.radius),
        e
    },
    applyMatrix4: function(e) {
        return this.center.applyMatrix4(e),
        this.radius *= e.getMaxScaleOnAxis(),
        this
    },
    translate: function(e) {
        return this.center.add(e),
        this
    },
    equals: function(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
},
THREE.Frustum = function(e, t, r, i, n, o) {
    this.planes = [void 0 !== e ? e: new THREE.Plane, void 0 !== t ? t: new THREE.Plane, void 0 !== r ? r: new THREE.Plane, void 0 !== i ? i: new THREE.Plane, void 0 !== n ? n: new THREE.Plane, void 0 !== o ? o: new THREE.Plane]
},
THREE.Frustum.prototype = {
    constructor: THREE.Frustum,
    set: function(e, t, r, i, n, o) {
        var a = this.planes;
        return a[0].copy(e),
        a[1].copy(t),
        a[2].copy(r),
        a[3].copy(i),
        a[4].copy(n),
        a[5].copy(o),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        for (var t = this.planes,
        r = 0; 6 > r; r++) t[r].copy(e.planes[r]);
        return this
    },
    setFromMatrix: function(e) {
        var t = this.planes,
        r = e.elements;
        e = r[0];
        var i = r[1],
        n = r[2],
        o = r[3],
        a = r[4],
        s = r[5],
        h = r[6],
        c = r[7],
        l = r[8],
        u = r[9],
        p = r[10],
        E = r[11],
        d = r[12],
        f = r[13],
        m = r[14],
        r = r[15];
        return t[0].setComponents(o - e, c - a, E - l, r - d).normalize(),
        t[1].setComponents(o + e, c + a, E + l, r + d).normalize(),
        t[2].setComponents(o + i, c + s, E + u, r + f).normalize(),
        t[3].setComponents(o - i, c - s, E - u, r - f).normalize(),
        t[4].setComponents(o - n, c - h, E - p, r - m).normalize(),
        t[5].setComponents(o + n, c + h, E + p, r + m).normalize(),
        this
    },
    intersectsObject: function() {
        var e = new THREE.Sphere;
        return function(t) {
            var r = t.geometry;
            return null === r.boundingSphere && r.computeBoundingSphere(),
            e.copy(r.boundingSphere),
            e.applyMatrix4(t.matrixWorld),
            this.intersectsSphere(e)
        }
    } (),
    intersectsSphere: function(e) {
        var t = this.planes,
        r = e.center;
        e = -e.radius;
        for (var i = 0; 6 > i; i++) if (t[i].distanceToPoint(r) < e) return ! 1;
        return ! 0
    },
    intersectsBox: function() {
        var e = new THREE.Vector3,
        t = new THREE.Vector3;
        return function(r) {

            for (var i = this.planes,
            n = 0; 6 > n; n++) {
                var o = i[n];
                e.x = 0 < o.normal.x ? r.min.x: r.max.x,
                t.x = 0 < o.normal.x ? r.max.x: r.min.x,
                e.y = 0 < o.normal.y ? r.min.y: r.max.y,
                t.y = 0 < o.normal.y ? r.max.y: r.min.y,
                e.z = 0 < o.normal.z ? r.min.z: r.max.z,
                t.z = 0 < o.normal.z ? r.max.z: r.min.z;
                var a = o.distanceToPoint(e),
                o = o.distanceToPoint(t);
                if (0 > a && 0 > o) return ! 1
            }
            return ! 0
        }
    } (),
    containsPoint: function(e) {
        for (var t = this.planes,
        r = 0; 6 > r; r++) if (0 > t[r].distanceToPoint(e)) return ! 1;
        return ! 0
    }
},
THREE.Plane = function(e, t) {
    this.normal = void 0 !== e ? e: new THREE.Vector3(1, 0, 0),
    this.constant = void 0 !== t ? t: 0
},
THREE.Plane.prototype = {
    constructor: THREE.Plane,
    set: function(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    },
    setComponents: function(e, t, r, i) {
        return this.normal.set(e, t, r),
        this.constant = i,
        this
    },
    setFromNormalAndCoplanarPoint: function(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    },
    setFromCoplanarPoints: function() {
        var e = new THREE.Vector3,
        t = new THREE.Vector3;
        return function(r, i, n) {
            return i = e.subVectors(n, i).cross(t.subVectors(r, i)).normalize(),
            this.setFromNormalAndCoplanarPoint(i, r),
            this
        }
    } (),
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    },
    normalize: function() {
        var e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    },
    negate: function() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    },
    distanceToPoint: function(e) {
        return this.normal.dot(e) + this.constant
    },
    distanceToSphere: function(e) {
        return this.distanceToPoint(e.center) - e.radius
    },
    projectPoint: function(e, t) {
        return this.orthoPoint(e, t).sub(e).negate()
    },
    orthoPoint: function(e, t) {
        var r = this.distanceToPoint(e);
        return (t || new THREE.Vector3).copy(this.normal).multiplyScalar(r)
    },
    isIntersectionLine: function(e) {
        var t = this.distanceToPoint(e.start);
        return e = this.distanceToPoint(e.end),
        0 > t && e > 0 || 0 > e && t > 0
    },
    intersectLine: function() {
        var e = new THREE.Vector3;
        return function(t, r) {
            var i = r || new THREE.Vector3,
            n = t.delta(e),
            o = this.normal.dot(n);
            return 0 !== o ? (o = -(t.start.dot(this.normal) + this.constant) / o, 0 > o || o > 1 ? void 0 : i.copy(n).multiplyScalar(o).add(t.start)) : 0 === this.distanceToPoint(t.start) ? i.copy(t.start) : void 0
        }
    } (),
    coplanarPoint: function(e) {
        return (e || new THREE.Vector3).copy(this.normal).multiplyScalar( - this.constant)
    },
    applyMatrix4: function() {
        var e = new THREE.Vector3,
        t = new THREE.Vector3,
        r = new THREE.Matrix3;
        return function(i, n) {
            var o = n || r.getNormalMatrix(i),
            o = e.copy(this.normal).applyMatrix3(o),
            a = this.coplanarPoint(t);
            return a.applyMatrix4(i),
            this.setFromNormalAndCoplanarPoint(o, a),
            this
        }
    } (),
    translate: function(e) {
        return this.constant -= e.dot(this.normal),
        this
    },
    equals: function(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }

},
THREE.Math = {
    generateUUID: function() {
        var e, t = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        r = Array(36),
        i = 0;
        return function() {
            for (var n = 0; 36 > n; n++) 8 === n || 13 === n || 18 === n || 23 === n ? r[n] = "-": 14 === n ? r[n] = "4": (2 >= i && (i = 33554432 + 16777216 * Math.random() | 0), e = 15 & i, i >>= 4, r[n] = t[19 === n ? 3 & e | 8 : e]);
            return r.join("")
        }
    } (),
    clamp: function(e, t, r) {
        return Math.max(t, Math.min(r, e))
    },
    euclideanModulo: function(e, t) {
        return (e % t + t) % t
    },
    mapLinear: function(e, t, r, i, n) {
        return i + (e - t) * (n - i) / (r - t)
    },
    smoothstep: function(e, t, r) {
        return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * (3 - 2 * e))
    },
    smootherstep: function(e, t, r) {
        return t >= e ? 0 : e >= r ? 1 : (e = (e - t) / (r - t), e * e * e * (e * (6 * e - 15) + 10))
    },
    random16: function() {
        return (65280 * Math.random() + 255 * Math.random()) / 65535
    },
    randInt: function(e, t) {
        return e + Math.floor(Math.random() * (t - e + 1))
    },
    randFloat: function(e, t) {
        return e + Math.random() * (t - e)
    },
    randFloatSpread: function(e) {
        return e * (.5 - Math.random())
    },
    degToRad: function() {
        var e = Math.PI / 180;
        return function(t) {
            return t * e
        }
    } (),
    radToDeg: function() {
        var e = 180 / Math.PI;
        return function(t) {
            return t * e
        }
    } (),
    isPowerOfTwo: function(e) {
        return 0 === (e & e - 1) && 0 !== e
    },
    nearestPowerOfTwo: function(e) {
        return Math.pow(2, Math.round(Math.log(e) / Math.LN2))
    },
    nextPowerOfTwo: function(e) {
        return e--,
        e |= e >> 1,
        e |= e >> 2,
        e |= e >> 4,
        e |= e >> 8,
        e |= e >> 16,
        e++,
        e
    }
},
THREE.Spline = function(e) {
    function t(e, t, r, i, n, o, a) {
        return e = .5 * (r - e),
        i = .5 * (i - t),
        (2 * (t - r) + e + i) * a + ( - 3 * (t - r) - 2 * e - i) * o + e * n + t
    }
    this.points = e;
    var r, i, n, o, a, s, h, c, l, u = [],
    p = {
        x: 0,
        y: 0,
        z: 0
    };
    this.initFromArray = function(e) {
        this.points = [];
        for (var t = 0; t < e.length; t++) this.points[t] = {
            x: e[t][0],
            y: e[t][1],
            z: e[t][2]
        }
    },
    this.getPoint = function(e) {
        return r = (this.points.length - 1) * e,
        i = Math.floor(r),
        n = r - i,
        u[0] = 0 === i ? i: i - 1,
        u[1] = i,
        u[2] = i > this.points.length - 2 ? this.points.length - 1 : i + 1,
        u[3] = i > this.points.length - 3 ? this.points.length - 1 : i + 2,
        s = this.points[u[0]],
        h = this.points[u[1]],
        c = this.points[u[2]],
        l = this.points[u[3]],
        o = n * n,
        a = n * o,
        p.x = t(s.x, h.x, c.x, l.x, n, o, a),
        p.y = t(s.y, h.y, c.y, l.y, n, o, a),
        p.z = t(s.z, h.z, c.z, l.z, n, o, a),
        p
    },
    this.getControlPointsArray = function() {
        var e, t, r = this.points.length,
        i = [];
        for (e = 0; r > e; e++) t = this.points[e],
        i[e] = [t.x, t.y, t.z];
        return i
    },
    this.getLength = function(e) {
        var t, r, i, n = t = t = 0,
        o = new THREE.Vector3,
        a = new THREE.Vector3,
        s = [],
        h = 0;
        for (s[0] = 0, e || (e = 100), r = this.points.length * e, o.copy(this.points[0]), e = 1; r > e; e++) t = e / r,
        i = this.getPoint(t),
        a.copy(i),
        h += a.distanceTo(o),
        o.copy(i),
        t *= this.points.length - 1,
        t = Math.floor(t),
        t !== n && (s[t] = h, n = t);
        return s[s.length] = h,
        {
            chunks: s,
            total: h
        }
    },
    this.reparametrizeByArcLength = function(e) {
        var t, r, i, n, o, a, s = [],
        h = new THREE.Vector3,
        c = this.getLength();
        for (s.push(h.copy(this.points[0]).clone()), t = 1; t < this.points.length; t++) {
            for (r = c.chunks[t] - c.chunks[t - 1], a = Math.ceil(e * r / c.total), n = (t - 1) / (this.points.length - 1), o = t / (this.points.length - 1), r = 1; a - 1 > r; r++) i = n + 1 / a * r * (o - n),
            i = this.getPoint(i),
            s.push(h.copy(i).clone());
            s.push(h.copy(this.points[t]).clone())
        }
        this.points = s
    }
},
THREE.Triangle = function(e, t, r) {
    this.a = void 0 !== e ? e: new THREE.Vector3,
    this.b = void 0 !== t ? t: new THREE.Vector3,
    this.c = void 0 !== r ? r: new THREE.Vector3
},
THREE.Triangle.normal = function() {
    var e = new THREE.Vector3;
    return function(t, r, i, n) {
        return n = n || new THREE.Vector3,
        n.subVectors(i, r),
        e.subVectors(t, r),
        n.cross(e),
        t = n.lengthSq(),
        t > 0 ? n.multiplyScalar(1 / Math.sqrt(t)) : n.set(0, 0, 0)
    }
} (),
THREE.Triangle.barycoordFromPoint = function() {
    var e = new THREE.Vector3,
    t = new THREE.Vector3,
    r = new THREE.Vector3;
    return function(i, n, o, a, s) {
        e.subVectors(a, n),
        t.subVectors(o, n),
        r.subVectors(i, n),
        i = e.dot(e),
        n = e.dot(t),
        o = e.dot(r);
        var h = t.dot(t);
        a = t.dot(r);
        var c = i * h - n * n;
        return s = s || new THREE.Vector3,
        0 === c ? s.set( - 2, -1, -1) : (c = 1 / c, h = (h * o - n * a) * c, i = (i * a - n * o) * c, s.set(1 - h - i, i, h))
    }
} (),
THREE.Triangle.containsPoint = function() {
    var e = new THREE.Vector3;
    return function(t, r, i, n) {
        return t = THREE.Triangle.barycoordFromPoint(t, r, i, n, e),
        0 <= t.x && 0 <= t.y && 1 >= t.x + t.y
    }
} (),
THREE.Triangle.prototype = {
    constructor: THREE.Triangle,
    set: function(e, t, r) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(r),
        this
    },
    setFromPointsAndIndices: function(e, t, r, i) {
        return this.a.copy(e[t]),
        this.b.copy(e[r]),
        this.c.copy(e[i]),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    },
    area: function() {
        var e = new THREE.Vector3,
        t = new THREE.Vector3;
        return function() {
            return e.subVectors(this.c, this.b),
            t.subVectors(this.a, this.b),
            .5 * e.cross(t).length()
        }
    } (),
    midpoint: function(e) {
        return (e || new THREE.Vector3).addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    },
    normal: function(e) {
        return THREE.Triangle.normal(this.a, this.b, this.c, e)
    },
    plane: function(e) {
        return (e || new THREE.Plane).setFromCoplanarPoints(this.a, this.b, this.c)
    },
    barycoordFromPoint: function(e, t) {
        return THREE.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t)
    },
    containsPoint: function(e) {
        return THREE.Triangle.containsPoint(e, this.a, this.b, this.c)
    },
    equals: function(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
},
THREE.Channels = function() {
    this.mask = 1
},
THREE.Channels.prototype = {
    constructor: THREE.Channels,

    set: function(e) {
        this.mask = 1 << e
    },
    enable: function(e) {
        this.mask |= 1 << e
    },
    toggle: function(e) {
        this.mask ^= 1 << e
    },
    disable: function(e) {
        this.mask &= ~ (1 << e)
    }
},
THREE.Clock = function(e) {
    this.autoStart = void 0 !== e ? e: !0,
    this.elapsedTime = this.oldTime = this.startTime = 0,
    this.running = !1
},
THREE.Clock.prototype = {
    constructor: THREE.Clock,
    start: function() {
        this.oldTime = this.startTime = self.performance.now(),
        this.running = !0
    },
    stop: function() {
        this.getElapsedTime(),
        this.running = !1
    },
    getElapsedTime: function() {
        return this.getDelta(),
        this.elapsedTime
    },
    getDelta: function() {
        var e = 0;
        if (this.autoStart && !this.running && this.start(), this.running) {
            var t = self.performance.now(),
            e = .001 * (t - this.oldTime);
            this.oldTime = t,
            this.elapsedTime += e
        }
        return e
    }
},
THREE.EventDispatcher = function() {},
THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher,
    apply: function(e) {
        e.addEventListener = THREE.EventDispatcher.prototype.addEventListener,
        e.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener,
        e.removeEventListener = THREE.EventDispatcher.prototype.removeEventListener,
        e.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent
    },
    addEventListener: function(e, t) {
        void 0 === this._listeners && (this._listeners = {});
        var r = this._listeners;
        void 0 === r[e] && (r[e] = []),
        -1 === r[e].indexOf(t) && r[e].push(t)
    },
    hasEventListener: function(e, t) {
        if (void 0 === this._listeners) return ! 1;
        var r = this._listeners;
        return void 0 !== r[e] && -1 !== r[e].indexOf(t) ? !0 : !1
    },
    removeEventListener: function(e, t) {
        if (void 0 !== this._listeners) {
            var r = this._listeners[e];
            if (void 0 !== r) {
                var i = r.indexOf(t); - 1 !== i && r.splice(i, 1)
            }
        }
    },
    dispatchEvent: function(e) {
        if (void 0 !== this._listeners) {
            var t = this._listeners[e.type];
            if (void 0 !== t) {
                e.target = this;
                for (var r = [], i = t.length, n = 0; i > n; n++) r[n] = t[n];
                for (n = 0; i > n; n++) r[n].call(this, e)
            }
        }
    }
},
function(e) {
    function t(e, t) {
        return e.distance - t.distance
    }

    function r(e, t, i, n) {
        if (!1 !== e.visible && (e.raycast(t, i), !0 === n)) {
            e = e.children,
            n = 0;
            for (var o = e.length; o > n; n++) r(e[n], t, i, !0)
        }
    }
    e.Raycaster = function(t, r, i, n) {
        this.ray = new e.Ray(t, r),
        this.near = i || 0,
        this.far = n || 1 / 0,
        this.params = {
            Mesh: {},
            Line: {},
            LOD: {},
            Points: {
                threshold: 1
            },
            Sprite: {}
        },
        Object.defineProperties(this.params, {
            PointCloud: {
                get: function() {
                    return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),
                    this.Points
                }
            }
        })
    },
    e.Raycaster.prototype = {
        constructor: e.Raycaster,
        linePrecision: 1,
        set: function(e, t) {
            this.ray.set(e, t)
        },
        setFromCamera: function(t, r) {
            r instanceof e.PerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(r.matrixWorld), this.ray.direction.set(t.x, t.y, .5).unproject(r).sub(this.ray.origin).normalize()) : r instanceof e.OrthographicCamera ? (this.ray.origin.set(t.x, t.y, -1).unproject(r), this.ray.direction.set(0, 0, -1).transformDirection(r.matrixWorld)) : console.error("THREE.Raycaster: Unsupported camera type.")
        },
        intersectObject: function(e, i) {
            var n = [];
            return r(e, this, n, i),
            n.sort(t),
            n
        },
        intersectObjects: function(e, i) {
            var n = [];
            if (!1 === Array.isArray(e)) return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),
            n;
            for (var o = 0,
            a = e.length; a > o; o++) r(e[o], this, n, i);
            return n.sort(t),
            n
        }
    }
} (THREE),
THREE.Object3D = function() {
    Object.defineProperty(this, "id", {
        value: THREE.Object3DIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "Object3D",
    this.parent = null,
    this.channels = new THREE.Channels,
    this.children = [],
    this.up = THREE.Object3D.DefaultUp.clone();
    var e = new THREE.Vector3,
    t = new THREE.Euler,
    r = new THREE.Quaternion,
    i = new THREE.Vector3(1, 1, 1);
    t.onChange(function() {
        r.setFromEuler(t, !1)
    }),
    r.onChange(function() {
        t.setFromQuaternion(r, void 0, !1)
    }),
    Object.defineProperties(this, {
        position: {
            enumerable: !0,
            value: e
        },
        rotation: {
            enumerable: !0,
            value: t
        },
        quaternion: {
            enumerable: !0,
            value: r
        },
        scale: {
            enumerable: !0,
            value: i
        },
        modelViewMatrix: {
            value: new THREE.Matrix4
        },
        normalMatrix: {
            value: new THREE.Matrix3
        }
    }),
    this.rotationAutoUpdate = !0,
    this.matrix = new THREE.Matrix4,
    this.matrixWorld = new THREE.Matrix4,
    this.matrixAutoUpdate = THREE.Object3D.DefaultMatrixAutoUpdate,
    this.matrixWorldNeedsUpdate = !1,
    this.visible = !0,
    this.receiveShadow = this.castShadow = !1,
    this.frustumCulled = !0,
    this.renderOrder = 0,
    this.userData = {}
},
THREE.Object3D.DefaultUp = new THREE.Vector3(0, 1, 0),
THREE.Object3D.DefaultMatrixAutoUpdate = !0,
THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    get eulerOrder() {
        return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
        this.rotation.order
    },
    set eulerOrder(e) {
        console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),
        this.rotation.order = e
    },
    get useQuaternion() {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
    },
    set useQuaternion(e) {
        console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")
    },
    set renderDepth(e) {
        console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")
    },
    applyMatrix: function(e) {
        this.matrix.multiplyMatrices(e, this.matrix),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    },
    setRotationFromAxisAngle: function(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    },
    setRotationFromEuler: function(e) {
        this.quaternion.setFromEuler(e, !0)
    },
    setRotationFromMatrix: function(e) {
        this.quaternion.setFromRotationMatrix(e)
    },
    setRotationFromQuaternion: function(e) {
        this.quaternion.copy(e)
    },
    rotateOnAxis: function() {
        var e = new THREE.Quaternion;
        return function(t, r) {
            return e.setFromAxisAngle(t, r),
            this.quaternion.multiply(e),
            this
        }
    } (),
    rotateX: function() {
        var e = new THREE.Vector3(1, 0, 0);
        return function(t) {
            return this.rotateOnAxis(e, t)
        }
    } (),
    rotateY: function() {
        var e = new THREE.Vector3(0, 1, 0);
        return function(t) {
            return this.rotateOnAxis(e, t)
        }
    } (),
    rotateZ: function() {
        var e = new THREE.Vector3(0, 0, 1);
        return function(t) {
            return this.rotateOnAxis(e, t)
        }
    } (),
    translateOnAxis: function() {
        var e = new THREE.Vector3;
        return function(t, r) {
            return e.copy(t).applyQuaternion(this.quaternion),
            this.position.add(e.multiplyScalar(r)),
            this
        }
    } (),
    translate: function(e, t) {
        return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),
        this.translateOnAxis(t, e)
    },
    translateX: function() {
        var e = new THREE.Vector3(1, 0, 0);
        return function(t) {
            return this.translateOnAxis(e, t)
        }
    } (),
    translateY: function() {
        var e = new THREE.Vector3(0, 1, 0);
        return function(t) {
            return this.translateOnAxis(e, t)
        }
    } (),
    translateZ: function() {
        var e = new THREE.Vector3(0, 0, 1);
        return function(t) {
            return this.translateOnAxis(e, t)
        }
    } (),
    localToWorld: function(e) {
        return e.applyMatrix4(this.matrixWorld)
    },
    worldToLocal: function() {
        var e = new THREE.Matrix4;
        return function(t) {
            return t.applyMatrix4(e.getInverse(this.matrixWorld))
        }
    } (),
    lookAt: function() {
        var e = new THREE.Matrix4;
        return function(t) {
            e.lookAt(t, this.position, this.up),
            this.quaternion.setFromRotationMatrix(e)
        }
    } (),
    add: function(e) {
        if (1 < arguments.length) {
            for (var t = 0; t < arguments.length; t++) this.add(arguments[t]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e instanceof THREE.Object3D ? (null !== e.parent && e.parent.remove(e), e.parent = this, e.dispatchEvent({
            type: "added"
        }), this.children.push(e)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this)
    },
    remove: function(e) {
        if (1 < arguments.length) for (var t = 0; t < arguments.length; t++) this.remove(arguments[t]);
        t = this.children.indexOf(e),
        -1 !== t && (e.parent = null, e.dispatchEvent({
            type: "removed"
        }), this.children.splice(t, 1))
    },
    getChildByName: function(e) {
        return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),
        this.getObjectByName(e)
    },
    getObjectById: function(e) {
        return this.getObjectByProperty("id", e)
    },
    getObjectByName: function(e) {
        return this.getObjectByProperty("name", e)
    },
    getObjectByProperty: function(e, t) {
        if (this[e] === t) return this;
        for (var r = 0,
        i = this.children.length; i > r; r++) {
            var n = this.children[r].getObjectByProperty(e, t);
            if (void 0 !== n) return n
        }
    },
    getWorldPosition: function(e) {
        return e = e || new THREE.Vector3,
        this.updateMatrixWorld(!0),
        e.setFromMatrixPosition(this.matrixWorld)
    },
    getWorldQuaternion: function() {
        var e = new THREE.Vector3,
        t = new THREE.Vector3;
        return function(r) {
            return r = r || new THREE.Quaternion,
            this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(e, r, t),
            r
        }
    } (),
    getWorldRotation: function() {
        var e = new THREE.Quaternion;
        return function(t) {
            return t = t || new THREE.Euler,
            this.getWorldQuaternion(e),
            t.setFromQuaternion(e, this.rotation.order, !1)
        }
    } (),
    getWorldScale: function() {
        var e = new THREE.Vector3,
        t = new THREE.Quaternion;
        return function(r) {
            return r = r || new THREE.Vector3,
            this.updateMatrixWorld(!0),
            this.matrixWorld.decompose(e, t, r),
            r
        }
    } (),
    getWorldDirection: function() {
        var e = new THREE.Quaternion;
        return function(t) {
            return t = t || new THREE.Vector3,
            this.getWorldQuaternion(e),
            t.set(0, 0, 1).applyQuaternion(e)
        }
    } (),
    raycast: function() {},
    traverse: function(e) {
        e(this);
        for (var t = this.children,
        r = 0,
        i = t.length; i > r; r++) t[r].traverse(e)
    },
    traverseVisible: function(e) {
        if (!1 !== this.visible) {
            e(this);
            for (var t = this.children,
            r = 0,
            i = t.length; i > r; r++) t[r].traverseVisible(e)
        }
    },
    traverseAncestors: function(e) {
        var t = this.parent;
        null !== t && (e(t), t.traverseAncestors(e))
    },
    updateMatrix: function() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    },
    updateMatrixWorld: function(e) { ! 0 === this.matrixAutoUpdate && this.updateMatrix(),
        (!0 === this.matrixWorldNeedsUpdate || !0 === e) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this.matrixWorldNeedsUpdate = !1, e = !0);
        for (var t = 0,
        r = this.children.length; r > t; t++) this.children[t].updateMatrixWorld(e)
    },
    toJSON: function(e) {
        function t(e) {
            var t, r = [];
            for (t in e) {
                var i = e[t];
                delete i.metadata,
                r.push(i)
            }
            return r
        }
        var r = void 0 === e,
        i = {};
        r && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {}
        },
        i.metadata = {
            version: 4.4,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        var n = {};
        if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData), !0 === this.castShadow && (n.castShadow = !0), !0 === this.receiveShadow && (n.receiveShadow = !0), !1 === this.visible && (n.visible = !1), n.matrix = this.matrix.toArray(), void 0 !== this.geometry && (void 0 === e.geometries[this.geometry.uuid] && (e.geometries[this.geometry.uuid] = this.geometry.toJSON(e)), n.geometry = this.geometry.uuid), void 0 !== this.material && (void 0 === e.materials[this.material.uuid] && (e.materials[this.material.uuid] = this.material.toJSON(e)), n.material = this.material.uuid), 0 < this.children.length) {
            n.children = [];
            for (var o = 0; o < this.children.length; o++) n.children.push(this.children[o].toJSON(e).object)
        }
        if (r) {
            var r = t(e.geometries),
            o = t(e.materials),
            a = t(e.textures);
            e = t(e.images),
            0 < r.length && (i.geometries = r),
            0 < o.length && (i.materials = o),
            0 < a.length && (i.textures = a),
            0 < e.length && (i.images = e)
        }
        return i.object = n,
        i
    },
    clone: function(e) {
        return (new this.constructor).copy(this, e)
    },
    copy: function(e, t) {
        if (void 0 === t && (t = !0), this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.rotationAutoUpdate = e.rotationAutoUpdate, this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.userData = JSON.parse(JSON.stringify(e.userData)), !0 === t) for (var r = 0; r < e.children.length; r++) this.add(e.children[r].clone());
        return this
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype),
THREE.Object3DIdCount = 0,
THREE.Face3 = function(e, t, r, i, n, o) {
    this.a = e,
    this.b = t,
    this.c = r,
    this.normal = i instanceof THREE.Vector3 ? i: new THREE.Vector3,
    this.vertexNormals = Array.isArray(i) ? i: [],
    this.color = n instanceof THREE.Color ? n: new THREE.Color,
    this.vertexColors = Array.isArray(n) ? n: [],
    this.materialIndex = void 0 !== o ? o: 0
},
THREE.Face3.prototype = {
    constructor: THREE.Face3,
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        this.a = e.a,
        this.b = e.b,
        this.c = e.c,
        this.normal.copy(e.normal),
        this.color.copy(e.color),
        this.materialIndex = e.materialIndex;
        for (var t = 0,
        r = e.vertexNormals.length; r > t; t++) this.vertexNormals[t] = e.vertexNormals[t].clone();
        for (t = 0, r = e.vertexColors.length; r > t; t++) this.vertexColors[t] = e.vertexColors[t].clone();
        return this
    }
},
THREE.Face4 = function(e, t, r, i, n, o, a) {
    return console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead."),
    new THREE.Face3(e, t, r, n, o, a)
},
THREE.BufferAttribute = function(e, t) {
    this.uuid = THREE.Math.generateUUID(),
    this.array = e,
    this.itemSize = t,
    this.dynamic = !1,
    this.updateRange = {
        offset: 0,
        count: -1
    },
    this.version = 0
},
THREE.BufferAttribute.prototype = {
    constructor: THREE.BufferAttribute,
    get length() {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),
        this.array.length
    },
    get count() {
        return this.array.length / this.itemSize
    },
    set needsUpdate(e) { ! 0 === e && this.version++
    },
    setDynamic: function(e) {
        return this.dynamic = e,
        this
    },
    copy: function(e) {
        return this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.dynamic = e.dynamic,
        this
    },
    copyAt: function(e, t, r) {
        e *= this.itemSize,
        r *= t.itemSize;
        for (var i = 0,
        n = this.itemSize; n > i; i++) this.array[e + i] = t.array[r + i];
        return this
    },
    copyArray: function(e) {
        return this.array.set(e),
        this
    },
    copyColorsArray: function(e) {
        for (var t = this.array,
        r = 0,
        i = 0,
        n = e.length; n > i; i++) {
            var o = e[i];
            void 0 === o && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i), o = new THREE.Color),
            t[r++] = o.r,
            t[r++] = o.g,
            t[r++] = o.b
        }
        return this
    },
    copyIndicesArray: function(e) {
        for (var t = this.array,
        r = 0,
        i = 0,
        n = e.length; n > i; i++) {
            var o = e[i];
            t[r++] = o.a,
            t[r++] = o.b,
            t[r++] = o.c
        }
        return this
    },
    copyVector2sArray: function(e) {
        for (var t = this.array,
        r = 0,
        i = 0,
        n = e.length; n > i; i++) {
            var o = e[i];
            void 0 === o && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i), o = new THREE.Vector2),
            t[r++] = o.x,
            t[r++] = o.y
        }
        return this
    },
    copyVector3sArray: function(e) {
        for (var t = this.array,
        r = 0,
        i = 0,
        n = e.length; n > i; i++) {
            var o = e[i];
            void 0 === o && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i), o = new THREE.Vector3),
            t[r++] = o.x,
            t[r++] = o.y,
            t[r++] = o.z
        }
        return this
    },
    copyVector4sArray: function(e) {
        for (var t = this.array,
        r = 0,
        i = 0,
        n = e.length; n > i; i++) {
            var o = e[i];
            void 0 === o && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i), o = new THREE.Vector4),
            t[r++] = o.x,
            t[r++] = o.y,
            t[r++] = o.z,
            t[r++] = o.w
        }
        return this
    },
    set: function(e, t) {
        return void 0 === t && (t = 0),
        this.array.set(e, t),
        this
    },
    getX: function(e) {
        return this.array[e * this.itemSize]
    },
    setX: function(e, t) {
        return this.array[e * this.itemSize] = t,
        this
    },
    getY: function(e) {
        return this.array[e * this.itemSize + 1]
    },
    setY: function(e, t) {
        return this.array[e * this.itemSize + 1] = t,
        this
    },
    getZ: function(e) {
        return this.array[e * this.itemSize + 2]
    },
    setZ: function(e, t) {
        return this.array[e * this.itemSize + 2] = t,
        this
    },
    getW: function(e) {
        return this.array[e * this.itemSize + 3]
    },
    setW: function(e, t) {
        return this.array[e * this.itemSize + 3] = t,
        this
    },
    setXY: function(e, t, r) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = r,
        this
    },
    setXYZ: function(e, t, r, i) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = r,
        this.array[e + 2] = i,
        this
    },
    setXYZW: function(e, t, r, i, n) {
        return e *= this.itemSize,
        this.array[e + 0] = t,
        this.array[e + 1] = r,
        this.array[e + 2] = i,
        this.array[e + 3] = n,
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
},
THREE.Int8Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Int8Array(e), t)
},
THREE.Uint8Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint8Array(e), t)
},
THREE.Uint8ClampedAttribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint8ClampedArray(e), t)
},
THREE.Int16Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Int16Array(e), t)
},
THREE.Uint16Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint16Array(e), t)
},
THREE.Int32Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Int32Array(e), t)
},
THREE.Uint32Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Uint32Array(e), t)
},
THREE.Float32Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Float32Array(e), t)
},
THREE.Float64Attribute = function(e, t) {
    return new THREE.BufferAttribute(new Float64Array(e), t)
},
THREE.DynamicBufferAttribute = function(e, t) {
    return console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead."),
    new THREE.BufferAttribute(e, t).setDynamic(!0)
},
THREE.InstancedBufferAttribute = function(e, t, r) {
    THREE.BufferAttribute.call(this, e, t),
    this.meshPerAttribute = r || 1
},
THREE.InstancedBufferAttribute.prototype = Object.create(THREE.BufferAttribute.prototype),
THREE.InstancedBufferAttribute.prototype.constructor = THREE.InstancedBufferAttribute,
THREE.InstancedBufferAttribute.prototype.copy = function(e) {
    return THREE.BufferAttribute.prototype.copy.call(this, e),
    this.meshPerAttribute = e.meshPerAttribute,
    this
},
THREE.InterleavedBuffer = function(e, t) {
    this.uuid = THREE.Math.generateUUID(),
    this.array = e,
    this.stride = t,
    this.dynamic = !1,
    this.updateRange = {
        offset: 0,
        count: -1
    },
    this.version = 0
},
THREE.InterleavedBuffer.prototype = {
    constructor: THREE.InterleavedBuffer,
    get length() {
        return this.array.length
    },
    get count() {
        return this.array.length / this.stride
    },
    set needsUpdate(e) { ! 0 === e && this.version++
    },
    setDynamic: function(e) {
        return this.dynamic = e,
        this
    },
    copy: function(e) {
        this.array = new e.array.constructor(e.array),
        this.stride = e.stride,
        this.dynamic = e.dynamic
    },
    copyAt: function(e, t, r) {
        e *= this.stride,
        r *= t.stride;
        for (var i = 0,
        n = this.stride; n > i; i++) this.array[e + i] = t.array[r + i];
        return this
    },
    set: function(e, t) {
        return void 0 === t && (t = 0),
        this.array.set(e, t),
        this
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
},
THREE.InstancedInterleavedBuffer = function(e, t, r) {
    THREE.InterleavedBuffer.call(this, e, t),
    this.meshPerAttribute = r || 1
},
THREE.InstancedInterleavedBuffer.prototype = Object.create(THREE.InterleavedBuffer.prototype),
THREE.InstancedInterleavedBuffer.prototype.constructor = THREE.InstancedInterleavedBuffer,
THREE.InstancedInterleavedBuffer.prototype.copy = function(e) {
    return THREE.InterleavedBuffer.prototype.copy.call(this, e),
    this.meshPerAttribute = e.meshPerAttribute,
    this
},
THREE.InterleavedBufferAttribute = function(e, t, r) {
    this.uuid = THREE.Math.generateUUID(),
    this.data = e,
    this.itemSize = t,
    this.offset = r
},
THREE.InterleavedBufferAttribute.prototype = {
    constructor: THREE.InterleavedBufferAttribute,
    get length() {
        return console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count."),
        this.array.length
    },
    get count() {
        return this.data.array.length / this.data.stride
    },
    setX: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset] = t,
        this
    },
    setY: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 1] = t,
        this
    },
    setZ: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 2] = t,
        this
    },
    setW: function(e, t) {
        return this.data.array[e * this.data.stride + this.offset + 3] = t,
        this
    },
    getX: function(e) {
        return this.data.array[e * this.data.stride + this.offset]
    },
    getY: function(e) {
        return this.data.array[e * this.data.stride + this.offset + 1]
    },
    getZ: function(e) {
        return this.data.array[e * this.data.stride + this.offset + 2]
    },
    getW: function(e) {
        return this.data.array[e * this.data.stride + this.offset + 3]
    },
    setXY: function(e, t, r) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = r,
        this
    },
    setXYZ: function(e, t, r, i) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = r,
        this.data.array[e + 2] = i,
        this
    },
    setXYZW: function(e, t, r, i, n) {
        return e = e * this.data.stride + this.offset,
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = r,
        this.data.array[e + 2] = i,
        this.data.array[e + 3] = n,
        this
    }
},
THREE.Geometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "Geometry",
    this.vertices = [],
    this.colors = [],
    this.faces = [],
    this.faceVertexUvs = [[]],
    this.morphTargets = [],
    this.morphNormals = [],
    this.skinWeights = [],
    this.skinIndices = [],
    this.lineDistances = [],
    this.boundingSphere = this.boundingBox = null,
    this.groupsNeedUpdate = this.lineDistancesNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.uvsNeedUpdate = this.elementsNeedUpdate = this.verticesNeedUpdate = !1
},
THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function(e) {
        for (var t = (new THREE.Matrix3).getNormalMatrix(e), r = 0, i = this.vertices.length; i > r; r++) this.vertices[r].applyMatrix4(e);
        for (r = 0, i = this.faces.length; i > r; r++) {
            e = this.faces[r],
            e.normal.applyMatrix3(t).normalize();
            for (var n = 0,
            o = e.vertexNormals.length; o > n; n++) e.vertexNormals[n].applyMatrix3(t).normalize()
        }
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere(),
        this.normalsNeedUpdate = this.verticesNeedUpdate = !0
    },
    rotateX: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationX(t),
            this.applyMatrix(e),
            this
        }
    } (),
    rotateY: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationY(t),
            this.applyMatrix(e),
            this
        }
    } (),
    rotateZ: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationZ(t),
            this.applyMatrix(e),
            this
        }
    } (),
    translate: function() {
        var e;
        return function(t, r, i) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeTranslation(t, r, i),
            this.applyMatrix(e),
            this
        }
    } (),
    scale: function() {
        var e;
        return function(t, r, i) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeScale(t, r, i),
            this.applyMatrix(e),
            this
        }
    } (),
    lookAt: function() {
        var e;
        return function(t) {
            void 0 === e && (e = new THREE.Object3D),
            e.lookAt(t),
            e.updateMatrix(),
            this.applyMatrix(e.matrix)
        }
    } (),
    fromBufferGeometry: function(e) {
        function t(e, t, i) {
            var n = void 0 !== a ? [l[e].clone(), l[t].clone(), l[i].clone()] : [],
            o = void 0 !== s ? [r.colors[e].clone(), r.colors[t].clone(), r.colors[i].clone()] : [],
            n = new THREE.Face3(e, t, i, n, o);
            r.faces.push(n),
            void 0 !== h && r.faceVertexUvs[0].push([u[e].clone(), u[t].clone(), u[i].clone()]),
            void 0 !== c && r.faceVertexUvs[1].push([p[e].clone(), p[t].clone(), p[i].clone()])
        }
        var r = this,
        i = null !== e.index ? e.index.array: void 0,
        n = e.attributes,
        o = n.position.array,
        a = void 0 !== n.normal ? n.normal.array: void 0,
        s = void 0 !== n.color ? n.color.array: void 0,
        h = void 0 !== n.uv ? n.uv.array: void 0,
        c = void 0 !== n.uv2 ? n.uv2.array: void 0;
        void 0 !== c && (this.faceVertexUvs[1] = []);
        for (var l = [], u = [], p = [], E = n = 0; n < o.length; n += 3, E += 2) r.vertices.push(new THREE.Vector3(o[n], o[n + 1], o[n + 2])),
        void 0 !== a && l.push(new THREE.Vector3(a[n], a[n + 1], a[n + 2])),
        void 0 !== s && r.colors.push(new THREE.Color(s[n], s[n + 1], s[n + 2])),
        void 0 !== h && u.push(new THREE.Vector2(h[E], h[E + 1])),
        void 0 !== c && p.push(new THREE.Vector2(c[E], c[E + 1]));
        if (void 0 !== i) if (o = e.groups, 0 < o.length) for (n = 0; n < o.length; n++) for (var E = o[n], d = E.start, f = E.count, E = d, d = d + f; d > E; E += 3) t(i[E], i[E + 1], i[E + 2]);
        else for (n = 0; n < i.length; n += 3) t(i[n], i[n + 1], i[n + 2]);
        else for (n = 0; n < o.length / 3; n += 3) t(n, n + 1, n + 2);
        return this.computeFaceNormals(),
        null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
        null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
        this
    },
    center: function() {
        this.computeBoundingBox();
        var e = this.boundingBox.center().negate();
        return this.translate(e.x, e.y, e.z),
        e
    },
    normalize: function() {
        this.computeBoundingSphere();
        var e = this.boundingSphere.center,
        t = this.boundingSphere.radius,
        t = 0 === t ? 1 : 1 / t,
        r = new THREE.Matrix4;
        return r.set(t, 0, 0, -t * e.x, 0, t, 0, -t * e.y, 0, 0, t, -t * e.z, 0, 0, 0, 1),
        this.applyMatrix(r),
        this
    },
    computeFaceNormals: function() {
        for (var e = new THREE.Vector3,
        t = new THREE.Vector3,
        r = 0,
        i = this.faces.length; i > r; r++) {
            var n = this.faces[r],
            o = this.vertices[n.a],
            a = this.vertices[n.b];
            e.subVectors(this.vertices[n.c], a),
            t.subVectors(o, a),
            e.cross(t),
            e.normalize(),
            n.normal.copy(e)
        }
    },
    computeVertexNormals: function(e) {
        var t, r, i;
        for (i = Array(this.vertices.length), t = 0, r = this.vertices.length; r > t; t++) i[t] = new THREE.Vector3;
        if (e) {
            var n, o, a, s = new THREE.Vector3,
            h = new THREE.Vector3;
            for (e = 0, t = this.faces.length; t > e; e++) r = this.faces[e],
            n = this.vertices[r.a],
            o = this.vertices[r.b],
            a = this.vertices[r.c],
            s.subVectors(a, o),
            h.subVectors(n, o),
            s.cross(h),
            i[r.a].add(s),
            i[r.b].add(s),
            i[r.c].add(s)
        } else for (e = 0, t = this.faces.length; t > e; e++) r = this.faces[e],
        i[r.a].add(r.normal),
        i[r.b].add(r.normal),
        i[r.c].add(r.normal);
        for (t = 0, r = this.vertices.length; r > t; t++) i[t].normalize();
        for (e = 0, t = this.faces.length; t > e; e++) r = this.faces[e],
        n = r.vertexNormals,
        3 === n.length ? (n[0].copy(i[r.a]), n[1].copy(i[r.b]), n[2].copy(i[r.c])) : (n[0] = i[r.a].clone(), n[1] = i[r.b].clone(), n[2] = i[r.c].clone())
    },
    computeMorphNormals: function() {
        var e, t, r, i, n;
        for (r = 0, i = this.faces.length; i > r; r++) for (n = this.faces[r], n.__originalFaceNormal ? n.__originalFaceNormal.copy(n.normal) : n.__originalFaceNormal = n.normal.clone(), n.__originalVertexNormals || (n.__originalVertexNormals = []), e = 0, t = n.vertexNormals.length; t > e; e++) n.__originalVertexNormals[e] ? n.__originalVertexNormals[e].copy(n.vertexNormals[e]) : n.__originalVertexNormals[e] = n.vertexNormals[e].clone();
        var o = new THREE.Geometry;
        for (o.faces = this.faces, e = 0, t = this.morphTargets.length; t > e; e++) {
            if (!this.morphNormals[e]) {
                this.morphNormals[e] = {},
                this.morphNormals[e].faceNormals = [],
                this.morphNormals[e].vertexNormals = [],
                n = this.morphNormals[e].faceNormals;
                var a, s, h = this.morphNormals[e].vertexNormals;
                for (r = 0, i = this.faces.length; i > r; r++) a = new THREE.Vector3,
                s = {
                    a: new THREE.Vector3,
                    b: new THREE.Vector3,
                    c: new THREE.Vector3
                },
                n.push(a),
                h.push(s)
            }
            for (h = this.morphNormals[e], o.vertices = this.morphTargets[e].vertices, o.computeFaceNormals(), o.computeVertexNormals(), r = 0, i = this.faces.length; i > r; r++) n = this.faces[r],
            a = h.faceNormals[r],
            s = h.vertexNormals[r],
            a.copy(n.normal),
            s.a.copy(n.vertexNormals[0]),
            s.b.copy(n.vertexNormals[1]),
            s.c.copy(n.vertexNormals[2])
        }
        for (r = 0, i = this.faces.length; i > r; r++) n = this.faces[r],
        n.normal = n.__originalFaceNormal,
        n.vertexNormals = n.__originalVertexNormals
    },
    computeTangents: function() {
        console.warn("THREE.Geometry: .computeTangents() has been removed.")
    },
    computeLineDistances: function() {
        for (var e = 0,
        t = this.vertices,
        r = 0,
        i = t.length; i > r; r++) r > 0 && (e += t[r].distanceTo(t[r - 1])),
        this.lineDistances[r] = e
    },
    computeBoundingBox: function() {
        null === this.boundingBox && (this.boundingBox = new THREE.Box3),
        this.boundingBox.setFromPoints(this.vertices)
    },
    computeBoundingSphere: function() {
        null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere),
        this.boundingSphere.setFromPoints(this.vertices)
    },
    merge: function(e, t, r) {
        if (!1 == e instanceof THREE.Geometry) console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", e);
        else {
            var i, n = this.vertices.length,
            o = this.vertices,
            a = e.vertices,
            s = this.faces,
            h = e.faces,
            c = this.faceVertexUvs[0];
            e = e.faceVertexUvs[0],
            void 0 === r && (r = 0),
            void 0 !== t && (i = (new THREE.Matrix3).getNormalMatrix(t));
            for (var l = 0,
            u = a.length; u > l; l++) {
                var p = a[l].clone();
                void 0 !== t && p.applyMatrix4(t),
                o.push(p)
            }
            for (l = 0, u = h.length; u > l; l++) {
                var E, a = h[l],
                d = a.vertexNormals,
                f = a.vertexColors,
                p = new THREE.Face3(a.a + n, a.b + n, a.c + n);
                for (p.normal.copy(a.normal), void 0 !== i && p.normal.applyMatrix3(i).normalize(), t = 0, o = d.length; o > t; t++) E = d[t].clone(),
                void 0 !== i && E.applyMatrix3(i).normalize(),
                p.vertexNormals.push(E);
                for (p.color.copy(a.color), t = 0, o = f.length; o > t; t++) E = f[t],
                p.vertexColors.push(E.clone());
                p.materialIndex = a.materialIndex + r,
                s.push(p)
            }
            for (l = 0, u = e.length; u > l; l++) if (r = e[l], i = [], void 0 !== r) {
                for (t = 0, o = r.length; o > t; t++) i.push(r[t].clone());
                c.push(i)
            }
        }
    },
    mergeMesh: function(e) { ! 1 == e instanceof THREE.Mesh ? console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", e) : (e.matrixAutoUpdate && e.updateMatrix(), this.merge(e.geometry, e.matrix))
    },
    mergeVertices: function() {
        var e, t, r, i = {},
        n = [],
        o = [],
        a = Math.pow(10, 4);
        for (t = 0, r = this.vertices.length; r > t; t++) e = this.vertices[t],
        e = Math.round(e.x * a) + "_" + Math.round(e.y * a) + "_" + Math.round(e.z * a),
        void 0 === i[e] ? (i[e] = t, n.push(this.vertices[t]), o[t] = n.length - 1) : o[t] = o[i[e]];
        for (i = [], t = 0, r = this.faces.length; r > t; t++) for (a = this.faces[t], a.a = o[a.a], a.b = o[a.b], a.c = o[a.c], a = [a.a, a.b, a.c], e = 0; 3 > e; e++) if (a[e] === a[(e + 1) % 3]) {
            i.push(t);
            break
        }
        for (t = i.length - 1; t >= 0; t--) for (a = i[t], this.faces.splice(a, 1), o = 0, r = this.faceVertexUvs.length; r > o; o++) this.faceVertexUvs[o].splice(a, 1);
        return t = this.vertices.length - n.length,
        this.vertices = n,
        t
    },
    sortFacesByMaterialIndex: function() {
        for (var e = this.faces,
        t = e.length,
        r = 0; t > r; r++) e[r]._id = r;
        e.sort(function(e, t) {
            return e.materialIndex - t.materialIndex
        });
        var i, n, o = this.faceVertexUvs[0],
        a = this.faceVertexUvs[1];
        for (o && o.length === t && (i = []), a && a.length === t && (n = []), r = 0; t > r; r++) {
            var s = e[r]._id;
            i && i.push(o[s]),
            n && n.push(a[s])
        }
        i && (this.faceVertexUvs[0] = i),
        n && (this.faceVertexUvs[1] = n)
    },
    toJSON: function() {
        function e(e, t, r) {
            return r ? e | 1 << t: e & ~ (1 << t)
        }

        function t(e) {
            var t = e.x.toString() + e.y.toString() + e.z.toString();
            return void 0 !== c[t] ? c[t] : (c[t] = h.length / 3, h.push(e.x, e.y, e.z), c[t])
        }

        function r(e) {
            var t = e.r.toString() + e.g.toString() + e.b.toString();
            return void 0 !== u[t] ? u[t] : (u[t] = l.length, l.push(e.getHex()), u[t])
        }

        function i(e) {
            var t = e.x.toString() + e.y.toString();
            return void 0 !== E[t] ? E[t] : (E[t] = p.length / 2, p.push(e.x, e.y), E[t])
        }
        var n = {
            metadata: {
                version: 4.4,
                type: "Geometry",
                generator: "Geometry.toJSON"
            }
        };
        if (n.uuid = this.uuid, n.type = this.type, "" !== this.name && (n.name = this.name), void 0 !== this.parameters) {
            var o, a = this.parameters;
            for (o in a) void 0 !== a[o] && (n[o] = a[o]);
            return n
        }
        for (a = [], o = 0; o < this.vertices.length; o++) {
            var s = this.vertices[o];
            a.push(s.x, s.y, s.z)
        }
        var s = [],
        h = [],
        c = {},
        l = [],
        u = {},
        p = [],
        E = {};
        for (o = 0; o < this.faces.length; o++) {
            var d = this.faces[o],
            f = void 0 !== this.faceVertexUvs[0][o],
            m = 0 < d.normal.length(),
            T = 0 < d.vertexNormals.length,
            v = 1 !== d.color.r || 1 !== d.color.g || 1 !== d.color.b,
            g = 0 < d.vertexColors.length,
            y = 0,
            y = e(y, 0, 0),
            y = e(y, 1, !1),
            y = e(y, 2, !1),
            y = e(y, 3, f),
            y = e(y, 4, m),
            y = e(y, 5, T),
            y = e(y, 6, v),
            y = e(y, 7, g);
            s.push(y),
            s.push(d.a, d.b, d.c),
            f && (f = this.faceVertexUvs[0][o], s.push(i(f[0]), i(f[1]), i(f[2]))),
            m && s.push(t(d.normal)),
            T && (m = d.vertexNormals, s.push(t(m[0]), t(m[1]), t(m[2]))),
            v && s.push(r(d.color)),
            g && (d = d.vertexColors, s.push(r(d[0]), r(d[1]), r(d[2])))
        }
        return n.data = {},
        n.data.vertices = a,
        n.data.normals = h,
        0 < l.length && (n.data.colors = l),
        0 < p.length && (n.data.uvs = [p]),
        n.data.faces = s,
        n
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        this.vertices = [],
        this.faces = [],
        this.faceVertexUvs = [[]];
        for (var t = e.vertices,
        r = 0,
        i = t.length; i > r; r++) this.vertices.push(t[r].clone());
        for (t = e.faces, r = 0, i = t.length; i > r; r++) this.faces.push(t[r].clone());
        for (r = 0, i = e.faceVertexUvs.length; i > r; r++) {
            t = e.faceVertexUvs[r],
            void 0 === this.faceVertexUvs[r] && (this.faceVertexUvs[r] = []);
            for (var n = 0,
            o = t.length; o > n; n++) {
                for (var a = t[n], s = [], h = 0, c = a.length; c > h; h++) s.push(a[h].clone());
                this.faceVertexUvs[r].push(s)
            }
        }
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype),
THREE.GeometryIdCount = 0,
THREE.DirectGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "DirectGeometry",
    this.indices = [],
    this.vertices = [],
    this.normals = [],
    this.colors = [],
    this.uvs = [],
    this.uvs2 = [],
    this.groups = [],
    this.morphTargets = {},
    this.skinWeights = [],
    this.skinIndices = [],
    this.boundingSphere = this.boundingBox = null,
    this.groupsNeedUpdate = this.uvsNeedUpdate = this.colorsNeedUpdate = this.normalsNeedUpdate = this.verticesNeedUpdate = !1
},
THREE.DirectGeometry.prototype = {
    constructor: THREE.DirectGeometry,
    computeBoundingBox: THREE.Geometry.prototype.computeBoundingBox,
    computeBoundingSphere: THREE.Geometry.prototype.computeBoundingSphere,
    computeFaceNormals: function() {
        console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.")
    },
    computeVertexNormals: function() {
        console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.")
    },
    computeGroups: function(e) {
        var t, r, i = [];
        e = e.faces;
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.materialIndex !== r && (r = o.materialIndex, void 0 !== t && (t.count = 3 * n - t.start, i.push(t)), t = {
                start: 3 * n,
                materialIndex: r
            })
        }
        void 0 !== t && (t.count = 3 * n - t.start, i.push(t)),
        this.groups = i
    },
    fromGeometry: function(e) {
        var t = e.faces,
        r = e.vertices,
        i = e.faceVertexUvs,
        n = i[0] && 0 < i[0].length,
        o = i[1] && 0 < i[1].length,
        a = e.morphTargets,
        s = a.length;
        if (s > 0) {
            for (var h = [], c = 0; s > c; c++) h[c] = [];
            this.morphTargets.position = h
        }
        var l = e.morphNormals,
        u = l.length;
        if (u > 0) {
            for (var p = [], c = 0; u > c; c++) p[c] = [];
            this.morphTargets.normal = p
        }
        for (var E = e.skinIndices,
        d = e.skinWeights,
        f = E.length === r.length,
        m = d.length === r.length,
        c = 0; c < t.length; c++) {
            var T = t[c];
            this.vertices.push(r[T.a], r[T.b], r[T.c]);
            var v = T.vertexNormals;
            for (3 === v.length ? this.normals.push(v[0], v[1], v[2]) : (v = T.normal, this.normals.push(v, v, v)), v = T.vertexColors, 3 === v.length ? this.colors.push(v[0], v[1], v[2]) : (v = T.color, this.colors.push(v, v, v)), !0 === n && (v = i[0][c], void 0 !== v ? this.uvs.push(v[0], v[1], v[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", c), this.uvs.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))), !0 === o && (v = i[1][c], void 0 !== v ? this.uvs2.push(v[0], v[1], v[2]) : (console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", c), this.uvs2.push(new THREE.Vector2, new THREE.Vector2, new THREE.Vector2))), v = 0; s > v; v++) {
                var g = a[v].vertices;
                h[v].push(g[T.a], g[T.b], g[T.c])
            }
            for (v = 0; u > v; v++) g = l[v].vertexNormals[c],
            p[v].push(g.a, g.b, g.c);
            f && this.skinIndices.push(E[T.a], E[T.b], E[T.c]),
            m && this.skinWeights.push(d[T.a], d[T.b], d[T.c])
        }
        return this.computeGroups(e),
        this.verticesNeedUpdate = e.verticesNeedUpdate,
        this.normalsNeedUpdate = e.normalsNeedUpdate,
        this.colorsNeedUpdate = e.colorsNeedUpdate,
        this.uvsNeedUpdate = e.uvsNeedUpdate,
        this.groupsNeedUpdate = e.groupsNeedUpdate,
        this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.DirectGeometry.prototype),
THREE.BufferGeometry = function() {
    Object.defineProperty(this, "id", {
        value: THREE.GeometryIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "BufferGeometry",
    this.index = null,
    this.attributes = {},
    this.morphAttributes = {},
    this.groups = [],
    this.boundingSphere = this.boundingBox = null,
    this.drawRange = {
        start: 0,
        count: 1 / 0
    }
},
THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry,
    addIndex: function(e) {
        console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),
        this.setIndex(e)
    },
    getIndex: function() {
        return this.index
    },
    setIndex: function(e) {
        this.index = e
    },
    addAttribute: function(e, t, r) { ! 1 == t instanceof THREE.BufferAttribute && !1 == t instanceof THREE.InterleavedBufferAttribute ? (console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."), this.addAttribute(e, new THREE.BufferAttribute(t, r))) : "index" === e ? (console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."), this.setIndex(t)) : this.attributes[e] = t
    },
    getAttribute: function(e) {
        return this.attributes[e]
    },
    removeAttribute: function(e) {
        delete this.attributes[e]
    },
    get drawcalls() {
        return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),
        this.groups
    },
    get offsets() {
        return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),
        this.groups
    },
    addDrawCall: function(e, t, r) {
        void 0 !== r && console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),
        console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),
        this.addGroup(e, t)
    },
    clearDrawCalls: function() {
        console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),
        this.clearGroups()
    },
    addGroup: function(e, t, r) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: void 0 !== r ? r: 0
        })
    },
    clearGroups: function() {
        this.groups = []
    },
    setDrawRange: function(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    },
    applyMatrix: function(e) {
        var t = this.attributes.position;
        void 0 !== t && (e.applyToVector3Array(t.array), t.needsUpdate = !0),
        t = this.attributes.normal,
        void 0 !== t && ((new THREE.Matrix3).getNormalMatrix(e).applyToVector3Array(t.array), t.needsUpdate = !0),
        null !== this.boundingBox && this.computeBoundingBox(),
        null !== this.boundingSphere && this.computeBoundingSphere()
    },

    rotateX: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationX(t),
            this.applyMatrix(e),
            this
        }
    } (),
    rotateY: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationY(t),
            this.applyMatrix(e),
            this
        }
    } (),
    rotateZ: function() {
        var e;
        return function(t) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeRotationZ(t),
            this.applyMatrix(e),
            this
        }
    } (),
    translate: function() {
        var e;
        return function(t, r, i) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeTranslation(t, r, i),
            this.applyMatrix(e),
            this
        }
    } (),
    scale: function() {
        var e;
        return function(t, r, i) {
            return void 0 === e && (e = new THREE.Matrix4),
            e.makeScale(t, r, i),
            this.applyMatrix(e),
            this
        }
    } (),
    lookAt: function() {
        var e;
        return function(t) {
            void 0 === e && (e = new THREE.Object3D),
            e.lookAt(t),
            e.updateMatrix(),
            this.applyMatrix(e.matrix)
        }
    } (),
    center: function() {
        this.computeBoundingBox();
        var e = this.boundingBox.center().negate();
        return this.translate(e.x, e.y, e.z),
        e
    },
    setFromObject: function(e) {
        var t = e.geometry;
        if (e instanceof THREE.Points || e instanceof THREE.Line) {
            e = new THREE.Float32Attribute(3 * t.vertices.length, 3);
            var r = new THREE.Float32Attribute(3 * t.colors.length, 3);
            this.addAttribute("position", e.copyVector3sArray(t.vertices)),
            this.addAttribute("color", r.copyColorsArray(t.colors)),
            t.lineDistances && t.lineDistances.length === t.vertices.length && (e = new THREE.Float32Attribute(t.lineDistances.length, 1), this.addAttribute("lineDistance", e.copyArray(t.lineDistances))),
            null !== t.boundingSphere && (this.boundingSphere = t.boundingSphere.clone()),
            null !== t.boundingBox && (this.boundingBox = t.boundingBox.clone())
        } else e instanceof THREE.Mesh && t instanceof THREE.Geometry && this.fromGeometry(t);
        return this
    },
    updateFromObject: function(e) {
        var t = e.geometry;
        if (e instanceof THREE.Mesh) {
            var r = t.__directGeometry;
            if (void 0 === r) return this.fromGeometry(t);
            r.verticesNeedUpdate = t.verticesNeedUpdate,
            r.normalsNeedUpdate = t.normalsNeedUpdate,
            r.colorsNeedUpdate = t.colorsNeedUpdate,
            r.uvsNeedUpdate = t.uvsNeedUpdate,
            r.groupsNeedUpdate = t.groupsNeedUpdate,
            t.verticesNeedUpdate = !1,
            t.normalsNeedUpdate = !1,
            t.colorsNeedUpdate = !1,
            t.uvsNeedUpdate = !1,
            t.groupsNeedUpdate = !1,
            t = r
        }
        return ! 0 === t.verticesNeedUpdate && (r = this.attributes.position, void 0 !== r && (r.copyVector3sArray(t.vertices), r.needsUpdate = !0), t.verticesNeedUpdate = !1),
        !0 === t.normalsNeedUpdate && (r = this.attributes.normal, void 0 !== r && (r.copyVector3sArray(t.normals), r.needsUpdate = !0), t.normalsNeedUpdate = !1),
        !0 === t.colorsNeedUpdate && (r = this.attributes.color, void 0 !== r && (r.copyColorsArray(t.colors), r.needsUpdate = !0), t.colorsNeedUpdate = !1),
        t.uvsNeedUpdate && (r = this.attributes.uv, void 0 !== r && (r.copyVector2sArray(t.uvs), r.needsUpdate = !0), t.uvsNeedUpdate = !1),
        t.lineDistancesNeedUpdate && (r = this.attributes.lineDistance, void 0 !== r && (r.copyArray(t.lineDistances), r.needsUpdate = !0), t.lineDistancesNeedUpdate = !1),
        t.groupsNeedUpdate && (t.computeGroups(e.geometry), this.groups = t.groups, t.groupsNeedUpdate = !1),
        this
    },
    fromGeometry: function(e) {
        return e.__directGeometry = (new THREE.DirectGeometry).fromGeometry(e),
        this.fromDirectGeometry(e.__directGeometry)
    },
    fromDirectGeometry: function(e) {
        var t = new Float32Array(3 * e.vertices.length);
        this.addAttribute("position", new THREE.BufferAttribute(t, 3).copyVector3sArray(e.vertices)),
        0 < e.normals.length && (t = new Float32Array(3 * e.normals.length), this.addAttribute("normal", new THREE.BufferAttribute(t, 3).copyVector3sArray(e.normals))),
        0 < e.colors.length && (t = new Float32Array(3 * e.colors.length), this.addAttribute("color", new THREE.BufferAttribute(t, 3).copyColorsArray(e.colors))),
        0 < e.uvs.length && (t = new Float32Array(2 * e.uvs.length), this.addAttribute("uv", new THREE.BufferAttribute(t, 2).copyVector2sArray(e.uvs))),
        0 < e.uvs2.length && (t = new Float32Array(2 * e.uvs2.length), this.addAttribute("uv2", new THREE.BufferAttribute(t, 2).copyVector2sArray(e.uvs2))),
        0 < e.indices.length && (t = new(65535 < e.vertices.length ? Uint32Array: Uint16Array)(3 * e.indices.length), this.setIndex(new THREE.BufferAttribute(t, 1).copyIndicesArray(e.indices))),
        this.groups = e.groups;
        for (var r in e.morphTargets) {
            for (var t = [], i = e.morphTargets[r], n = 0, o = i.length; o > n; n++) {
                var a = i[n],
                s = new THREE.Float32Attribute(3 * a.length, 3);
                t.push(s.copyVector3sArray(a))
            }
            this.morphAttributes[r] = t
        }
        return 0 < e.skinIndices.length && (r = new THREE.Float32Attribute(4 * e.skinIndices.length, 4), this.addAttribute("skinIndex", r.copyVector4sArray(e.skinIndices))),
        0 < e.skinWeights.length && (r = new THREE.Float32Attribute(4 * e.skinWeights.length, 4), this.addAttribute("skinWeight", r.copyVector4sArray(e.skinWeights))),
        null !== e.boundingSphere && (this.boundingSphere = e.boundingSphere.clone()),
        null !== e.boundingBox && (this.boundingBox = e.boundingBox.clone()),
        this
    },
    computeBoundingBox: function() {
        var e = new THREE.Vector3;
        return function() {
            null === this.boundingBox && (this.boundingBox = new THREE.Box3);
            var t = this.attributes.position.array;
            if (t) {
                var r = this.boundingBox;
                r.makeEmpty();
                for (var i = 0,
                n = t.length; n > i; i += 3) e.fromArray(t, i),
                r.expandByPoint(e)
            } (void 0 === t || 0 === t.length) && (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0)),
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
    } (),
    computeBoundingSphere: function() {
        var e = new THREE.Box3,
        t = new THREE.Vector3;
        return function() {
            null === this.boundingSphere && (this.boundingSphere = new THREE.Sphere);
            var r = this.attributes.position.array;
            if (r) {
                e.makeEmpty();
                for (var i = this.boundingSphere.center,
                n = 0,
                o = r.length; o > n; n += 3) t.fromArray(r, n),
                e.expandByPoint(t);
                e.center(i);
                for (var a = 0,
                n = 0,
                o = r.length; o > n; n += 3) t.fromArray(r, n),
                a = Math.max(a, i.distanceToSquared(t));
                this.boundingSphere.radius = Math.sqrt(a),
                isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
    } (),
    computeFaceNormals: function() {},
    computeVertexNormals: function() {
        var e = this.index,
        t = this.attributes,
        r = this.groups;
        if (t.position) {
            var i = t.position.array;
            if (void 0 === t.normal) this.addAttribute("normal", new THREE.BufferAttribute(new Float32Array(i.length), 3));
            else for (var n = t.normal.array,
            o = 0,
            a = n.length; a > o; o++) n[o] = 0;
            var s, h, c, n = t.normal.array,
            l = new THREE.Vector3,
            u = new THREE.Vector3,
            p = new THREE.Vector3,
            E = new THREE.Vector3,
            d = new THREE.Vector3;
            if (e) {
                e = e.array,
                0 === r.length && this.addGroup(0, e.length);
                for (var f = 0,
                m = r.length; m > f; ++f) for (o = r[f], a = o.start, s = o.count, o = a, a += s; a > o; o += 3) s = 3 * e[o + 0],
                h = 3 * e[o + 1],
                c = 3 * e[o + 2],
                l.fromArray(i, s),
                u.fromArray(i, h),
                p.fromArray(i, c),
                E.subVectors(p, u),
                d.subVectors(l, u),
                E.cross(d),
                n[s] += E.x,
                n[s + 1] += E.y,
                n[s + 2] += E.z,
                n[h] += E.x,
                n[h + 1] += E.y,
                n[h + 2] += E.z,
                n[c] += E.x,
                n[c + 1] += E.y,
                n[c + 2] += E.z
            } else for (o = 0, a = i.length; a > o; o += 9) l.fromArray(i, o),
            u.fromArray(i, o + 3),
            p.fromArray(i, o + 6),
            E.subVectors(p, u),
            d.subVectors(l, u),
            E.cross(d),
            n[o] = E.x,
            n[o + 1] = E.y,
            n[o + 2] = E.z,
            n[o + 3] = E.x,
            n[o + 4] = E.y,
            n[o + 5] = E.z,
            n[o + 6] = E.x,
            n[o + 7] = E.y,
            n[o + 8] = E.z;
            this.normalizeNormals(),
            t.normal.needsUpdate = !0
        }
    },
    computeTangents: function() {
        console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")
    },
    computeOffsets: function(e) {
        console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")
    },
    merge: function(e, t) {
        if (!1 != e instanceof THREE.BufferGeometry) {
            void 0 === t && (t = 0);
            var r, i = this.attributes;
            for (r in i) if (void 0 !== e.attributes[r]) for (var n = i[r].array, o = e.attributes[r], a = o.array, s = 0, o = o.itemSize * t; s < a.length; s++, o++) n[o] = a[s];
            return this
        }
        console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", e)
    },
    normalizeNormals: function() {
        for (var e, t, r, i = this.attributes.normal.array,
        n = 0,
        o = i.length; o > n; n += 3) e = i[n],
        t = i[n + 1],
        r = i[n + 2],
        e = 1 / Math.sqrt(e * e + t * t + r * r),
        i[n] *= e,
        i[n + 1] *= e,
        i[n + 2] *= e
    },
    toJSON: function() {
        var e = {
            metadata: {
                version: 4.4,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid, e.type = this.type, "" !== this.name && (e.name = this.name), void 0 !== this.parameters) {
            var t, r = this.parameters;
            for (t in r) void 0 !== r[t] && (e[t] = r[t]);
            return e
        }
        e.data = {
            attributes: {}
        };
        var i = this.index;
        null !== i && (r = Array.prototype.slice.call(i.array), e.data.index = {
            type: i.array.constructor.name,
            array: r
        }),
        i = this.attributes;
        for (t in i) {
            var n = i[t],
            r = Array.prototype.slice.call(n.array);
            e.data.attributes[t] = {
                itemSize: n.itemSize,
                type: n.array.constructor.name,
                array: r
            }
        }
        return t = this.groups,
        0 < t.length && (e.data.groups = JSON.parse(JSON.stringify(t))),
        t = this.boundingSphere,
        null !== t && (e.data.boundingSphere = {
            center: t.center.toArray(),
            radius: t.radius
        }),
        e
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        var t = e.index;
        null !== t && this.setIndex(t.clone());
        var r, t = e.attributes;
        for (r in t) this.addAttribute(r, t[r].clone());
        for (e = e.groups, r = 0, t = e.length; t > r; r++) {
            var i = e[r];
            this.addGroup(i.start, i.count)
        }
        return this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype),
THREE.BufferGeometry.MaxIndex = 65535,
THREE.InstancedBufferGeometry = function() {
    THREE.BufferGeometry.call(this),
    this.type = "InstancedBufferGeometry",
    this.maxInstancedCount = void 0
},
THREE.InstancedBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.InstancedBufferGeometry.prototype.constructor = THREE.InstancedBufferGeometry,
THREE.InstancedBufferGeometry.prototype.addGroup = function(e, t, r) {
    this.groups.push({
        start: e,
        count: t,
        instances: r
    })
},
THREE.InstancedBufferGeometry.prototype.copy = function(e) {
    var t = e.index;
    null !== t && this.setIndex(t.clone());
    var r, t = e.attributes;
    for (r in t) this.addAttribute(r, t[r].clone());
    for (e = e.groups, r = 0, t = e.length; t > r; r++) {
        var i = e[r];
        this.addGroup(i.start, i.count, i.instances)
    }
    return this
},
THREE.EventDispatcher.prototype.apply(THREE.InstancedBufferGeometry.prototype),
THREE.AnimationAction = function(e, t, r, i, n) {
    if (void 0 === e) throw Error("clip is null");
    this.clip = e,
    this.localRoot = null,
    this.startTime = t || 0,
    this.timeScale = r || 1,
    this.weight = i || 1,
    this.loop = n || THREE.LoopRepeat,
    this.loopCount = 0,
    this.enabled = !0,
    this.actionTime = -this.startTime,
    this.clipTime = 0,
    this.propertyBindings = []
},
THREE.AnimationAction.prototype = {
    constructor: THREE.AnimationAction,
    setLocalRoot: function(e) {
        return this.localRoot = e,
        this
    },
    updateTime: function(e) {
        var t = this.clipTime,
        r = this.loopCount,
        i = this.clip.duration;
        return this.actionTime += e,
        this.loop === THREE.LoopOnce ? (this.loopCount = 0, this.clipTime = Math.min(Math.max(this.actionTime, 0), i), this.clipTime !== t && (this.clipTime === i ? this.mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: 1
        }) : 0 === this.clipTime && this.mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: -1
        })), this.clipTime) : (this.loopCount = Math.floor(this.actionTime / i), e = this.actionTime - this.loopCount * i, e %= i, this.loop == THREE.LoopPingPong && 1 === Math.abs(this.loopCount % 2) && (e = i - e), this.clipTime = e, this.loopCount !== r && this.mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: this.loopCount - this.loopCount
        }), this.clipTime)
    },
    syncWith: function(e) {
        return this.actionTime = e.actionTime,
        this.timeScale = e.timeScale,
        this
    },
    warpToDuration: function(e) {
        return this.timeScale = this.clip.duration / e,
        this
    },
    init: function(e) {
        return this.clipTime = e - this.startTime,
        this
    },
    update: function(e) {
        return this.updateTime(e),
        this.clip.getAt(this.clipTime)
    },
    getTimeScaleAt: function(e) {
        return this.timeScale.getAt ? this.timeScale.getAt(e) : this.timeScale
    },
    getWeightAt: function(e) {
        return this.weight.getAt ? this.weight.getAt(e) : this.weight
    }
},
THREE.AnimationClip = function(e, t, r) {
    if (this.name = e, this.tracks = r, this.duration = void 0 !== t ? t: -1, 0 > this.duration) for (e = 0; e < this.tracks.length; e++) t = this.tracks[e],
    this.duration = Math.max(t.keys[t.keys.length - 1].time);
    this.trim(),
    this.optimize(),
    this.results = []
},
THREE.AnimationClip.prototype = {
    constructor: THREE.AnimationClip,
    getAt: function(e) {
        e = Math.max(0, Math.min(e, this.duration));
        for (var t = 0; t < this.tracks.length; t++) this.results[t] = this.tracks[t].getAt(e);
        return this.results
    },
    trim: function() {
        for (var e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
        return this
    },
    optimize: function() {
        for (var e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
        return this
    }
},
THREE.AnimationClip.CreateFromMorphTargetSequence = function(e, t, r) {
    for (var i = t.length,
    n = [], o = 0; i > o; o++) {
        var a = [];
        a.push({
            time: (o + i - 1) % i,
            value: 0
        }),
        a.push({
            time: o,
            value: 1
        }),
        a.push({
            time: (o + 1) % i,
            value: 0
        }),
        a.sort(THREE.KeyframeTrack.keyComparer),
        0 === a[0].time && a.push({
            time: i,
            value: a[0].value
        }),
        n.push(new THREE.NumberKeyframeTrack(".morphTargetInfluences[" + t[o].name + "]", a).scale(1 / r))
    }
    return new THREE.AnimationClip(e, -1, n)
},
THREE.AnimationClip.findByName = function(e, t) {
    for (var r = 0; r < e.length; r++) if (e[r].name === t) return e[r];
    return null
},
THREE.AnimationClip.CreateClipsFromMorphTargetSequences = function(e, t) {
    for (var r = {},
    i = /^([\w-]*?)([\d]+)$/,
    n = 0,
    o = e.length; o > n; n++) {
        var a = e[n],
        s = a.name.match(i);
        if (s && 1 < s.length) {
            var h = s[1]; (s = r[h]) || (r[h] = s = []),
            s.push(a)
        }
    }
    i = [];
    for (h in r) i.push(THREE.AnimationClip.CreateFromMorphTargetSequence(h, r[h], t));
    return i
},
THREE.AnimationClip.parse = function(e) {
    for (var t = [], r = 0; r < e.tracks.length; r++) t.push(THREE.KeyframeTrack.parse(e.tracks[r]).scale(1 / e.fps));
    return new THREE.AnimationClip(e.name, e.duration, t)
},
THREE.AnimationClip.parseAnimation = function(e, t, r) {
    if (!e) return console.error("  no animation in JSONLoader data"),
    null;
    var i = function(e, t, r, i, n) {
        for (var o = [], a = 0; a < t.length; a++) {
            var s = t[a];
            void 0 !== s[r] && o.push({
                time: s.time,
                value: n(s)
            })
        }
        return 0 < o.length ? new i(e, o) : null
    },
    n = [],
    o = e.name || "default",
    a = e.length || -1,
    s = e.fps || 30;
    e = e.hierarchy || [];
    for (var h = 0; h < e.length; h++) {
        var c = e[h].keys;
        if (c && 0 != c.length) if (c[0].morphTargets) {
            for (var a = {},
            l = 0; l < c.length; l++) if (c[l].morphTargets) for (var u = 0; u < c[l].morphTargets.length; u++) a[c[l].morphTargets[u]] = -1;
            for (var p in a) {
                for (var E = [], u = 0; u < c[l].morphTargets.length; u++) {
                    var d = c[l];
                    E.push({
                        time: d.time,
                        value: d.morphTarget === p ? 1 : 0
                    })
                }
                n.push(new THREE.NumberKeyframeTrack(r + ".morphTargetInfluence[" + p + "]", E))
            }
            a = a.length * (s || 1)
        } else l = r + ".bones[" + t[h].name + "]",
        (u = i(l + ".position", c, "pos", THREE.VectorKeyframeTrack,
        function(e) {
            return (new THREE.Vector3).fromArray(e.pos)
        })) && n.push(u),
        (u = i(l + ".quaternion", c, "rot", THREE.QuaternionKeyframeTrack,
        function(e) {
            return e.rot.slerp ? e.rot.clone() : (new THREE.Quaternion).fromArray(e.rot)
        })) && n.push(u),
        (c = i(l + ".scale", c, "scl", THREE.VectorKeyframeTrack,
        function(e) {
            return (new THREE.Vector3).fromArray(e.scl)
        })) && n.push(c)
    }
    return 0 === n.length ? null: new THREE.AnimationClip(o, a, n)
},
THREE.AnimationMixer = function(e) {
    this.root = e,
    this.time = 0,
    this.timeScale = 1,
    this.actions = [],
    this.propertyBindingMap = {}
},
THREE.AnimationMixer.prototype = {
    constructor: THREE.AnimationMixer,
    addAction: function(e) {
        this.actions.push(e),
        e.init(this.time),
        e.mixer = this;
        for (var t = e.clip.tracks,
        r = e.localRoot || this.root,
        i = 0; i < t.length; i++) {
            var n = t[i],
            o = r.uuid + "-" + n.name,
            a = this.propertyBindingMap[o];
            void 0 === a && (a = new THREE.PropertyBinding(r, n.name), this.propertyBindingMap[o] = a),
            e.propertyBindings.push(a),
            a.referenceCount += 1
        }
    },
    removeAllActions: function() {
        for (var e = 0; e < this.actions.length; e++) this.actions[e].mixer = null;
        for (var t in this.propertyBindingMap) this.propertyBindingMap[t].unbind();
        return this.actions = [],
        this.propertyBindingMap = {},
        this
    },
    removeAction: function(e) {
        var t = this.actions.indexOf(e); - 1 !== t && (this.actions.splice(t, 1), e.mixer = null),
        t = e.localRoot || this.root,
        e = e.clip.tracks;
        for (var r = 0; r < e.length; r++) {
            var i = t.uuid + "-" + e[r].name,
            n = this.propertyBindingMap[i];
            n.referenceCount -= 1,
            0 >= n.referenceCount && (n.unbind(), delete this.propertyBindingMap[i])
        }
        return this
    },
    findActionByName: function(e) {
        for (var t = 0; t < this.actions.length; t++) if (this.actions[t].name === e) return this.actions[t];
        return null
    },
    play: function(e, t) {
        return e.startTime = this.time,
        this.addAction(e),
        this
    },
    fadeOut: function(e, t) {
        var r = [];
        return r.push({
            time: this.time,
            value: 1
        }),
        r.push({
            time: this.time + t,
            value: 0
        }),
        e.weight = new THREE.NumberKeyframeTrack("weight", r),
        this
    },
    fadeIn: function(e, t) {
        var r = [];
        return r.push({
            time: this.time,
            value: 0
        }),
        r.push({
            time: this.time + t,
            value: 1
        }),
        e.weight = new THREE.NumberKeyframeTrack("weight", r),
        this
    },
    warp: function(e, t, r, i) {
        var n = [];
        return n.push({
            time: this.time,
            value: t
        }),
        n.push({
            time: this.time + i,
            value: r
        }),
        e.timeScale = new THREE.NumberKeyframeTrack("timeScale", n),
        this
    },
    crossFade: function(e, t, r, i) {
        if (this.fadeOut(e, r), this.fadeIn(t, r), i) {
            i = e.clip.duration / t.clip.duration;
            var n = 1 / i;
            this.warp(e, 1, i, r),
            this.warp(t, n, 1, r)
        }
        return this
    },
    update: function(e) {
        e *= this.timeScale,
        this.time += e;
        for (var t = 0; t < this.actions.length; t++) {
            var r = this.actions[t],
            i = r.getWeightAt(this.time),
            n = r.getTimeScaleAt(this.time),
            n = r.update(e * n);
            if (! (0 >= r.weight) && r.enabled) for (var o = 0; o < n.length; o++) r.propertyBindings[o].accumulate(n[o], i)
        }
        for (var a in this.propertyBindingMap) this.propertyBindingMap[a].apply();
        return this
    }
},
THREE.EventDispatcher.prototype.apply(THREE.AnimationMixer.prototype),
THREE.AnimationUtils = {
    getEqualsFunc: function(e) {
        return e.equals ?
        function(e, t) {
            return e.equals(t)
        }: function(e, t) {
            return e === t
        }
    },
    clone: function(e) {
        if ("object" == typeof e) {
            if (e.clone) return e.clone();
            console.error("can not figure out how to copy exemplarValue", e)
        }
        return e
    },
    lerp: function(e, t, r, i) {
        return THREE.AnimationUtils.getLerpFunc(e, i)(e, t, r)
    },
    lerp_object: function(e, t, r) {
        return e.lerp(t, r);
    },
    slerp_object: function(e, t, r) {
        return e.slerp(t, r)
    },
    lerp_number: function(e, t, r) {
        return e * (1 - r) + t * r
    },
    lerp_boolean: function(e, t, r) {
        return.5 > r ? e: t
    },
    lerp_boolean_immediate: function(e, t, r) {
        return e
    },
    lerp_string: function(e, t, r) {
        return.5 > r ? e: t
    },
    lerp_string_immediate: function(e, t, r) {
        return e
    },
    getLerpFunc: function(e, t) {
        if (void 0 === e || null === e) throw Error("examplarValue is null");
        switch (typeof e) {
        case "object":
            if (e.lerp) return THREE.AnimationUtils.lerp_object;
            if (e.slerp) return THREE.AnimationUtils.slerp_object;
            break;
        case "number":
            return THREE.AnimationUtils.lerp_number;
        case "boolean":
            return t ? THREE.AnimationUtils.lerp_boolean: THREE.AnimationUtils.lerp_boolean_immediate;
        case "string":
            return t ? THREE.AnimationUtils.lerp_string: THREE.AnimationUtils.lerp_string_immediate
        }
    }
},
THREE.KeyframeTrack = function(e, t) {
    if (void 0 === e) throw Error("track name is undefined");
    if (void 0 === t || 0 === t.length) throw Error("no keys in track named " + e);
    this.name = e,
    this.keys = t,
    this.lastIndex = 0,
    this.validate(),
    this.optimize()
},
THREE.KeyframeTrack.prototype = {
    constructor: THREE.KeyframeTrack,
    getAt: function(e) {
        for (; this.lastIndex < this.keys.length && e >= this.keys[this.lastIndex].time;) this.lastIndex++;
        for (; 0 < this.lastIndex && e < this.keys[this.lastIndex - 1].time;) this.lastIndex--;
        if (this.lastIndex >= this.keys.length) return this.setResult(this.keys[this.keys.length - 1].value),
        this.result;
        if (0 === this.lastIndex) return this.setResult(this.keys[0].value),
        this.result;
        var t = this.keys[this.lastIndex - 1];
        if (this.setResult(t.value), t.constantToNext) return this.result;
        var r = this.keys[this.lastIndex];
        return this.result = this.lerpValues(this.result, r.value, (e - t.time) / (r.time - t.time))
    },
    shift: function(e) {
        if (0 !== e) for (var t = 0; t < this.keys.length; t++) this.keys[t].time += e;
        return this
    },
    scale: function(e) {

        if (1 !== e) for (var t = 0; t < this.keys.length; t++) this.keys[t].time *= e;
        return this
    },
    trim: function(e, t) {
        for (var r = 0,
        i = 1; i < this.keys.length; i++) this.keys[i] <= e && r++;
        for (var n = 0,
        i = this.keys.length - 2; i > 0 && this.keys[i] >= t; i++) n++;
        return r + n > 0 && (this.keys = this.keys.splice(r, this.keys.length - n - r)),
        this
    },
    validate: function() {
        var e = null;
        if (0 !== this.keys.length) {
            for (var t = 0; t < this.keys.length; t++) {
                var r = this.keys[t];
                if (!r) return void console.error("  key is null in track", this, t);
                if ("number" != typeof r.time || isNaN(r.time)) return void console.error("  key.time is not a valid number", this, t, r);
                if (void 0 === r.value || null === r.value) return void console.error("  key.value is null in track", this, t, r);
                if (e && e.time > r.time) return void console.error("  key.time is less than previous key time, out of order keys", this, t, r, e);
                e = r
            }
            return this
        }
        console.error("  track is empty, no keys", this)
    },
    optimize: function() {
        var e = [],
        t = this.keys[0];
        e.push(t),
        THREE.AnimationUtils.getEqualsFunc(t.value);
        for (var r = 1; r < this.keys.length - 1; r++) {
            var i = this.keys[r],
            n = this.keys[r + 1];
            t.time === i.time || this.compareValues(t.value, i.value) && this.compareValues(i.value, n.value) || (t.constantToNext = this.compareValues(t.value, i.value), e.push(i), t = i)
        }
        return e.push(this.keys[this.keys.length - 1]),
        this.keys = e,
        this
    }
},
THREE.KeyframeTrack.keyComparer = function(e, t) {
    return e.time - t.time
},
THREE.KeyframeTrack.parse = function(e) {
    if (void 0 === e.type) throw Error("track type undefined, can not parse");
    return THREE.KeyframeTrack.GetTrackTypeForTypeName(e.type).parse(e)
},
THREE.KeyframeTrack.GetTrackTypeForTypeName = function(e) {
    switch (e.toLowerCase()) {
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
        return THREE.VectorKeyframeTrack;
    case "quaternion":
        return THREE.QuaternionKeyframeTrack;
    case "integer":
    case "scalar":
    case "double":
    case "float":
    case "number":
        return THREE.NumberKeyframeTrack;
    case "bool":
    case "boolean":
        return THREE.BooleanKeyframeTrack;
    case "string":
        return THREE.StringKeyframeTrack
    }
    throw Error("Unsupported typeName: " + e)
},
THREE.PropertyBinding = function(e, t) {
    this.rootNode = e,
    this.trackName = t,
    this.referenceCount = 0,
    this.originalValue = null;
    var r = THREE.PropertyBinding.parseTrackName(t);
    this.directoryName = r.directoryName,
    this.nodeName = r.nodeName,
    this.objectName = r.objectName,
    this.objectIndex = r.objectIndex,
    this.propertyName = r.propertyName,
    this.propertyIndex = r.propertyIndex,
    this.node = THREE.PropertyBinding.findNode(e, this.nodeName) || e,
    this.cumulativeValue = null,
    this.cumulativeWeight = 0
},
THREE.PropertyBinding.prototype = {
    constructor: THREE.PropertyBinding,
    reset: function() {
        this.cumulativeValue = null,
        this.cumulativeWeight = 0
    },
    accumulate: function(e, t) {
        this.isBound || this.bind(),
        0 === this.cumulativeWeight ? t > 0 && (null === this.cumulativeValue && (this.cumulativeValue = THREE.AnimationUtils.clone(e)), this.cumulativeWeight = t) : (this.cumulativeValue = this.lerpValue(this.cumulativeValue, e, t / (this.cumulativeWeight + t)), this.cumulativeWeight += t)
    },
    unbind: function() {
        this.isBound && (this.setValue(this.originalValue), this.triggerDirty = this.equalsValue = this.lerpValue = this.getValue = this.setValue = null, this.isBound = !1)
    },
    bind: function() {
        if (!this.isBound) {
            var e = this.node;
            if (e) {
                if (this.objectName) {
                    if ("materials" === this.objectName) {
                        if (!e.material) return void console.error("  can not bind to material as node does not have a material", this);
                        if (!e.material.materials) return void console.error("  can not bind to material.materials as node.material does not have a materials array", this);
                        e = e.material.materials
                    } else if ("bones" === this.objectName) {
                        if (!e.skeleton) return void console.error("  can not bind to bones as node does not have a skeleton", this);
                        for (var e = e.skeleton.bones,
                        t = 0; t < e.length; t++) if (e[t].name === this.objectIndex) {
                            this.objectIndex = t;
                            break
                        }
                    } else {
                        if (void 0 === e[this.objectName]) return void console.error("  can not bind to objectName of node, undefined", this);
                        e = e[this.objectName]
                    }
                    if (void 0 !== this.objectIndex) {
                        if (void 0 === e[this.objectIndex]) return void console.error("  trying to bind to objectIndex of objectName, but is undefined:", this, e);
                        e = e[this.objectIndex]
                    }
                }
                var r = e[this.propertyName];
                if (r) {
                    if (void 0 !== this.propertyIndex) {
                        if ("morphTargetInfluences" === this.propertyName) for (e.geometry || console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry", this), e.geometry.morphTargets || console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets", this), t = 0; t < this.node.geometry.morphTargets.length; t++) if (e.geometry.morphTargets[t].name === this.propertyIndex) {
                            this.propertyIndex = t;
                            break
                        }
                        this.setValue = function(e) {
                            return this.equalsValue(r[this.propertyIndex], e) ? !1 : (r[this.propertyIndex] = e, !0)
                        },
                        this.getValue = function() {
                            return r[this.propertyIndex]
                        }
                    } else r.copy ? (this.setValue = function(e) {
                        return this.equalsValue(r, e) ? !1 : (r.copy(e), !0)
                    },
                    this.getValue = function() {
                        return r
                    }) : (this.setValue = function(t) {
                        return this.equalsValue(e[this.propertyName], t) ? !1 : (e[this.propertyName] = t, !0)
                    },
                    this.getValue = function() {
                        return e[this.propertyName]
                    });
                    void 0 !== e.needsUpdate ? this.triggerDirty = function() {
                        this.node.needsUpdate = !0
                    }: void 0 !== e.matrixWorldNeedsUpdate && (this.triggerDirty = function() {
                        e.matrixWorldNeedsUpdate = !0
                    }),
                    this.originalValue = this.getValue(),
                    this.equalsValue = THREE.AnimationUtils.getEqualsFunc(this.originalValue),
                    this.lerpValue = THREE.AnimationUtils.getLerpFunc(this.originalValue, !0),
                    this.isBound = !0
                } else console.error("  trying to update property for track: " + this.nodeName + "." + this.propertyName + " but it wasn't found.", e)
            } else console.error("  trying to update node for track: " + this.trackName + " but it wasn't found.")
        }
    },
    apply: function() {
        if (this.isBound || this.bind(), 0 < this.cumulativeWeight) {
            if (1 > this.cumulativeWeight) {
                var e = 1 - this.cumulativeWeight;
                this.cumulativeValue = this.lerpValue(this.cumulativeValue, this.originalValue, e / (this.cumulativeWeight + e))
            }
            this.setValue(this.cumulativeValue) && this.triggerDirty && this.triggerDirty(),
            this.cumulativeValue = null,
            this.cumulativeWeight = 0
        }
    }
},
THREE.PropertyBinding.parseTrackName = function(e) {
    var t = /^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_. ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/,
    r = t.exec(e);
    if (!r) throw Error("cannot parse trackName at all: " + e);
    if (r.index === t.lastIndex && t.lastIndex++, t = {
        directoryName: r[1],
        nodeName: r[3],
        objectName: r[5],
        objectIndex: r[7],
        propertyName: r[9],
        propertyIndex: r[11]
    },
    null === t.propertyName || 0 === t.propertyName.length) throw Error("can not parse propertyName from trackName: " + e);
    return t
},
THREE.PropertyBinding.findNode = function(e, t) {
    function r(e) {
        for (var r = 0; r < e.bones.length; r++) {
            var i = e.bones[r];
            if (i.name === t) return i
        }
        return null
    }

    function i(e) {
        for (var r = 0; r < e.length; r++) {
            var n = e[r];
            if (n.name === t || n.uuid === t || (n = i(n.children))) return n
        }
        return null
    }
    if (!t || "" === t || "root" === t || "." === t || -1 === t || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
        var n = r(e.skeleton);
        if (n) return n
    }
    return e.children && (n = i(e.children)) ? n: null
},
THREE.VectorKeyframeTrack = function(e, t) {
    THREE.KeyframeTrack.call(this, e, t),
    this.result = this.keys[0].value.clone()
},
THREE.VectorKeyframeTrack.prototype = Object.create(THREE.KeyframeTrack.prototype),
THREE.VectorKeyframeTrack.prototype.constructor = THREE.VectorKeyframeTrack,
THREE.VectorKeyframeTrack.prototype.setResult = function(e) {
    this.result.copy(e)
},
THREE.VectorKeyframeTrack.prototype.lerpValues = function(e, t, r) {
    return e.lerp(t, r)
},
THREE.VectorKeyframeTrack.prototype.compareValues = function(e, t) {
    return e.equals(t)
},
THREE.VectorKeyframeTrack.prototype.clone = function() {
    for (var e = [], t = 0; t < this.keys.length; t++) {
        var r = this.keys[t];
        e.push({
            time: r.time,
            value: r.value.clone()
        })
    }
    return new THREE.VectorKeyframeTrack(this.name, e)
},
THREE.VectorKeyframeTrack.parse = function(e) {
    for (var t = THREE["Vector" + e.keys[0].value.length], r = [], i = 0; i < e.keys.length; i++) {
        var n = e.keys[i];
        r.push({
            value: (new t).fromArray(n.value),
            time: n.time
        })
    }
    return new THREE.VectorKeyframeTrack(e.name, r)
},
THREE.QuaternionKeyframeTrack = function(e, t) {
    THREE.KeyframeTrack.call(this, e, t),
    this.result = this.keys[0].value.clone()
},
THREE.QuaternionKeyframeTrack.prototype = Object.create(THREE.KeyframeTrack.prototype),
THREE.QuaternionKeyframeTrack.prototype.constructor = THREE.QuaternionKeyframeTrack,
THREE.QuaternionKeyframeTrack.prototype.setResult = function(e) {
    this.result.copy(e)
},
THREE.QuaternionKeyframeTrack.prototype.lerpValues = function(e, t, r) {
    return e.slerp(t, r)
},
THREE.QuaternionKeyframeTrack.prototype.compareValues = function(e, t) {
    return e.equals(t)
},
THREE.QuaternionKeyframeTrack.prototype.multiply = function(e) {
    for (var t = 0; t < this.keys.length; t++) this.keys[t].value.multiply(e);
    return this
},
THREE.QuaternionKeyframeTrack.prototype.clone = function() {
    for (var e = [], t = 0; t < this.keys.length; t++) {
        var r = this.keys[t];
        e.push({
            time: r.time,
            value: r.value.clone()
        })
    }
    return new THREE.QuaternionKeyframeTrack(this.name, e)
},
THREE.QuaternionKeyframeTrack.parse = function(e) {
    for (var t = [], r = 0; r < e.keys.length; r++) {
        var i = e.keys[r];
        t.push({
            value: (new THREE.Quaternion).fromArray(i.value),
            time: i.time
        })
    }
    return new THREE.QuaternionKeyframeTrack(e.name, t)
},
THREE.StringKeyframeTrack = function(e, t) {
    THREE.KeyframeTrack.call(this, e, t),
    this.result = this.keys[0].value
},
THREE.StringKeyframeTrack.prototype = Object.create(THREE.KeyframeTrack.prototype),
THREE.StringKeyframeTrack.prototype.constructor = THREE.StringKeyframeTrack,
THREE.StringKeyframeTrack.prototype.setResult = function(e) {
    this.result = e
},
THREE.StringKeyframeTrack.prototype.lerpValues = function(e, t, r) {
    return 1 > r ? e: t
},
THREE.StringKeyframeTrack.prototype.compareValues = function(e, t) {
    return e === t
},
THREE.StringKeyframeTrack.prototype.clone = function() {
    for (var e = [], t = 0; t < this.keys.length; t++) {
        var r = this.keys[t];
        e.push({
            time: r.time,
            value: r.value
        })
    }
    return new THREE.StringKeyframeTrack(this.name, e)
},
THREE.StringKeyframeTrack.parse = function(e) {
    return new THREE.StringKeyframeTrack(e.name, e.keys)
},
THREE.BooleanKeyframeTrack = function(e, t) {
    THREE.KeyframeTrack.call(this, e, t),
    this.result = this.keys[0].value
},
THREE.BooleanKeyframeTrack.prototype = Object.create(THREE.KeyframeTrack.prototype),
THREE.BooleanKeyframeTrack.prototype.constructor = THREE.BooleanKeyframeTrack,
THREE.BooleanKeyframeTrack.prototype.setResult = function(e) {
    this.result = e
},
THREE.BooleanKeyframeTrack.prototype.lerpValues = function(e, t, r) {
    return 1 > r ? e: t
},
THREE.BooleanKeyframeTrack.prototype.compareValues = function(e, t) {
    return e === t
},
THREE.BooleanKeyframeTrack.prototype.clone = function() {
    for (var e = [], t = 0; t < this.keys.length; t++) {
        var r = this.keys[t];
        e.push({
            time: r.time,
            value: r.value
        })
    }
    return new THREE.BooleanKeyframeTrack(this.name, e)
},
THREE.BooleanKeyframeTrack.parse = function(e) {
    return new THREE.BooleanKeyframeTrack(e.name, e.keys)
},
THREE.NumberKeyframeTrack = function(e, t) {
    THREE.KeyframeTrack.call(this, e, t),
    this.result = this.keys[0].value
},
THREE.NumberKeyframeTrack.prototype = Object.create(THREE.KeyframeTrack.prototype),
THREE.NumberKeyframeTrack.prototype.constructor = THREE.NumberKeyframeTrack,
THREE.NumberKeyframeTrack.prototype.setResult = function(e) {
    this.result = e
},
THREE.NumberKeyframeTrack.prototype.lerpValues = function(e, t, r) {
    return e * (1 - r) + t * r
},
THREE.NumberKeyframeTrack.prototype.compareValues = function(e, t) {
    return e === t
},
THREE.NumberKeyframeTrack.prototype.clone = function() {
    for (var e = [], t = 0; t < this.keys.length; t++) {
        var r = this.keys[t];
        e.push({
            time: r.time,
            value: r.value
        })
    }
    return new THREE.NumberKeyframeTrack(this.name, e)
},
THREE.NumberKeyframeTrack.parse = function(e) {
    return new THREE.NumberKeyframeTrack(e.name, e.keys)
},
THREE.Camera = function() {
    THREE.Object3D.call(this),
    this.type = "Camera",
    this.matrixWorldInverse = new THREE.Matrix4,
    this.projectionMatrix = new THREE.Matrix4
},
THREE.Camera.prototype = Object.create(THREE.Object3D.prototype),
THREE.Camera.prototype.constructor = THREE.Camera,
THREE.Camera.prototype.getWorldDirection = function() {
    var e = new THREE.Quaternion;
    return function(t) {
        return t = t || new THREE.Vector3,
        this.getWorldQuaternion(e),
        t.set(0, 0, -1).applyQuaternion(e)
    }
} (),
THREE.Camera.prototype.lookAt = function() {
    var e = new THREE.Matrix4;
    return function(t) {
        e.lookAt(this.position, t, this.up),
        this.quaternion.setFromRotationMatrix(e)
    }
} (),
THREE.Camera.prototype.clone = function() {
    return (new this.constructor).copy(this)
},
THREE.Camera.prototype.copy = function(e) {
    return THREE.Object3D.prototype.copy.call(this, e),
    this.matrixWorldInverse.copy(e.matrixWorldInverse),
    this.projectionMatrix.copy(e.projectionMatrix),
    this
},
THREE.CubeCamera = function(e, t, r) {
    THREE.Object3D.call(this),
    this.type = "CubeCamera";
    var i = new THREE.PerspectiveCamera(90, 1, e, t);
    i.up.set(0, -1, 0),
    i.lookAt(new THREE.Vector3(1, 0, 0)),
    this.add(i);
    var n = new THREE.PerspectiveCamera(90, 1, e, t);
    n.up.set(0, -1, 0),
    n.lookAt(new THREE.Vector3( - 1, 0, 0)),
    this.add(n);
    var o = new THREE.PerspectiveCamera(90, 1, e, t);
    o.up.set(0, 0, 1),
    o.lookAt(new THREE.Vector3(0, 1, 0)),
    this.add(o);
    var a = new THREE.PerspectiveCamera(90, 1, e, t);
    a.up.set(0, 0, -1),
    a.lookAt(new THREE.Vector3(0, -1, 0)),
    this.add(a);
    var s = new THREE.PerspectiveCamera(90, 1, e, t);
    s.up.set(0, -1, 0),
    s.lookAt(new THREE.Vector3(0, 0, 1)),
    this.add(s);
    var h = new THREE.PerspectiveCamera(90, 1, e, t);
    h.up.set(0, -1, 0),
    h.lookAt(new THREE.Vector3(0, 0, -1)),
    this.add(h),
    this.renderTarget = new THREE.WebGLRenderTargetCube(r, r, {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter
    }),
    this.updateCubeMap = function(e, t) {
        null === this.parent && this.updateMatrixWorld();
        var r = this.renderTarget,
        c = r.texture.generateMipmaps;
        r.texture.generateMipmaps = !1,
        r.activeCubeFace = 0,
        e.render(t, i, r),
        r.activeCubeFace = 1,
        e.render(t, n, r),
        r.activeCubeFace = 2,
        e.render(t, o, r),
        r.activeCubeFace = 3,
        e.render(t, a, r),
        r.activeCubeFace = 4,
        e.render(t, s, r),
        r.texture.generateMipmaps = c,
        r.activeCubeFace = 5,
        e.render(t, h, r),
        e.setRenderTarget(null)
    }
},
THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype),
THREE.CubeCamera.prototype.constructor = THREE.CubeCamera,
THREE.OrthographicCamera = function(e, t, r, i, n, o) {
    THREE.Camera.call(this),
    this.type = "OrthographicCamera",
    this.zoom = 1,
    this.left = e,
    this.right = t,
    this.top = r,
    this.bottom = i,
    this.near = void 0 !== n ? n: .1,
    this.far = void 0 !== o ? o: 2e3,
    this.updateProjectionMatrix()
},
THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype),
THREE.OrthographicCamera.prototype.constructor = THREE.OrthographicCamera,
THREE.OrthographicCamera.prototype.updateProjectionMatrix = function() {
    var e = (this.right - this.left) / (2 * this.zoom),
    t = (this.top - this.bottom) / (2 * this.zoom),
    r = (this.right + this.left) / 2,
    i = (this.top + this.bottom) / 2;
    this.projectionMatrix.makeOrthographic(r - e, r + e, i + t, i - t, this.near, this.far)
},
THREE.OrthographicCamera.prototype.copy = function(e) {
    return THREE.Camera.prototype.copy.call(this, e),
    this.left = e.left,
    this.right = e.right,
    this.top = e.top,
    this.bottom = e.bottom,
    this.near = e.near,
    this.far = e.far,
    this.zoom = e.zoom,
    this
},
THREE.OrthographicCamera.prototype.toJSON = function(e) {
    return e = THREE.Object3D.prototype.toJSON.call(this, e),
    e.object.zoom = this.zoom,
    e.object.left = this.left,
    e.object.right = this.right,
    e.object.top = this.top,
    e.object.bottom = this.bottom,
    e.object.near = this.near,
    e.object.far = this.far,
    e
},
THREE.PerspectiveCamera = function(e, t, r, i) {
    THREE.Camera.call(this),
    this.type = "PerspectiveCamera",
    this.zoom = 1,
    this.fov = void 0 !== e ? e: 50,
    this.aspect = void 0 !== t ? t: 1,
    this.near = void 0 !== r ? r: .1,
    this.far = void 0 !== i ? i: 2e3,
    this.updateProjectionMatrix()
},
THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype),
THREE.PerspectiveCamera.prototype.constructor = THREE.PerspectiveCamera,
THREE.PerspectiveCamera.prototype.setLens = function(e, t) {
    void 0 === t && (t = 24),
    this.fov = 2 * THREE.Math.radToDeg(Math.atan(t / (2 * e))),
    this.updateProjectionMatrix()
},
THREE.PerspectiveCamera.prototype.setViewOffset = function(e, t, r, i, n, o) {
    this.fullWidth = e,
    this.fullHeight = t,
    this.x = r,
    this.y = i,
    this.width = n,
    this.height = o,
    this.updateProjectionMatrix()
},
THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function() {
    var e = THREE.Math.radToDeg(2 * Math.atan(Math.tan(.5 * THREE.Math.degToRad(this.fov)) / this.zoom));
    if (this.fullWidth) {
        var t = this.fullWidth / this.fullHeight,
        e = Math.tan(THREE.Math.degToRad(.5 * e)) * this.near,
        r = -e,
        i = t * r,
        t = Math.abs(t * e - i),
        r = Math.abs(e - r);
        this.projectionMatrix.makeFrustum(i + this.x * t / this.fullWidth, i + (this.x + this.width) * t / this.fullWidth, e - (this.y + this.height) * r / this.fullHeight, e - this.y * r / this.fullHeight, this.near, this.far)
    } else this.projectionMatrix.makePerspective(e, this.aspect, this.near, this.far)
},
THREE.PerspectiveCamera.prototype.copy = function(e) {
    return THREE.Camera.prototype.copy.call(this, e),
    this.fov = e.fov,
    this.aspect = e.aspect,
    this.near = e.near,
    this.far = e.far,
    this.zoom = e.zoom,
    this
},
THREE.PerspectiveCamera.prototype.toJSON = function(e) {
    return e = THREE.Object3D.prototype.toJSON.call(this, e),
    e.object.zoom = this.zoom,
    e.object.fov = this.fov,
    e.object.aspect = this.aspect,
    e.object.near = this.near,
    e.object.far = this.far,
    e
},
THREE.Light = function(e) {
    THREE.Object3D.call(this),
    this.type = "Light",
    this.color = new THREE.Color(e),
    this.receiveShadow = void 0
},
THREE.Light.prototype = Object.create(THREE.Object3D.prototype),
THREE.Light.prototype.constructor = THREE.Light,
Object.defineProperties(THREE.Light.prototype, {
    onlyShadow: {
        set: function(e) {
            console.warn("THREE.Light: .onlyShadow has been removed.")
        }
    },
    shadowCameraFov: {
        set: function(e) {
            this.shadow.camera.fov = e
        }
    },
    shadowCameraLeft: {
        set: function(e) {
            this.shadow.camera.left = e
        }
    },
    shadowCameraRight: {
        set: function(e) {
            this.shadow.camera.right = e
        }
    },
    shadowCameraTop: {
        set: function(e) {
            this.shadow.camera.top = e
        }
    },
    shadowCameraBottom: {
        set: function(e) {
            this.shadow.camera.bottom = e
        }
    },
    shadowCameraNear: {
        set: function(e) {
            this.shadow.camera.near = e
        }
    },
    shadowCameraFar: {
        set: function(e) {

            this.shadow.camera.far = e
        }
    },
    shadowCameraVisible: {
        set: function(e) {
            console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow ) instead.")
        }
    },
    shadowBias: {
        set: function(e) {
            this.shadow.bias = e
        }
    },
    shadowDarkness: {
        set: function(e) {
            this.shadow.darkness = e
        }
    },
    shadowMapWidth: {
        set: function(e) {
            this.shadow.mapSize.width = e
        }
    },
    shadowMapHeight: {
        set: function(e) {
            this.shadow.mapSize.height = e
        }
    }
}),
THREE.Light.prototype.copy = function(e) {
    return THREE.Object3D.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this
},
THREE.Light.prototype.toJSON = function(e) {
    return e = THREE.Object3D.prototype.toJSON.call(this, e),
    e.object.color = this.color.getHex(),
    void 0 !== this.groundColor && (e.object.groundColor = this.groundColor.getHex()),
    void 0 !== this.intensity && (e.object.intensity = this.intensity),
    void 0 !== this.distance && (e.object.distance = this.distance),
    void 0 !== this.angle && (e.object.angle = this.angle),
    void 0 !== this.decay && (e.object.decay = this.decay),
    void 0 !== this.exponent && (e.object.exponent = this.exponent),
    e
},
THREE.LightShadow = function(e) {
    this.camera = e,
    this.bias = 0,
    this.darkness = 1,
    this.mapSize = new THREE.Vector2(512, 512),
    this.matrix = this.map = null
},
THREE.LightShadow.prototype = {
    constructor: THREE.LightShadow,
    copy: function(e) {
        this.camera = e.camera.clone(),
        this.bias = e.bias,
        this.darkness = e.darkness,
        this.mapSize.copy(e.mapSize)
    },
    clone: function() {
        return (new this.constructor).copy(this)
    }
},
THREE.AmbientLight = function(e) {
    THREE.Light.call(this, e),
    this.type = "AmbientLight",
    this.castShadow = void 0
},
THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype),
THREE.AmbientLight.prototype.constructor = THREE.AmbientLight,
THREE.DirectionalLight = function(e, t) {
    THREE.Light.call(this, e),
    this.type = "DirectionalLight",
    this.position.set(0, 1, 0),
    this.updateMatrix(),
    this.target = new THREE.Object3D,
    this.intensity = void 0 !== t ? t: 1,
    this.shadow = new THREE.LightShadow(new THREE.OrthographicCamera( - 500, 500, 500, -500, 50, 5e3))
},
THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype),
THREE.DirectionalLight.prototype.constructor = THREE.DirectionalLight,
THREE.DirectionalLight.prototype.copy = function(e) {
    return THREE.Light.prototype.copy.call(this, e),
    this.intensity = e.intensity,
    this.target = e.target.clone(),
    this.shadow = e.shadow.clone(),
    this
},
THREE.HemisphereLight = function(e, t, r) {
    THREE.Light.call(this, e),
    this.type = "HemisphereLight",
    this.castShadow = void 0,
    this.position.set(0, 1, 0),
    this.updateMatrix(),
    this.groundColor = new THREE.Color(t),
    this.intensity = void 0 !== r ? r: 1
},
THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype),
THREE.HemisphereLight.prototype.constructor = THREE.HemisphereLight,
THREE.HemisphereLight.prototype.copy = function(e) {
    return THREE.Light.prototype.copy.call(this, e),
    this.groundColor.copy(e.groundColor),
    this.intensity = e.intensity,
    this
},
THREE.PointLight = function(e, t, r, i) {
    THREE.Light.call(this, e),
    this.type = "PointLight",
    this.intensity = void 0 !== t ? t: 1,
    this.distance = void 0 !== r ? r: 0,
    this.decay = void 0 !== i ? i: 1,
    this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(90, 1, 1, 500))
},
THREE.PointLight.prototype = Object.create(THREE.Light.prototype),
THREE.PointLight.prototype.constructor = THREE.PointLight,
THREE.PointLight.prototype.copy = function(e) {
    return THREE.Light.prototype.copy.call(this, e),
    this.intensity = e.intensity,
    this.distance = e.distance,
    this.decay = e.decay,
    this.shadow = e.shadow.clone(),
    this
},
THREE.SpotLight = function(e, t, r, i, n, o) {
    THREE.Light.call(this, e),
    this.type = "SpotLight",
    this.position.set(0, 1, 0),
    this.updateMatrix(),
    this.target = new THREE.Object3D,
    this.intensity = void 0 !== t ? t: 1,
    this.distance = void 0 !== r ? r: 0,
    this.angle = void 0 !== i ? i: Math.PI / 3,
    this.exponent = void 0 !== n ? n: 10,
    this.decay = void 0 !== o ? o: 1,
    this.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(50, 1, 50, 5e3))
},
THREE.SpotLight.prototype = Object.create(THREE.Light.prototype),
THREE.SpotLight.prototype.constructor = THREE.SpotLight,
THREE.SpotLight.prototype.copy = function(e) {
    return THREE.Light.prototype.copy.call(this, e),
    this.intensity = e.intensity,
    this.distance = e.distance,
    this.angle = e.angle,
    this.exponent = e.exponent,
    this.decay = e.decay,
    this.target = e.target.clone(),
    this.shadow = e.shadow.clone(),
    this
},
THREE.Cache = {
    enabled: !1,
    files: {},
    add: function(e, t) { ! 1 !== this.enabled && (this.files[e] = t)
    },
    get: function(e) {
        return ! 1 !== this.enabled ? this.files[e] : void 0
    },
    remove: function(e) {
        delete this.files[e]
    },
    clear: function() {
        this.files = {}
    }
},
THREE.Loader = function() {
    this.onLoadStart = function() {},
    this.onLoadProgress = function() {},
    this.onLoadComplete = function() {}
},
THREE.Loader.prototype = {
    constructor: THREE.Loader,
    crossOrigin: void 0,
    extractUrlBase: function(e) {
        return e = e.split("/"),
        1 === e.length ? "./": (e.pop(), e.join("/") + "/")
    },
    initMaterials: function(e, t, r) {
        for (var i = [], n = 0; n < e.length; ++n) i[n] = this.createMaterial(e[n], t, r);
        return i
    },
    createMaterial: function() {
        var e, t, r;
        return function(i, n, o) {
            function a(e, r, i, a, s) {
                e = n + e;
                var c = THREE.Loader.Handlers.get(e);
                return null !== c ? e = c.load(e) : (t.setCrossOrigin(o), e = t.load(e)),
                void 0 !== r && (e.repeat.fromArray(r), 1 !== r[0] && (e.wrapS = THREE.RepeatWrapping), 1 !== r[1] && (e.wrapT = THREE.RepeatWrapping)),
                void 0 !== i && e.offset.fromArray(i),
                void 0 !== a && ("repeat" === a[0] && (e.wrapS = THREE.RepeatWrapping), "mirror" === a[0] && (e.wrapS = THREE.MirroredRepeatWrapping), "repeat" === a[1] && (e.wrapT = THREE.RepeatWrapping), "mirror" === a[1] && (e.wrapT = THREE.MirroredRepeatWrapping)),
                void 0 !== s && (e.anisotropy = s),
                r = THREE.Math.generateUUID(),
                h[r] = e,
                r
            }
            void 0 === e && (e = new THREE.Color),
            void 0 === t && (t = new THREE.TextureLoader),
            void 0 === r && (r = new THREE.MaterialLoader);
            var s, h = {},
            c = {
                uuid: THREE.Math.generateUUID(),
                type: "MeshLambertMaterial"
            };
            for (s in i) {
                var l = i[s];
                switch (s) {
                case "DbgColor":
                    c.color = l;
                    break;
                case "DbgIndex":
                case "opticalDensity":
                case "illumination":
                    break;
                case "DbgName":
                    c.name = l;
                    break;
                case "blending":
                    c.blending = THREE[l];
                    break;
                case "colorDiffuse":
                    c.color = e.fromArray(l).getHex();
                    break;
                case "colorSpecular":

                    c.specular = e.fromArray(l).getHex();
                    break;
                case "colorEmissive":
                    c.emissive = e.fromArray(l).getHex();
                    break;
                case "specularCoef":
                    c.shininess = l;
                    break;
                case "shading":
                    "basic" === l.toLowerCase() && (c.type = "MeshBasicMaterial"),
                    "phong" === l.toLowerCase() && (c.type = "MeshPhongMaterial");
                    break;
                case "mapDiffuse":
                    c.map = a(l, i.mapDiffuseRepeat, i.mapDiffuseOffset, i.mapDiffuseWrap, i.mapDiffuseAnisotropy);
                    break;
                case "mapDiffuseRepeat":
                case "mapDiffuseOffset":
                case "mapDiffuseWrap":
                case "mapDiffuseAnisotropy":
                    break;
                case "mapLight":
                    c.lightMap = a(l, i.mapLightRepeat, i.mapLightOffset, i.mapLightWrap, i.mapLightAnisotropy);
                    break;
                case "mapLightRepeat":
                case "mapLightOffset":
                case "mapLightWrap":
                case "mapLightAnisotropy":
                    break;
                case "mapAO":
                    c.aoMap = a(l, i.mapAORepeat, i.mapAOOffset, i.mapAOWrap, i.mapAOAnisotropy);
                    break;
                case "mapAORepeat":
                case "mapAOOffset":
                case "mapAOWrap":
                case "mapAOAnisotropy":
                    break;
                case "mapBump":
                    c.bumpMap = a(l, i.mapBumpRepeat, i.mapBumpOffset, i.mapBumpWrap, i.mapBumpAnisotropy);
                    break;
                case "mapBumpScale":
                    c.bumpScale = l;
                    break;
                case "mapBumpRepeat":
                case "mapBumpOffset":
                case "mapBumpWrap":
                case "mapBumpAnisotropy":
                    break;
                case "mapNormal":
                    c.normalMap = a(l, i.mapNormalRepeat, i.mapNormalOffset, i.mapNormalWrap, i.mapNormalAnisotropy);
                    break;
                case "mapNormalFactor":
                    c.normalScale = [l, l];
                    break;
                case "mapNormalRepeat":
                case "mapNormalOffset":
                case "mapNormalWrap":
                case "mapNormalAnisotropy":
                    break;
                case "mapSpecular":
                    c.specularMap = a(l, i.mapSpecularRepeat, i.mapSpecularOffset, i.mapSpecularWrap, i.mapSpecularAnisotropy);
                    break;
                case "mapSpecularRepeat":
                case "mapSpecularOffset":
                case "mapSpecularWrap":
                case "mapSpecularAnisotropy":
                    break;
                case "mapAlpha":
                    c.alphaMap = a(l, i.mapAlphaRepeat, i.mapAlphaOffset, i.mapAlphaWrap, i.mapAlphaAnisotropy);
                    break;
                case "mapAlphaRepeat":
                case "mapAlphaOffset":
                case "mapAlphaWrap":
                case "mapAlphaAnisotropy":
                    break;
                case "flipSided":
                    c.side = THREE.BackSide;
                    break;
                case "doubleSided":
                    c.side = THREE.DoubleSide;
                    break;
                case "transparency":
                    console.warn("THREE.Loader: transparency has been renamed to opacity"),
                    c.opacity = l;
                    break;
                case "opacity":
                case "transparent":
                case "depthTest":
                case "depthWrite":
                case "transparent":
                case "visible":
                case "wireframe":
                    c[s] = l;
                    break;
                case "vertexColors":
                    !0 === l && (c.vertexColors = THREE.VertexColors),
                    "face" === l && (c.vertexColors = THREE.FaceColors);
                    break;
                default:
                    console.error("Loader.createMaterial: Unsupported", s, l)
                }
            }
            return "MeshPhongMaterial" !== c.type && delete c.specular,
            1 > c.opacity && (c.transparent = !0),
            r.setTextures(h),
            r.parse(c)
        }
    } ()
},
THREE.Loader.Handlers = {
    handlers: [],
    add: function(e, t) {
        this.handlers.push(e, t)
    },
    get: function(e) {
        for (var t = this.handlers,
        r = 0,
        i = t.length; i > r; r += 2) {
            var n = t[r + 1];
            if (t[r].test(e)) return n
        }
        return null
    }
},
THREE.XHRLoader = function(e) {
    this.manager = void 0 !== e ? e: THREE.DefaultLoadingManager
},
THREE.XHRLoader.prototype = {
    constructor: THREE.XHRLoader,
    load: function(e, t, r, i) {
        var n = this,
        o = THREE.Cache.get(e);
        if (void 0 !== o) return t && setTimeout(function() {
            t(o)
        },
        0),
        o;
        var a = new XMLHttpRequest;
        return a.open("GET", e, !0),
        a.addEventListener("load",
        function(r) {
            r = r.target.response,
            THREE.Cache.add(e, r),
            t && t(r),
            n.manager.itemEnd(e)
        },
        !1),
        void 0 !== r && a.addEventListener("progress",
        function(e) {
            r(e)
        },
        !1),
        a.addEventListener("error",
        function(t) {
            i && i(t),
            n.manager.itemError(e)
        },
        !1),
        void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin),
        void 0 !== this.responseType && (a.responseType = this.responseType),
        void 0 !== this.withCredentials && (a.withCredentials = this.withCredentials),
        a.send(null),
        n.manager.itemStart(e),
        a
    },
    setResponseType: function(e) {
        this.responseType = e
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    },
    setWithCredentials: function(e) {
        this.withCredentials = e
    }
},
THREE.ImageLoader = function(e) {
    this.manager = void 0 !== e ? e: THREE.DefaultLoadingManager
},
THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader,
    load: function(e, t, r, i) {
        var n = this,
        o = THREE.Cache.get(e);
        if (void 0 !== o) return n.manager.itemStart(e),
        t ? setTimeout(function() {
            t(o),
            n.manager.itemEnd(e)
        },
        0) : n.manager.itemEnd(e),
        o;
        var a = document.createElement("img");
        return a.addEventListener("load",
        function(r) {
            THREE.Cache.add(e, this),
            t && t(this),
            n.manager.itemEnd(e)
        },
        !1),
        void 0 !== r && a.addEventListener("progress",
        function(e) {
            r(e)
        },
        !1),
        a.addEventListener("error",
        function(t) {
            i && i(t),
            n.manager.itemError(e)
        },
        !1),
        void 0 !== this.crossOrigin && (a.crossOrigin = this.crossOrigin),
        n.manager.itemStart(e),
        a.src = e,
        a
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    }
},
THREE.JSONLoader = function(e) {
    "boolean" == typeof e && (console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."), e = void 0),
    this.manager = void 0 !== e ? e: THREE.DefaultLoadingManager,
    this.withCredentials = !1
},
THREE.JSONLoader.prototype = {
    constructor: THREE.JSONLoader,
    get statusDomElement() {
        return void 0 === this._statusDomElement && (this._statusDomElement = document.createElement("div")),
        console.warn("THREE.JSONLoader: .statusDomElement has been removed."),
        this._statusDomElement
    },
    load: function(e, t, r, i) {
        var n = this,
        o = this.texturePath && "string" == typeof this.texturePath ? this.texturePath: THREE.Loader.prototype.extractUrlBase(e);
        r = new THREE.XHRLoader(this.manager),
        r.setCrossOrigin(this.crossOrigin),
        r.setWithCredentials(this.withCredentials),
        r.load(e,
        function(r) {
            r = JSON.parse(r);
            var i = r.metadata;
            if (void 0 !== i) {
                if ("object" === i.type) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.ObjectLoader instead.");
                if ("scene" === i.type) return void console.error("THREE.JSONLoader: " + e + " should be loaded with THREE.SceneLoader instead.")
            }
            r = n.parse(r, o),
            t(r.geometry, r.materials)
        })
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    },
    setTexturePath: function(e) {
        this.texturePath = e
    },
    parse: function(e, t) {
        var r = new THREE.Geometry,
        i = void 0 !== e.scale ? 1 / e.scale: 1;
        return function(t) {
            var i, n, o, a, s, h, c, l, u, p, E, d, f, m = e.faces;
            h = e.vertices;
            var T = e.normals,
            v = e.colors,
            g = 0;
            if (void 0 !== e.uvs) {
                for (i = 0; i < e.uvs.length; i++) e.uvs[i].length && g++;
                for (i = 0; g > i; i++) r.faceVertexUvs[i] = []
            }
            for (a = 0, s = h.length; s > a;) i = new THREE.Vector3,
            i.x = h[a++] * t,
            i.y = h[a++] * t,
            i.z = h[a++] * t,
            r.vertices.push(i);
            for (a = 0, s = m.length; s > a;) if (t = m[a++], u = 1 & t, o = 2 & t, i = 8 & t, c = 16 & t, p = 32 & t, h = 64 & t, t &= 128, u) {
                if (u = new THREE.Face3, u.a = m[a], u.b = m[a + 1], u.c = m[a + 3], E = new THREE.Face3, E.a = m[a + 1], E.b = m[a + 2], E.c = m[a + 3], a += 4, o && (o = m[a++], u.materialIndex = o, E.materialIndex = o), o = r.faces.length, i) for (i = 0; g > i; i++) for (d = e.uvs[i], r.faceVertexUvs[i][o] = [], r.faceVertexUvs[i][o + 1] = [], n = 0; 4 > n; n++) l = m[a++],
                f = d[2 * l],
                l = d[2 * l + 1],
                f = new THREE.Vector2(f, l),
                2 !== n && r.faceVertexUvs[i][o].push(f),
                0 !== n && r.faceVertexUvs[i][o + 1].push(f);
                if (c && (c = 3 * m[a++], u.normal.set(T[c++], T[c++], T[c]), E.normal.copy(u.normal)), p) for (i = 0; 4 > i; i++) c = 3 * m[a++],
                p = new THREE.Vector3(T[c++], T[c++], T[c]),
                2 !== i && u.vertexNormals.push(p),
                0 !== i && E.vertexNormals.push(p);
                if (h && (h = m[a++], h = v[h], u.color.setHex(h), E.color.setHex(h)), t) for (i = 0; 4 > i; i++) h = m[a++],
                h = v[h],
                2 !== i && u.vertexColors.push(new THREE.Color(h)),
                0 !== i && E.vertexColors.push(new THREE.Color(h));
                r.faces.push(u),
                r.faces.push(E)
            } else {
                if (u = new THREE.Face3, u.a = m[a++], u.b = m[a++], u.c = m[a++], o && (o = m[a++], u.materialIndex = o), o = r.faces.length, i) for (i = 0; g > i; i++) for (d = e.uvs[i], r.faceVertexUvs[i][o] = [], n = 0; 3 > n; n++) l = m[a++],
                f = d[2 * l],
                l = d[2 * l + 1],
                f = new THREE.Vector2(f, l),
                r.faceVertexUvs[i][o].push(f);
                if (c && (c = 3 * m[a++], u.normal.set(T[c++], T[c++], T[c])), p) for (i = 0; 3 > i; i++) c = 3 * m[a++],
                p = new THREE.Vector3(T[c++], T[c++], T[c]),
                u.vertexNormals.push(p);
                if (h && (h = m[a++], u.color.setHex(v[h])), t) for (i = 0; 3 > i; i++) h = m[a++],
                u.vertexColors.push(new THREE.Color(v[h]));
                r.faces.push(u)
            }
        } (i),
        function() {
            var t = void 0 !== e.influencesPerVertex ? e.influencesPerVertex: 2;
            if (e.skinWeights) for (var i = 0,
            n = e.skinWeights.length; n > i; i += t) r.skinWeights.push(new THREE.Vector4(e.skinWeights[i], t > 1 ? e.skinWeights[i + 1] : 0, t > 2 ? e.skinWeights[i + 2] : 0, t > 3 ? e.skinWeights[i + 3] : 0));
            if (e.skinIndices) for (i = 0, n = e.skinIndices.length; n > i; i += t) r.skinIndices.push(new THREE.Vector4(e.skinIndices[i], t > 1 ? e.skinIndices[i + 1] : 0, t > 2 ? e.skinIndices[i + 2] : 0, t > 3 ? e.skinIndices[i + 3] : 0));
            r.bones = e.bones,
            r.bones && 0 < r.bones.length && (r.skinWeights.length !== r.skinIndices.length || r.skinIndices.length !== r.vertices.length) && console.warn("When skinning, number of vertices (" + r.vertices.length + "), skinIndices (" + r.skinIndices.length + "), and skinWeights (" + r.skinWeights.length + ") should match.")
        } (),
        function(t) {
            if (void 0 !== e.morphTargets) for (var i = 0,
            n = e.morphTargets.length; n > i; i++) {
                r.morphTargets[i] = {},
                r.morphTargets[i].name = e.morphTargets[i].name,
                r.morphTargets[i].vertices = [];
                for (var o = r.morphTargets[i].vertices, a = e.morphTargets[i].vertices, s = 0, h = a.length; h > s; s += 3) {
                    var c = new THREE.Vector3;
                    c.x = a[s] * t,
                    c.y = a[s + 1] * t,
                    c.z = a[s + 2] * t,
                    o.push(c)
                }
            }
            if (void 0 !== e.morphColors && 0 < e.morphColors.length) for (console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'), t = r.faces, o = e.morphColors[0].colors, i = 0, n = t.length; n > i; i++) t[i].color.fromArray(o, 3 * i)
        } (i),
        function() {
            var t = [],
            i = [];
            void 0 !== e.animation && i.push(e.animation),
            void 0 !== e.animations && (e.animations.length ? i = i.concat(e.animations) : i.push(e.animations));
            for (var n = 0; n < i.length; n++) {
                var o = THREE.AnimationClip.parseAnimation(i[n], r.bones);
                o && t.push(o)
            }
            r.morphTargets && (i = THREE.AnimationClip.CreateClipsFromMorphTargetSequences(r.morphTargets, 10), t = t.concat(i)),
            0 < t.length && (r.animations = t)
        } (),
        r.computeFaceNormals(),
        r.computeBoundingSphere(),
        void 0 === e.materials || 0 === e.materials.length ? {
            geometry: r
        }: (i = THREE.Loader.prototype.initMaterials(e.materials, t, this.crossOrigin), {
            geometry: r,
            materials: i
        })
    }
},
THREE.LoadingManager = function(e, t, r) {
    var i = this,
    n = !1,
    o = 0,
    a = 0;
    this.onStart = void 0,
    this.onLoad = e,
    this.onProgress = t,
    this.onError = r,
    this.itemStart = function(e) {
        a++,
        !1 === n && void 0 !== i.onStart && i.onStart(e, o, a),
        n = !0
    },
    this.itemEnd = function(e) {
        o++,
        void 0 !== i.onProgress && i.onProgress(e, o, a),
        o === a && (n = !1, void 0 !== i.onLoad) && i.onLoad()
    },
    this.itemError = function(e) {
        void 0 !== i.onError && i.onError(e)
    }
},
THREE.DefaultLoadingManager = new THREE.LoadingManager,
THREE.BufferGeometryLoader = function(e) {
    this.manager = void 0 !== e ? e: THREE.DefaultLoadingManager
},
THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader,
    load: function(e, t, r, i) {
        var n = this,
        o = new THREE.XHRLoader(n.manager);
        o.setCrossOrigin(this.crossOrigin),
        o.load(e,
        function(e) {
            t(n.parse(JSON.parse(e)))
        },
        r, i)
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    },
    parse: function(e) {
        var t = new THREE.BufferGeometry,
        r = e.data.index;
        void 0 !== r && (r = new self[r.type](r.array), t.setIndex(new THREE.BufferAttribute(r, 1)));
        var i, n = e.data.attributes;
        for (i in n) {
            var o = n[i],
            r = new self[o.type](o.array);
            t.addAttribute(i, new THREE.BufferAttribute(r, o.itemSize))
        }
        if (i = e.data.groups || e.data.drawcalls || e.data.offsets, void 0 !== i) for (r = 0, n = i.length; r !== n; ++r) o = i[r],
        t.addGroup(o.start, o.count);
        return e = e.data.boundingSphere,
        void 0 !== e && (i = new THREE.Vector3, void 0 !== e.center && i.fromArray(e.center), t.boundingSphere = new THREE.Sphere(i, e.radius)),
        t
    }
},
THREE.MaterialLoader = function(e) {
    this.manager = void 0 !== e ? e: THREE.DefaultLoadingManager,
    this.textures = {}
},
THREE.MaterialLoader.prototype = {
    constructor: THREE.MaterialLoader,
    load: function(e, t, r, i) {
        var n = this,
        o = new THREE.XHRLoader(n.manager);
        o.setCrossOrigin(this.crossOrigin),
        o.load(e,
        function(e) {
            t(n.parse(JSON.parse(e)))
        },
        r, i)
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    },
    setTextures: function(e) {
        this.textures = e
    },
    getTexture: function(e) {
        var t = this.textures;
        return void 0 === t[e] && console.warn("THREE.MaterialLoader: Undefined texture", e),
        t[e]
    },
    parse: function(e) {
        var t = new THREE[e.type];
        if (t.uuid = e.uuid, void 0 !== e.name && (t.name = e.name), void 0 !== e.color && t.color.setHex(e.color), void 0 !== e.emissive && t.emissive.setHex(e.emissive), void 0 !== e.specular && t.specular.setHex(e.specular), void 0 !== e.shininess && (t.shininess = e.shininess), void 0 !== e.uniforms && (t.uniforms = e.uniforms), void 0 !== e.vertexShader && (t.vertexShader = e.vertexShader), void 0 !== e.fragmentShader && (t.fragmentShader = e.fragmentShader), void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors), void 0 !== e.shading && (t.shading = e.shading), void 0 !== e.blending && (t.blending = e.blending), void 0 !== e.side && (t.side = e.side), void 0 !== e.opacity && (t.opacity = e.opacity), void 0 !== e.transparent && (t.transparent = e.transparent), void 0 !== e.alphaTest && (t.alphaTest = e.alphaTest), void 0 !== e.depthTest && (t.depthTest = e.depthTest), void 0 !== e.depthWrite && (t.depthWrite = e.depthWrite), void 0 !== e.wireframe && (t.wireframe = e.wireframe), void 0 !== e.wireframeLinewidth && (t.wireframeLinewidth = e.wireframeLinewidth), void 0 !== e.size && (t.size = e.size), void 0 !== e.sizeAttenuation && (t.sizeAttenuation = e.sizeAttenuation), void 0 !== e.map && (t.map = this.getTexture(e.map)), void 0 !== e.alphaMap && (t.alphaMap = this.getTexture(e.alphaMap), t.transparent = !0), void 0 !== e.bumpMap && (t.bumpMap = this.getTexture(e.bumpMap)), void 0 !== e.bumpScale && (t.bumpScale = e.bumpScale), void 0 !== e.normalMap && (t.normalMap = this.getTexture(e.normalMap)), e.normalScale && (t.normalScale = new THREE.Vector2(e.normalScale, e.normalScale)), void 0 !== e.displacementMap && (t.displacementMap = this.getTexture(e.displacementMap)), void 0 !== e.displacementScale && (t.displacementScale = e.displacementScale), void 0 !== e.displacementBias && (t.displacementBias = e.displacementBias), void 0 !== e.specularMap && (t.specularMap = this.getTexture(e.specularMap)), void 0 !== e.envMap && (t.envMap = this.getTexture(e.envMap), t.combine = THREE.MultiplyOperation), e.reflectivity && (t.reflectivity = e.reflectivity), void 0 !== e.lightMap && (t.lightMap = this.getTexture(e.lightMap)), void 0 !== e.lightMapIntensity && (t.lightMapIntensity = e.lightMapIntensity), void 0 !== e.aoMap && (t.aoMap = this.getTexture(e.aoMap)), void 0 !== e.aoMapIntensity && (t.aoMapIntensity = e.aoMapIntensity), void 0 !== e.materials) for (var r = 0,
        i = e.materials.length; i > r; r++) t.materials.push(this.parse(e.materials[r]));
        return t
    }
},
THREE.ObjectLoader = function(e) {
    this.manager = void 0 !== e ? e: THREE.DefaultLoadingManager,
    this.texturePath = ""
},
THREE.ObjectLoader.prototype = {
    constructor: THREE.ObjectLoader,
    load: function(e, t, r, i) {
        "" === this.texturePath && (this.texturePath = e.substring(0, e.lastIndexOf("/") + 1));
        var n = this,
        o = new THREE.XHRLoader(n.manager);
        o.setCrossOrigin(this.crossOrigin),
        o.load(e,
        function(e) {
            n.parse(JSON.parse(e), t)
        },
        r, i)
    },
    setTexturePath: function(e) {
        this.texturePath = e
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    },
    parse: function(e, t) {
        var r = this.parseGeometries(e.geometries),
        i = this.parseImages(e.images,
        function() {
            void 0 !== t && t(n)
        }),
        i = this.parseTextures(e.textures, i),
        i = this.parseMaterials(e.materials, i),
        n = this.parseObject(e.object, r, i);
        return e.animations && (n.animations = this.parseAnimations(e.animations)),
        void 0 !== e.images && 0 !== e.images.length || void 0 === t || t(n),
        n
    },
    parseGeometries: function(e) {
        var t = {};
        if (void 0 !== e) for (var r = new THREE.JSONLoader,
        i = new THREE.BufferGeometryLoader,
        n = 0,
        o = e.length; o > n; n++) {
            var a, s = e[n];
            switch (s.type) {
            case "PlaneGeometry":
            case "PlaneBufferGeometry":
                a = new THREE[s.type](s.width, s.height, s.widthSegments, s.heightSegments);
                break;
            case "BoxGeometry":
            case "CubeGeometry":
                a = new THREE.BoxGeometry(s.width, s.height, s.depth, s.widthSegments, s.heightSegments, s.depthSegments);
                break;
            case "CircleBufferGeometry":
                a = new THREE.CircleBufferGeometry(s.radius, s.segments, s.thetaStart, s.thetaLength);
                break;
            case "CircleGeometry":
                a = new THREE.CircleGeometry(s.radius, s.segments, s.thetaStart, s.thetaLength);
                break;
            case "CylinderGeometry":
                a = new THREE.CylinderGeometry(s.radiusTop, s.radiusBottom, s.height, s.radialSegments, s.heightSegments, s.openEnded, s.thetaStart, s.thetaLength);
                break;
            case "SphereGeometry":
                a = new THREE.SphereGeometry(s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                break;
            case "SphereBufferGeometry":
                a = new THREE.SphereBufferGeometry(s.radius, s.widthSegments, s.heightSegments, s.phiStart, s.phiLength, s.thetaStart, s.thetaLength);
                break;
            case "DodecahedronGeometry":
                a = new THREE.DodecahedronGeometry(s.radius, s.detail);
                break;
            case "IcosahedronGeometry":
                a = new THREE.IcosahedronGeometry(s.radius, s.detail);
                break;
            case "OctahedronGeometry":
                a = new THREE.OctahedronGeometry(s.radius, s.detail);
                break;
            case "TetrahedronGeometry":
                a = new THREE.TetrahedronGeometry(s.radius, s.detail);
                break;
            case "RingGeometry":
                a = new THREE.RingGeometry(s.innerRadius, s.outerRadius, s.thetaSegments, s.phiSegments, s.thetaStart, s.thetaLength);
                break;
            case "TorusGeometry":
                a = new THREE.TorusGeometry(s.radius, s.tube, s.radialSegments, s.tubularSegments, s.arc);
                break;
            case "TorusKnotGeometry":
                a = new THREE.TorusKnotGeometry(s.radius, s.tube, s.radialSegments, s.tubularSegments, s.p, s.q, s.heightScale);
                break;
            case "BufferGeometry":
                a = i.parse(s);
                break;
            case "Geometry":
                a = r.parse(s.data, this.texturePath).geometry;
                break;
            default:
                console.warn('THREE.ObjectLoader: Unsupported geometry type "' + s.type + '"');
                continue
            }
            a.uuid = s.uuid,
            void 0 !== s.name && (a.name = s.name),
            t[s.uuid] = a
        }
        return t
    },
    parseMaterials: function(e, t) {
        var r = {};
        if (void 0 !== e) {
            var i = new THREE.MaterialLoader;
            i.setTextures(t);
            for (var n = 0,
            o = e.length; o > n; n++) {
                var a = i.parse(e[n]);
                r[a.uuid] = a
            }
        }
        return r
    },
    parseAnimations: function(e) {
        for (var t = [], r = 0; r < e.length; r++) {
            var i = THREE.AnimationClip.parse(e[r]);
            t.push(i)
        }
        return t
    },
    parseImages: function(e, t) {
        function r(e) {
            return i.manager.itemStart(e),
            a.load(e,
            function() {
                i.manager.itemEnd(e)
            })
        }
        var i = this,
        n = {};
        if (void 0 !== e && 0 < e.length) {
            var o = new THREE.LoadingManager(t),
            a = new THREE.ImageLoader(o);
            a.setCrossOrigin(this.crossOrigin);
            for (var o = 0,
            s = e.length; s > o; o++) {
                var h = e[o],
                c = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(h.url) ? h.url: i.texturePath + h.url;
                n[h.uuid] = r(c)
            }
        }
        return n
    },
    parseTextures: function(e, t) {
        function r(e) {
            return "number" == typeof e ? e: (console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", e), THREE[e])
        }
        var i = {};
        if (void 0 !== e) for (var n = 0,
        o = e.length; o > n; n++) {
            var a = e[n];
            void 0 === a.image && console.warn('THREE.ObjectLoader: No "image" specified for', a.uuid),
            void 0 === t[a.image] && console.warn("THREE.ObjectLoader: Undefined image", a.image);
            var s = new THREE.Texture(t[a.image]);
            s.needsUpdate = !0,
            s.uuid = a.uuid,
            void 0 !== a.name && (s.name = a.name),
            void 0 !== a.mapping && (s.mapping = r(a.mapping)),
            void 0 !== a.offset && (s.offset = new THREE.Vector2(a.offset[0], a.offset[1])),
            void 0 !== a.repeat && (s.repeat = new THREE.Vector2(a.repeat[0], a.repeat[1])),
            void 0 !== a.minFilter && (s.minFilter = r(a.minFilter)),
            void 0 !== a.magFilter && (s.magFilter = r(a.magFilter)),
            void 0 !== a.anisotropy && (s.anisotropy = a.anisotropy),
            Array.isArray(a.wrap) && (s.wrapS = r(a.wrap[0]), s.wrapT = r(a.wrap[1])),
            i[a.uuid] = s
        }
        return i
    },
    parseObject: function() {
        var e = new THREE.Matrix4;
        return function(t, r, i) {
            function n(e) {
                return void 0 === r[e] && console.warn("THREE.ObjectLoader: Undefined geometry", e),
                r[e]
            }

            function o(e) {
                return void 0 !== e ? (void 0 === i[e] && console.warn("THREE.ObjectLoader: Undefined material", e), i[e]) : void 0
            }
            var a;
            switch (t.type) {
            case "Scene":
                a = new THREE.Scene;
                break;
            case "PerspectiveCamera":
                a = new THREE.PerspectiveCamera(t.fov, t.aspect, t.near, t.far);
                break;
            case "OrthographicCamera":
                a = new THREE.OrthographicCamera(t.left, t.right, t.top, t.bottom, t.near, t.far);
                break;
            case "AmbientLight":
                a = new THREE.AmbientLight(t.color);
                break;
            case "DirectionalLight":
                a = new THREE.DirectionalLight(t.color, t.intensity);
                break;
            case "PointLight":
                a = new THREE.PointLight(t.color, t.intensity, t.distance, t.decay);
                break;
            case "SpotLight":
                a = new THREE.SpotLight(t.color, t.intensity, t.distance, t.angle, t.exponent, t.decay);
                break;
            case "HemisphereLight":
                a = new THREE.HemisphereLight(t.color, t.groundColor, t.intensity);
                break;
            case "Mesh":
                a = new THREE.Mesh(n(t.geometry), o(t.material));
                break;
            case "LOD":
                a = new THREE.LOD;
                break;
            case "Line":
                a = new THREE.Line(n(t.geometry), o(t.material), t.mode);
                break;
            case "PointCloud":
            case "Points":
                a = new THREE.Points(n(t.geometry), o(t.material));
                break;
            case "Sprite":
                a = new THREE.Sprite(o(t.material));
                break;
            case "Group":
                a = new THREE.Group;
                break;
            default:
                a = new THREE.Object3D
            }
            if (a.uuid = t.uuid, void 0 !== t.name && (a.name = t.name), void 0 !== t.matrix ? (e.fromArray(t.matrix), e.decompose(a.position, a.quaternion, a.scale)) : (void 0 !== t.position && a.position.fromArray(t.position), void 0 !== t.rotation && a.rotation.fromArray(t.rotation), void 0 !== t.scale && a.scale.fromArray(t.scale)), void 0 !== t.castShadow && (a.castShadow = t.castShadow), void 0 !== t.receiveShadow && (a.receiveShadow = t.receiveShadow), void 0 !== t.visible && (a.visible = t.visible), void 0 !== t.userData && (a.userData = t.userData), void 0 !== t.children) for (var s in t.children) a.add(this.parseObject(t.children[s], r, i));
            if ("LOD" === t.type) {
                t = t.levels;
                for (var h = 0; h < t.length; h++) {
                    var c = t[h];
                    s = a.getObjectByProperty("uuid", c.object),
                    void 0 !== s && a.addLevel(s, c.distance)
                }
            }
            return a
        }
    } ()
},
THREE.TextureLoader = function(e) {
    this.manager = void 0 !== e ? e: THREE.DefaultLoadingManager
},
THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader,
    load: function(e, t, r, i) {
        var n = new THREE.Texture,
        o = new THREE.ImageLoader(this.manager);
        return o.setCrossOrigin(this.crossOrigin),
        o.load(e,
        function(e) {
            n.image = e,
            n.needsUpdate = !0,
            void 0 !== t && t(n)
        },
        r, i),
        n
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    }
},
THREE.CubeTextureLoader = function(e) {
    this.manager = void 0 !== e ? e: THREE.DefaultLoadingManager
},
THREE.CubeTextureLoader.prototype = {
    constructor: THREE.CubeTextureLoader,
    load: function(e, t, r, i) {
        function n(r) {
            a.load(e[r],
            function(e) {
                o.images[r] = e,
                s++,
                6 === s && (o.needsUpdate = !0, t && t(o))
            },
            void 0, i)
        }
        var o = new THREE.CubeTexture([]),
        a = new THREE.ImageLoader;
        a.setCrossOrigin(this.crossOrigin);
        var s = 0;
        for (r = 0; r < e.length; ++r) n(r);
        return o
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    }
},
THREE.DataTextureLoader = THREE.BinaryTextureLoader = function(e) {
    this.manager = void 0 !== e ? e: THREE.DefaultLoadingManager,
    this._parser = null
},
THREE.BinaryTextureLoader.prototype = {
    constructor: THREE.BinaryTextureLoader,
    load: function(e, t, r, i) {
        var n = this,
        o = new THREE.DataTexture,
        a = new THREE.XHRLoader(this.manager);
        return a.setCrossOrigin(this.crossOrigin),
        a.setResponseType("arraybuffer"),
        a.load(e,
        function(e) { (e = n._parser(e)) && (void 0 !== e.image ? o.image = e.image: void 0 !== e.data && (o.image.width = e.width, o.image.height = e.height, o.image.data = e.data), o.wrapS = void 0 !== e.wrapS ? e.wrapS: THREE.ClampToEdgeWrapping, o.wrapT = void 0 !== e.wrapT ? e.wrapT: THREE.ClampToEdgeWrapping, o.magFilter = void 0 !== e.magFilter ? e.magFilter: THREE.LinearFilter, o.minFilter = void 0 !== e.minFilter ? e.minFilter: THREE.LinearMipMapLinearFilter, o.anisotropy = void 0 !== e.anisotropy ? e.anisotropy: 1, void 0 !== e.format && (o.format = e.format), void 0 !== e.type && (o.type = e.type), void 0 !== e.mipmaps && (o.mipmaps = e.mipmaps), 1 === e.mipmapCount && (o.minFilter = THREE.LinearFilter), o.needsUpdate = !0, t && t(o, e))
        },
        r, i),
        o
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    }
},
THREE.CompressedTextureLoader = function(e) {
    this.manager = void 0 !== e ? e: THREE.DefaultLoadingManager,
    this._parser = null
},
THREE.CompressedTextureLoader.prototype = {
    constructor: THREE.CompressedTextureLoader,
    load: function(e, t, r, i) {
        var n = this,
        o = [],
        a = new THREE.CompressedTexture;
        a.image = o;
        var s = new THREE.XHRLoader(this.manager);
        if (s.setCrossOrigin(this.crossOrigin), s.setResponseType("arraybuffer"), Array.isArray(e)) for (var h = 0,
        c = function(c) {
            s.load(e[c],
            function(e) {
                e = n._parser(e, !0),
                o[c] = {
                    width: e.width,
                    height: e.height,
                    format: e.format,
                    mipmaps: e.mipmaps
                },
                h += 1,
                6 === h && (1 === e.mipmapCount && (a.minFilter = THREE.LinearFilter), a.format = e.format, a.needsUpdate = !0, t && t(a))
            },
            r, i)
        },
        l = 0, u = e.length; u > l; ++l) c(l);
        else s.load(e,
        function(e) {
            if (e = n._parser(e, !0), e.isCubemap) for (var r = e.mipmaps.length / e.mipmapCount,
            i = 0; r > i; i++) {
                o[i] = {
                    mipmaps: []
                };
                for (var s = 0; s < e.mipmapCount; s++) o[i].mipmaps.push(e.mipmaps[i * e.mipmapCount + s]),
                o[i].format = e.format,
                o[i].width = e.width,
                o[i].height = e.height
            } else a.image.width = e.width,
            a.image.height = e.height,
            a.mipmaps = e.mipmaps;
            1 === e.mipmapCount && (a.minFilter = THREE.LinearFilter),
            a.format = e.format,
            a.needsUpdate = !0,
            t && t(a)
        },
        r, i);
        return a
    },
    setCrossOrigin: function(e) {
        this.crossOrigin = e
    }
},
THREE.Material = function() {
    Object.defineProperty(this, "id", {
        value: THREE.MaterialIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.name = "",
    this.type = "Material",
    this.side = THREE.FrontSide,
    this.opacity = 1,
    this.transparent = !1,
    this.blending = THREE.NormalBlending,
    this.blendSrc = THREE.SrcAlphaFactor,
    this.blendDst = THREE.OneMinusSrcAlphaFactor,
    this.blendEquation = THREE.AddEquation,
    this.blendEquationAlpha = this.blendDstAlpha = this.blendSrcAlpha = null,
    this.depthFunc = THREE.LessEqualDepth,
    this.colorWrite = this.depthWrite = this.depthTest = !0,
    this.precision = null,
    this.polygonOffset = !1,
    this.overdraw = this.alphaTest = this.polygonOffsetUnits = this.polygonOffsetFactor = 0,
    this._needsUpdate = this.visible = !0
},
THREE.Material.prototype = {
    constructor: THREE.Material,
    get needsUpdate() {
        return this._needsUpdate
    },
    set needsUpdate(e) { ! 0 === e && this.update(),
        this._needsUpdate = e
    },
    setValues: function(e) {
        if (void 0 !== e) for (var t in e) {
            var r = e[t];
            if (void 0 === r) console.warn("THREE.Material: '" + t + "' parameter is undefined.");
            else {
                var i = this[t];
                void 0 === i ? console.warn("THREE." + this.type + ": '" + t + "' is not a property of this material.") : i instanceof THREE.Color ? i.set(r) : i instanceof THREE.Vector3 && r instanceof THREE.Vector3 ? i.copy(r) : this[t] = "overdraw" === t ? Number(r) : r
            }
        }
    },
    toJSON: function(e) {
        var t = {
            metadata: {
                version: 4.4,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        return t.uuid = this.uuid,
        t.type = this.type,
        "" !== this.name && (t.name = this.name),
        this.color instanceof THREE.Color && (t.color = this.color.getHex()),
        this.emissive instanceof THREE.Color && (t.emissive = this.emissive.getHex()),
        this.specular instanceof THREE.Color && (t.specular = this.specular.getHex()),
        void 0 !== this.shininess && (t.shininess = this.shininess),
        this.map instanceof THREE.Texture && (t.map = this.map.toJSON(e).uuid),
        this.alphaMap instanceof THREE.Texture && (t.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap instanceof THREE.Texture && (t.lightMap = this.lightMap.toJSON(e).uuid),
        this.bumpMap instanceof THREE.Texture && (t.bumpMap = this.bumpMap.toJSON(e).uuid, t.bumpScale = this.bumpScale),
        this.normalMap instanceof THREE.Texture && (t.normalMap = this.normalMap.toJSON(e).uuid, t.normalScale = this.normalScale),
        this.displacementMap instanceof THREE.Texture && (t.displacementMap = this.displacementMap.toJSON(e).uuid, t.displacementScale = this.displacementScale, t.displacementBias = this.displacementBias),
        this.specularMap instanceof THREE.Texture && (t.specularMap = this.specularMap.toJSON(e).uuid),
        this.envMap instanceof THREE.Texture && (t.envMap = this.envMap.toJSON(e).uuid, t.reflectivity = this.reflectivity),
        void 0 !== this.size && (t.size = this.size),
        void 0 !== this.sizeAttenuation && (t.sizeAttenuation = this.sizeAttenuation),
        void 0 !== this.vertexColors && this.vertexColors !== THREE.NoColors && (t.vertexColors = this.vertexColors),
        void 0 !== this.shading && this.shading !== THREE.SmoothShading && (t.shading = this.shading),
        void 0 !== this.blending && this.blending !== THREE.NormalBlending && (t.blending = this.blending),
        void 0 !== this.side && this.side !== THREE.FrontSide && (t.side = this.side),
        1 > this.opacity && (t.opacity = this.opacity),
        !0 === this.transparent && (t.transparent = this.transparent),
        0 < this.alphaTest && (t.alphaTest = this.alphaTest),
        !0 === this.wireframe && (t.wireframe = this.wireframe),
        1 < this.wireframeLinewidth && (t.wireframeLinewidth = this.wireframeLinewidth),
        t
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.name = e.name,
        this.side = e.side,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blending = e.blending,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.alphaTest = e.alphaTest,
        this.overdraw = e.overdraw,
        this.visible = e.visible,
        this
    },
    update: function() {
        this.dispatchEvent({
            type: "update"
        })
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    },
    get wrapAround() {
        console.warn("THREE." + this.type + ": .wrapAround has been removed.")
    },
    set wrapAround(e) {
        console.warn("THREE." + this.type + ": .wrapAround has been removed.")
    },
    get wrapRGB() {
        return console.warn("THREE." + this.type + ": .wrapRGB has been removed."),
        new THREE.Color
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Material.prototype),
THREE.MaterialIdCount = 0,
THREE.LineBasicMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "LineBasicMaterial",
    this.color = new THREE.Color(16777215),
    this.linewidth = 1,
    this.linejoin = this.linecap = "round",
    this.vertexColors = THREE.NoColors,
    this.fog = !0,
    this.setValues(e)
},
THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.LineBasicMaterial.prototype.constructor = THREE.LineBasicMaterial,
THREE.LineBasicMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.linewidth = e.linewidth,
    this.linecap = e.linecap,
    this.linejoin = e.linejoin,
    this.vertexColors = e.vertexColors,
    this.fog = e.fog,
    this
},
THREE.LineDashedMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "LineDashedMaterial",
    this.color = new THREE.Color(16777215),
    this.scale = this.linewidth = 1,
    this.dashSize = 3,
    this.gapSize = 1,
    this.vertexColors = !1,
    this.fog = !0,
    this.setValues(e)
},
THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.LineDashedMaterial.prototype.constructor = THREE.LineDashedMaterial,
THREE.LineDashedMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.linewidth = e.linewidth,
    this.scale = e.scale,
    this.dashSize = e.dashSize,
    this.gapSize = e.gapSize,
    this.vertexColors = e.vertexColors,
    this.fog = e.fog,
    this
},
THREE.MeshBasicMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshBasicMaterial",
    this.color = new THREE.Color(16777215),
    this.aoMap = this.map = null,
    this.aoMapIntensity = 1,
    this.envMap = this.alphaMap = this.specularMap = null,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.fog = !0,
    this.shading = THREE.SmoothShading,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinejoin = this.wireframeLinecap = "round",
    this.vertexColors = THREE.NoColors,
    this.morphTargets = this.skinning = !1,
    this.setValues(e)
},
THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshBasicMaterial.prototype.constructor = THREE.MeshBasicMaterial,
THREE.MeshBasicMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.map = e.map,
    this.aoMap = e.aoMap,
    this.aoMapIntensity = e.aoMapIntensity,
    this.specularMap = e.specularMap,
    this.alphaMap = e.alphaMap,
    this.envMap = e.envMap,
    this.combine = e.combine,
    this.reflectivity = e.reflectivity,
    this.refractionRatio = e.refractionRatio,
    this.fog = e.fog,
    this.shading = e.shading,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.wireframeLinecap = e.wireframeLinecap,
    this.wireframeLinejoin = e.wireframeLinejoin,
    this.vertexColors = e.vertexColors,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this
},
THREE.MeshLambertMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshLambertMaterial",
    this.color = new THREE.Color(16777215),
    this.emissive = new THREE.Color(0),
    this.envMap = this.alphaMap = this.specularMap = this.map = null,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.fog = !0,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinejoin = this.wireframeLinecap = "round",
    this.vertexColors = THREE.NoColors,
    this.morphNormals = this.morphTargets = this.skinning = !1,
    this.setValues(e)
},
THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshLambertMaterial.prototype.constructor = THREE.MeshLambertMaterial,
THREE.MeshLambertMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.emissive.copy(e.emissive),
    this.map = e.map,
    this.specularMap = e.specularMap,
    this.alphaMap = e.alphaMap,
    this.envMap = e.envMap,
    this.combine = e.combine,
    this.reflectivity = e.reflectivity,
    this.refractionRatio = e.refractionRatio,
    this.fog = e.fog,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.wireframeLinecap = e.wireframeLinecap,
    this.wireframeLinejoin = e.wireframeLinejoin,
    this.vertexColors = e.vertexColors,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.morphNormals = e.morphNormals,
    this
},
THREE.MeshPhongMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshPhongMaterial",
    this.color = new THREE.Color(16777215),
    this.emissive = new THREE.Color(0),
    this.specular = new THREE.Color(1118481),
    this.shininess = 30,
    this.metal = !1,
    this.lightMap = this.map = null,
    this.lightMapIntensity = 1,
    this.aoMap = null,
    this.aoMapIntensity = 1,
    this.bumpMap = this.emissiveMap = null,
    this.bumpScale = 1,
    this.normalMap = null,
    this.normalScale = new THREE.Vector2(1, 1),
    this.displacementMap = null,
    this.displacementScale = 1,
    this.displacementBias = 0,
    this.envMap = this.alphaMap = this.specularMap = null,
    this.combine = THREE.MultiplyOperation,
    this.reflectivity = 1,
    this.refractionRatio = .98,
    this.fog = !0,
    this.shading = THREE.SmoothShading,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.wireframeLinejoin = this.wireframeLinecap = "round",
    this.vertexColors = THREE.NoColors,
    this.morphNormals = this.morphTargets = this.skinning = !1,
    this.setValues(e)
},
THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshPhongMaterial.prototype.constructor = THREE.MeshPhongMaterial,
THREE.MeshPhongMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.emissive.copy(e.emissive),
    this.specular.copy(e.specular),
    this.shininess = e.shininess,
    this.metal = e.metal,
    this.map = e.map,
    this.lightMap = e.lightMap,
    this.lightMapIntensity = e.lightMapIntensity,
    this.aoMap = e.aoMap,
    this.aoMapIntensity = e.aoMapIntensity,
    this.emissiveMap = e.emissiveMap,
    this.bumpMap = e.bumpMap,
    this.bumpScale = e.bumpScale,
    this.normalMap = e.normalMap,
    this.normalScale.copy(e.normalScale),
    this.displacementMap = e.displacementMap,
    this.displacementScale = e.displacementScale,
    this.displacementBias = e.displacementBias,
    this.specularMap = e.specularMap,
    this.alphaMap = e.alphaMap,
    this.envMap = e.envMap,
    this.combine = e.combine,
    this.reflectivity = e.reflectivity,
    this.refractionRatio = e.refractionRatio,
    this.fog = e.fog,
    this.shading = e.shading,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.wireframeLinecap = e.wireframeLinecap,
    this.wireframeLinejoin = e.wireframeLinejoin,
    this.vertexColors = e.vertexColors,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.morphNormals = e.morphNormals,
    this
},
THREE.MeshDepthMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "MeshDepthMaterial",
    this.wireframe = this.morphTargets = !1,
    this.wireframeLinewidth = 1,
    this.setValues(e)
},
THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshDepthMaterial.prototype.constructor = THREE.MeshDepthMaterial,
THREE.MeshDepthMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this
},
THREE.MeshNormalMaterial = function(e) {
    THREE.Material.call(this, e),
    this.type = "MeshNormalMaterial",
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.morphTargets = !1,
    this.setValues(e)
},
THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.MeshNormalMaterial.prototype.constructor = THREE.MeshNormalMaterial,
THREE.MeshNormalMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this
},
THREE.MultiMaterial = function(e) {
    this.uuid = THREE.Math.generateUUID(),
    this.type = "MultiMaterial",
    this.materials = e instanceof Array ? e: [],
    this.visible = !0
},
THREE.MultiMaterial.prototype = {
    constructor: THREE.MultiMaterial,
    toJSON: function() {
        for (var e = {
            metadata: {
                version: 4.2,
                type: "material",
                generator: "MaterialExporter"
            },
            uuid: this.uuid,
            type: this.type,
            materials: []
        },
        t = 0, r = this.materials.length; r > t; t++) e.materials.push(this.materials[t].toJSON());
        return e.visible = this.visible,
        e
    },
    clone: function() {
        for (var e = new this.constructor,
        t = 0; t < this.materials.length; t++) e.materials.push(this.materials[t].clone());
        return e.visible = this.visible,
        e
    }
},
THREE.MeshFaceMaterial = THREE.MultiMaterial,
THREE.PointsMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "PointsMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null,
    this.size = 1,
    this.sizeAttenuation = !0,
    this.vertexColors = THREE.NoColors,
    this.fog = !0,
    this.setValues(e)
},
THREE.PointsMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.PointsMaterial.prototype.constructor = THREE.PointsMaterial,
THREE.PointsMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.map = e.map,
    this.size = e.size,
    this.sizeAttenuation = e.sizeAttenuation,
    this.vertexColors = e.vertexColors,
    this.fog = e.fog,
    this
},
THREE.PointCloudMaterial = function(e) {
    return console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial."),
    new THREE.PointsMaterial(e)
},
THREE.ParticleBasicMaterial = function(e) {
    return console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial."),
    new THREE.PointsMaterial(e)
},
THREE.ParticleSystemMaterial = function(e) {
    return console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial."),
    new THREE.PointsMaterial(e)
},
THREE.ShaderMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "ShaderMaterial",
    this.defines = {},
    this.uniforms = {},
    this.vertexShader = "void main() {\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}",
    this.fragmentShader = "void main() {\n	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}",
    this.shading = THREE.SmoothShading,
    this.linewidth = 1,
    this.wireframe = !1,
    this.wireframeLinewidth = 1,
    this.lights = this.fog = !1,
    this.vertexColors = THREE.NoColors,
    this.derivatives = this.morphNormals = this.morphTargets = this.skinning = !1,
    this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0]
    },
    this.index0AttributeName = void 0,
    void 0 !== e && (void 0 !== e.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."), this.setValues(e))
},
THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.ShaderMaterial.prototype.constructor = THREE.ShaderMaterial,
THREE.ShaderMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.fragmentShader = e.fragmentShader,
    this.vertexShader = e.vertexShader,
    this.uniforms = THREE.UniformsUtils.clone(e.uniforms),
    this.attributes = e.attributes,
    this.defines = e.defines,
    this.shading = e.shading,
    this.wireframe = e.wireframe,
    this.wireframeLinewidth = e.wireframeLinewidth,
    this.fog = e.fog,
    this.lights = e.lights,
    this.vertexColors = e.vertexColors,
    this.skinning = e.skinning,
    this.morphTargets = e.morphTargets,
    this.morphNormals = e.morphNormals,
    this.derivatives = e.derivatives,
    this
},
THREE.ShaderMaterial.prototype.toJSON = function(e) {
    return e = THREE.Material.prototype.toJSON.call(this, e),
    e.uniforms = this.uniforms,
    e.attributes = this.attributes,
    e.vertexShader = this.vertexShader,
    e.fragmentShader = this.fragmentShader,
    e
},
THREE.RawShaderMaterial = function(e) {
    THREE.ShaderMaterial.call(this, e),
    this.type = "RawShaderMaterial"
},
THREE.RawShaderMaterial.prototype = Object.create(THREE.ShaderMaterial.prototype),
THREE.RawShaderMaterial.prototype.constructor = THREE.RawShaderMaterial,
THREE.SpriteMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "SpriteMaterial",
    this.color = new THREE.Color(16777215),
    this.map = null,
    this.rotation = 0,
    this.fog = !1,
    this.setValues(e)
},
THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.SpriteMaterial.prototype.constructor = THREE.SpriteMaterial,
THREE.SpriteMaterial.prototype.copy = function(e) {
    return THREE.Material.prototype.copy.call(this, e),
    this.color.copy(e.color),
    this.map = e.map,
    this.rotation = e.rotation,
    this.fog = e.fog,
    this
},
THREE.Texture = function(e, t, r, i, n, o, a, s, h) {
    Object.defineProperty(this, "id", {
        value: THREE.TextureIdCount++
    }),
    this.uuid = THREE.Math.generateUUID(),
    this.sourceFile = this.name = "",
    this.image = void 0 !== e ? e: THREE.Texture.DEFAULT_IMAGE,
    this.mipmaps = [],
    this.mapping = void 0 !== t ? t: THREE.Texture.DEFAULT_MAPPING,
    this.wrapS = void 0 !== r ? r: THREE.ClampToEdgeWrapping,
    this.wrapT = void 0 !== i ? i: THREE.ClampToEdgeWrapping,
    this.magFilter = void 0 !== n ? n: THREE.LinearFilter,
    this.minFilter = void 0 !== o ? o: THREE.LinearMipMapLinearFilter,
    this.anisotropy = void 0 !== h ? h: 1,
    this.format = void 0 !== a ? a: THREE.RGBAFormat,
    this.type = void 0 !== s ? s: THREE.UnsignedByteType,
    this.offset = new THREE.Vector2(0, 0),
    this.repeat = new THREE.Vector2(1, 1),
    this.generateMipmaps = !0,
    this.premultiplyAlpha = !1,
    this.flipY = !0,
    this.unpackAlignment = 4,
    this.version = 0,
    this.onUpdate = null
},
THREE.Texture.DEFAULT_IMAGE = void 0,
THREE.Texture.DEFAULT_MAPPING = THREE.UVMapping,
THREE.Texture.prototype = {
    constructor: THREE.Texture,
    set needsUpdate(e) { ! 0 === e && this.version++
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.image = e.image,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this
    },
    toJSON: function(e) {
        if (void 0 !== e.textures[this.uuid]) return e.textures[this.uuid];
        var t = {
            metadata: {
                version: 4.4,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            mapping: this.mapping,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            wrap: [this.wrapS, this.wrapT],
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy
        };
        if (void 0 !== this.image) {
            var r = this.image;
            if (void 0 === r.uuid && (r.uuid = THREE.Math.generateUUID()), void 0 === e.images[r.uuid]) {
                var i, n = e.images,
                o = r.uuid,
                a = r.uuid;
                void 0 !== r.toDataURL ? i = r: (i = document.createElement("canvas"), i.width = r.width, i.height = r.height, i.getContext("2d").drawImage(r, 0, 0, r.width, r.height)),
                i = 2048 < i.width || 2048 < i.height ? i.toDataURL("image/jpeg", .6) : i.toDataURL("image/png"),
                n[o] = {
                    uuid: a,
                    url: i
                }
            }
            t.image = r.uuid
        }
        return e.textures[this.uuid] = t
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    },
    transformUv: function(e) {
        if (this.mapping === THREE.UVMapping) {
            if (e.multiply(this.repeat), e.add(this.offset), 0 > e.x || 1 < e.x) switch (this.wrapS) {
            case THREE.RepeatWrapping:
                e.x -= Math.floor(e.x);
                break;
            case THREE.ClampToEdgeWrapping:
                e.x = 0 > e.x ? 0 : 1;
                break;
            case THREE.MirroredRepeatWrapping:
                1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x: e.x -= Math.floor(e.x)
            }
            if (0 > e.y || 1 < e.y) switch (this.wrapT) {
            case THREE.RepeatWrapping:
                e.y -= Math.floor(e.y);
                break;
            case THREE.ClampToEdgeWrapping:
                e.y = 0 > e.y ? 0 : 1;
                break;
            case THREE.MirroredRepeatWrapping:
                1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y: e.y -= Math.floor(e.y)
            }
            this.flipY && (e.y = 1 - e.y)
        }
    }
},
THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype),
THREE.TextureIdCount = 0,
THREE.CanvasTexture = function(e, t, r, i, n, o, a, s, h) {
    THREE.Texture.call(this, e, t, r, i, n, o, a, s, h),
    this.needsUpdate = !0
},
THREE.CanvasTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CanvasTexture.prototype.constructor = THREE.CanvasTexture,
THREE.CubeTexture = function(e, t, r, i, n, o, a, s, h) {
    t = void 0 !== t ? t: THREE.CubeReflectionMapping,
    THREE.Texture.call(this, e, t, r, i, n, o, a, s, h),
    this.images = e,
    this.flipY = !1
},
THREE.CubeTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CubeTexture.prototype.constructor = THREE.CubeTexture,
THREE.CubeTexture.prototype.copy = function(e) {
    return THREE.Texture.prototype.copy.call(this, e),
    this.images = e.images,
    this
},
THREE.CompressedTexture = function(e, t, r, i, n, o, a, s, h, c, l) {
    THREE.Texture.call(this, null, o, a, s, h, c, i, n, l),
    this.image = {
        width: t,
        height: r
    },
    this.mipmaps = e,
    this.generateMipmaps = this.flipY = !1
},
THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.CompressedTexture.prototype.constructor = THREE.CompressedTexture,
THREE.DataTexture = function(e, t, r, i, n, o, a, s, h, c, l) {
    THREE.Texture.call(this, null, o, a, s, h, c, i, n, l),
    this.image = {
        data: e,
        width: t,
        height: r
    },
    this.magFilter = void 0 !== h ? h: THREE.NearestFilter,
    this.minFilter = void 0 !== c ? c: THREE.NearestFilter,
    this.generateMipmaps = this.flipY = !1
},
THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.DataTexture.prototype.constructor = THREE.DataTexture,
THREE.VideoTexture = function(e, t, r, i, n, o, a, s, h) {
    function c() {
        requestAnimationFrame(c),
        e.readyState === e.HAVE_ENOUGH_DATA && (l.needsUpdate = !0)
    }
    THREE.Texture.call(this, e, t, r, i, n, o, a, s, h),
    this.generateMipmaps = !1;
    var l = this;
    c()
},
THREE.VideoTexture.prototype = Object.create(THREE.Texture.prototype),
THREE.VideoTexture.prototype.constructor = THREE.VideoTexture,
THREE.Group = function() {
    THREE.Object3D.call(this),
    this.type = "Group"
},
THREE.Group.prototype = Object.create(THREE.Object3D.prototype),
THREE.Group.prototype.constructor = THREE.Group,
THREE.Points = function(e, t) {
    THREE.Object3D.call(this),
    this.type = "Points",
    this.geometry = void 0 !== e ? e: new THREE.Geometry,
    this.material = void 0 !== t ? t: new THREE.PointsMaterial({
        color: 16777215 * Math.random()
    })
},
THREE.Points.prototype = Object.create(THREE.Object3D.prototype),
THREE.Points.prototype.constructor = THREE.Points,
THREE.Points.prototype.raycast = function() {
    var e = new THREE.Matrix4,
    t = new THREE.Ray;
    return function(r, i) {
        function n(e, n) {
            var a = t.distanceSqToPoint(e);
            if (h > a) {
                var s = t.closestPointToPoint(e);
                s.applyMatrix4(o.matrixWorld);
                var c = r.ray.origin.distanceTo(s);
                c < r.near || c > r.far || i.push({
                    distance: c,
                    distanceToRay: Math.sqrt(a),
                    point: s.clone(),
                    index: n,
                    face: null,
                    object: o
                })
            }
        }
        var o = this,
        a = o.geometry,
        s = r.params.Points.threshold;
        if (e.getInverse(this.matrixWorld), t.copy(r.ray).applyMatrix4(e), null === a.boundingBox || !1 !== t.isIntersectionBox(a.boundingBox)) {
            var s = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
            h = s * s,
            s = new THREE.Vector3;
            if (a instanceof THREE.BufferGeometry) {
                var c = a.index,
                a = a.attributes.position.array;
                if (null !== c) for (var l = c.array,
                c = 0,
                u = l.length; u > c; c++) {
                    var p = l[c];
                    s.fromArray(a, 3 * p),
                    n(s, p)
                } else for (c = 0, l = a.length / 3; l > c; c++) s.fromArray(a, 3 * c),
                n(s, c)
            } else for (s = a.vertices, c = 0, l = s.length; l > c; c++) n(s[c], c)
        }
    }
} (),
THREE.Points.prototype.clone = function() {
    return new this.constructor(this.geometry, this.material).copy(this)
},
THREE.PointCloud = function(e, t) {
    return console.warn("THREE.PointCloud has been renamed to THREE.Points."),
    new THREE.Points(e, t)
},
THREE.ParticleSystem = function(e, t) {
    return console.warn("THREE.ParticleSystem has been renamed to THREE.Points."),
    new THREE.Points(e, t)
},
THREE.Line = function(e, t, r) {
    return 1 === r ? (console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."), new THREE.LineSegments(e, t)) : (THREE.Object3D.call(this), this.type = "Line", this.geometry = void 0 !== e ? e: new THREE.Geometry, void(this.material = void 0 !== t ? t: new THREE.LineBasicMaterial({
        color: 16777215 * Math.random()
    })))
},
THREE.Line.prototype = Object.create(THREE.Object3D.prototype),
THREE.Line.prototype.constructor = THREE.Line,
THREE.Line.prototype.raycast = function() {
    var e = new THREE.Matrix4,
    t = new THREE.Ray,
    r = new THREE.Sphere;
    return function(i, n) {
        var o = i.linePrecision,
        o = o * o,
        a = this.geometry;
        if (null === a.boundingSphere && a.computeBoundingSphere(), r.copy(a.boundingSphere), r.applyMatrix4(this.matrixWorld), !1 !== i.ray.isIntersectionSphere(r)) {
            e.getInverse(this.matrixWorld),
            t.copy(i.ray).applyMatrix4(e);
            var s = new THREE.Vector3,
            h = new THREE.Vector3,
            c = new THREE.Vector3,
            l = new THREE.Vector3,
            u = this instanceof THREE.LineSegments ? 2 : 1;
            if (a instanceof THREE.BufferGeometry) {
                var p = a.index,
                E = a.attributes;
                if (null !== p) for (var a = p.array,
                E = E.position.array,
                p = 0,
                d = a.length - 1; d > p; p += u) {
                    var f = a[p + 1];
                    s.fromArray(E, 3 * a[p]),
                    h.fromArray(E, 3 * f),
                    f = t.distanceSqToSegment(s, h, l, c),
                    f > o || (l.applyMatrix4(this.matrixWorld), f = i.ray.origin.distanceTo(l), f < i.near || f > i.far || n.push({
                        distance: f,
                        point: c.clone().applyMatrix4(this.matrixWorld),
                        index: p,
                        face: null,
                        faceIndex: null,
                        object: this
                    }))
                } else for (E = E.position.array, p = 0, d = E.length / 3 - 1; d > p; p += u) s.fromArray(E, 3 * p),
                h.fromArray(E, 3 * p + 3),
                f = t.distanceSqToSegment(s, h, l, c),
                f > o || (l.applyMatrix4(this.matrixWorld), f = i.ray.origin.distanceTo(l), f < i.near || f > i.far || n.push({
                    distance: f,
                    point: c.clone().applyMatrix4(this.matrixWorld),
                    index: p,
                    face: null,
                    faceIndex: null,
                    object: this
                }))
            } else if (a instanceof THREE.Geometry) for (s = a.vertices, h = s.length, p = 0; h - 1 > p; p += u) f = t.distanceSqToSegment(s[p], s[p + 1], l, c),
            f > o || (l.applyMatrix4(this.matrixWorld), f = i.ray.origin.distanceTo(l), f < i.near || f > i.far || n.push({
                distance: f,
                point: c.clone().applyMatrix4(this.matrixWorld),
                index: p,
                face: null,
                faceIndex: null,
                object: this
            }))
        }
    }
} (),
THREE.Line.prototype.clone = function() {
    return new this.constructor(this.geometry, this.material).copy(this)
},
THREE.LineStrip = 0,
THREE.LinePieces = 1,
THREE.LineSegments = function(e, t) {
    THREE.Line.call(this, e, t),
    this.type = "LineSegments"
},
THREE.LineSegments.prototype = Object.create(THREE.Line.prototype),
THREE.LineSegments.prototype.constructor = THREE.LineSegments,
THREE.Mesh = function(e, t) {
    THREE.Object3D.call(this),
    this.type = "Mesh",
    this.geometry = void 0 !== e ? e: new THREE.Geometry,
    this.material = void 0 !== t ? t: new THREE.MeshBasicMaterial({
        color: 16777215 * Math.random()
    }),
    this.updateMorphTargets()
},
THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype),
THREE.Mesh.prototype.constructor = THREE.Mesh,
THREE.Mesh.prototype.updateMorphTargets = function() {
    if (void 0 !== this.geometry.morphTargets && 0 < this.geometry.morphTargets.length) {
        this.morphTargetBase = -1,
        this.morphTargetInfluences = [],
        this.morphTargetDictionary = {};
        for (var e = 0,
        t = this.geometry.morphTargets.length; t > e; e++) this.morphTargetInfluences.push(0),
        this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e
    }
},
THREE.Mesh.prototype.getMorphTargetIndexByName = function(e) {
    return void 0 !== this.morphTargetDictionary[e] ? this.morphTargetDictionary[e] : (console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target " + e + " does not exist. Returning 0."), 0)
},
THREE.Mesh.prototype.raycast = function() {
    function e(e, t, r, i, n, o, a) {
        return THREE.Triangle.barycoordFromPoint(e, t, r, i, f),
        n.multiplyScalar(f.x),
        o.multiplyScalar(f.y),
        a.multiplyScalar(f.z),
        n.add(o).add(a),
        n.clone()
    }

    function t(e, t, r, i, n, o, a) {
        var s = e.material;
        return null === (s.side === THREE.BackSide ? r.intersectTriangle(o, n, i, !0, a) : r.intersectTriangle(i, n, o, s.side !== THREE.DoubleSide, a)) ? null: (T.copy(a), T.applyMatrix4(e.matrixWorld), r = t.ray.origin.distanceTo(T), r < t.near || r > t.far ? null: {
            distance: r,
            point: T.clone(),
            object: e
        })
    }

    function r(r, i, n, o, c, l, u, f) {
        return a.fromArray(o, 3 * l),
        s.fromArray(o, 3 * u),
        h.fromArray(o, 3 * f),
        (r = t(r, i, n, a, s, h, m)) && (c && (p.fromArray(c, 2 * l), E.fromArray(c, 2 * u), d.fromArray(c, 2 * f), r.uv = e(m, a, s, h, p, E, d)), r.face = new THREE.Face3(l, u, f, THREE.Triangle.normal(a, s, h)), r.faceIndex = l),
        r
    }
    var i = new THREE.Matrix4,
    n = new THREE.Ray,
    o = new THREE.Sphere,
    a = new THREE.Vector3,
    s = new THREE.Vector3,
    h = new THREE.Vector3,
    c = new THREE.Vector3,
    l = new THREE.Vector3,
    u = new THREE.Vector3,
    p = new THREE.Vector2,
    E = new THREE.Vector2,
    d = new THREE.Vector2,
    f = new THREE.Vector3,
    m = new THREE.Vector3,
    T = new THREE.Vector3;
    return function(f, T) {
        var v = this.geometry,
        g = this.material;
        if (void 0 !== g) {
            null === v.boundingSphere && v.computeBoundingSphere();
            var y = this.matrixWorld;
            if (o.copy(v.boundingSphere), o.applyMatrix4(y), !1 !== f.ray.isIntersectionSphere(o) && (i.getInverse(y), n.copy(f.ray).applyMatrix4(i), null === v.boundingBox || !1 !== n.isIntersectionBox(v.boundingBox))) {
                var R, H;
                if (v instanceof THREE.BufferGeometry) {
                    var x, b, g = v.index,
                    y = v.attributes,
                    v = y.position.array;
                    if (void 0 !== y.uv && (R = y.uv.array), null !== g) for (var y = g.array,
                    w = 0,
                    M = y.length; M > w; w += 3) g = y[w],
                    x = y[w + 1],
                    b = y[w + 2],
                    (H = r(this, f, n, v, R, g, x, b)) && (H.faceIndex = Math.floor(w / 3), T.push(H));
                    else for (w = 0, M = v.length; M > w; w += 9) g = w / 3,
                    x = g + 1,
                    b = g + 2,
                    (H = r(this, f, n, v, R, g, x, b)) && (H.index = g, T.push(H))
                } else if (v instanceof THREE.Geometry) {
                    var S, _, y = g instanceof THREE.MeshFaceMaterial,
                    w = !0 === y ? g.materials: null,
                    M = v.vertices;
                    x = v.faces,
                    b = v.faceVertexUvs[0],
                    0 < b.length && (R = b);
                    for (var C = 0,
                    A = x.length; A > C; C++) {
                        var L = x[C];
                        if (H = !0 === y ? w[L.materialIndex] : g, void 0 !== H) {
                            if (b = M[L.a], S = M[L.b], _ = M[L.c], !0 === H.morphTargets) {
                                H = v.morphTargets;
                                var P = this.morphTargetInfluences;
                                a.set(0, 0, 0),
                                s.set(0, 0, 0),
                                h.set(0, 0, 0);
                                for (var D = 0,
                                k = H.length; k > D; D++) {
                                    var V = P[D];
                                    if (0 !== V) {
                                        var O = H[D].vertices;
                                        a.addScaledVector(c.subVectors(O[L.a], b), V),
                                        s.addScaledVector(l.subVectors(O[L.b], S), V),
                                        h.addScaledVector(u.subVectors(O[L.c], _), V)
                                    }
                                }
                                a.add(b),
                                s.add(S),
                                h.add(_),
                                b = a,
                                S = s,
                                _ = h
                            } (H = t(this, f, n, b, S, _, m)) && (R && (P = R[C], p.copy(P[0]), E.copy(P[1]), d.copy(P[2]), H.uv = e(m, b, S, _, p, E, d)), H.face = L, H.faceIndex = C, T.push(H))
                        }
                    }
                }
            }
        }
    }
} (),
THREE.Mesh.prototype.clone = function() {
    return new this.constructor(this.geometry, this.material).copy(this)
},
THREE.Bone = function(e) {
    THREE.Object3D.call(this),
    this.type = "Bone",
    this.skin = e
},
THREE.Bone.prototype = Object.create(THREE.Object3D.prototype),
THREE.Bone.prototype.constructor = THREE.Bone,
THREE.Bone.prototype.copy = function(e) {
    return THREE.Object3D.prototype.copy.call(this, e),
    this.skin = e.skin,
    this
},
THREE.Skeleton = function(e, t, r) {
    if (this.useVertexTexture = void 0 !== r ? r: !0, this.identityMatrix = new THREE.Matrix4, e = e || [], this.bones = e.slice(0), this.useVertexTexture ? (e = Math.sqrt(4 * this.bones.length), e = THREE.Math.nextPowerOfTwo(Math.ceil(e)), this.boneTextureHeight = this.boneTextureWidth = e = Math.max(e, 4), this.boneMatrices = new Float32Array(this.boneTextureWidth * this.boneTextureHeight * 4), this.boneTexture = new THREE.DataTexture(this.boneMatrices, this.boneTextureWidth, this.boneTextureHeight, THREE.RGBAFormat, THREE.FloatType)) : this.boneMatrices = new Float32Array(16 * this.bones.length), void 0 === t) this.calculateInverses();
    else if (this.bones.length === t.length) this.boneInverses = t.slice(0);
    else for (console.warn("THREE.Skeleton bonInverses is the wrong length."), this.boneInverses = [], t = 0, e = this.bones.length; e > t; t++) this.boneInverses.push(new THREE.Matrix4)
},
THREE.Skeleton.prototype.calculateInverses = function() {
    this.boneInverses = [];
    for (var e = 0,
    t = this.bones.length; t > e; e++) {
        var r = new THREE.Matrix4;
        this.bones[e] && r.getInverse(this.bones[e].matrixWorld),
        this.boneInverses.push(r)
    }
},
THREE.Skeleton.prototype.pose = function() {
    for (var e, t = 0,
    r = this.bones.length; r > t; t++)(e = this.bones[t]) && e.matrixWorld.getInverse(this.boneInverses[t]);
    for (t = 0, r = this.bones.length; r > t; t++)(e = this.bones[t]) && (e.parent ? (e.matrix.getInverse(e.parent.matrixWorld), e.matrix.multiply(e.matrixWorld)) : e.matrix.copy(e.matrixWorld), e.matrix.decompose(e.position, e.quaternion, e.scale))
},
THREE.Skeleton.prototype.update = function() {
    var e = new THREE.Matrix4;
    return function() {
        for (var t = 0,
        r = this.bones.length; r > t; t++) e.multiplyMatrices(this.bones[t] ? this.bones[t].matrixWorld: this.identityMatrix, this.boneInverses[t]),
        e.flattenToArrayOffset(this.boneMatrices, 16 * t);
        this.useVertexTexture && (this.boneTexture.needsUpdate = !0)
    }
} (),
THREE.Skeleton.prototype.clone = function() {
    return new THREE.Skeleton(this.bones, this.boneInverses, this.useVertexTexture)
},
THREE.SkinnedMesh = function(e, t, r) {
    if (THREE.Mesh.call(this, e, t), this.type = "SkinnedMesh", this.bindMode = "attached", this.bindMatrix = new THREE.Matrix4, this.bindMatrixInverse = new THREE.Matrix4, e = [], this.geometry && void 0 !== this.geometry.bones) {
        for (var i, n = 0,
        o = this.geometry.bones.length; o > n; ++n) i = this.geometry.bones[n],
        t = new THREE.Bone(this),
        e.push(t),
        t.name = i.name,
        t.position.fromArray(i.pos),
        t.quaternion.fromArray(i.rotq),
        void 0 !== i.scl && t.scale.fromArray(i.scl);
        for (n = 0, o = this.geometry.bones.length; o > n; ++n) i = this.geometry.bones[n],
        -1 !== i.parent && null !== i.parent ? e[i.parent].add(e[n]) : this.add(e[n])
    }
    this.normalizeSkinWeights(),
    this.updateMatrixWorld(!0),
    this.bind(new THREE.Skeleton(e, void 0, r), this.matrixWorld)
},
THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype),
THREE.SkinnedMesh.prototype.constructor = THREE.SkinnedMesh,
THREE.SkinnedMesh.prototype.bind = function(e, t) {
    this.skeleton = e,
    void 0 === t && (this.updateMatrixWorld(!0), this.skeleton.calculateInverses(), t = this.matrixWorld),
    this.bindMatrix.copy(t),
    this.bindMatrixInverse.getInverse(t)
},
THREE.SkinnedMesh.prototype.pose = function() {
    this.skeleton.pose()
},
THREE.SkinnedMesh.prototype.normalizeSkinWeights = function() {
    if (this.geometry instanceof THREE.Geometry) for (var e = 0; e < this.geometry.skinIndices.length; e++) {
        var t = this.geometry.skinWeights[e],
        r = 1 / t.lengthManhattan();
        1 / 0 !== r ? t.multiplyScalar(r) : t.set(1)
    }
},
THREE.SkinnedMesh.prototype.updateMatrixWorld = function(e) {
    THREE.Mesh.prototype.updateMatrixWorld.call(this, !0),
    "attached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.matrixWorld) : "detached" === this.bindMode ? this.bindMatrixInverse.getInverse(this.bindMatrix) : console.warn("THREE.SkinnedMesh unrecognized bindMode: " + this.bindMode)
},
THREE.SkinnedMesh.prototype.clone = function() {
    return new this.constructor(this.geometry, this.material, this.useVertexTexture).copy(this)
},
THREE.LOD = function() {
    THREE.Object3D.call(this),
    this.type = "LOD",
    Object.defineProperties(this, {
        levels: {
            enumerable: !0,
            value: []
        },
        objects: {
            get: function() {
                return console.warn("THREE.LOD: .objects has been renamed to .levels."),
                this.levels
            }
        }
    })
},
THREE.LOD.prototype = Object.create(THREE.Object3D.prototype),
THREE.LOD.prototype.constructor = THREE.LOD,
THREE.LOD.prototype.addLevel = function(e, t) {
    void 0 === t && (t = 0),
    t = Math.abs(t);
    for (var r = this.levels,
    i = 0; i < r.length && !(t < r[i].distance); i++);
    r.splice(i, 0, {
        distance: t,
        object: e
    }),
    this.add(e)
},
THREE.LOD.prototype.getObjectForDistance = function(e) {
    for (var t = this.levels,
    r = 1,
    i = t.length; i > r && !(e < t[r].distance); r++);
    return t[r - 1].object
},
THREE.LOD.prototype.raycast = function() {
    var e = new THREE.Vector3;
    return function(t, r) {
        e.setFromMatrixPosition(this.matrixWorld);
        var i = t.ray.origin.distanceTo(e);
        this.getObjectForDistance(i).raycast(t, r)
    }
} (),
THREE.LOD.prototype.update = function() {
    var e = new THREE.Vector3,
    t = new THREE.Vector3;
    return function(r) {
        var i = this.levels;
        if (1 < i.length) {
            e.setFromMatrixPosition(r.matrixWorld),
            t.setFromMatrixPosition(this.matrixWorld),
            r = e.distanceTo(t),
            i[0].object.visible = !0;
            for (var n = 1,
            o = i.length; o > n && r >= i[n].distance; n++) i[n - 1].object.visible = !1,
            i[n].object.visible = !0;
            for (; o > n; n++) i[n].object.visible = !1
        }
    }
} (),
THREE.LOD.prototype.copy = function(e) {
    THREE.Object3D.prototype.copy.call(this, e, !1),
    e = e.levels;
    for (var t = 0,
    r = e.length; r > t; t++) {
        var i = e[t];
        this.addLevel(i.object.clone(), i.distance)
    }
    return this
},
THREE.LOD.prototype.toJSON = function(e) {
    e = THREE.Object3D.prototype.toJSON.call(this, e),
    e.object.levels = [];
    for (var t = this.levels,
    r = 0,
    i = t.length; i > r; r++) {
        var n = t[r];
        e.object.levels.push({
            object: n.object.uuid,
            distance: n.distance
        })
    }
    return e
},
THREE.Sprite = function() {
    var e = new Uint16Array([0, 1, 2, 0, 2, 3]),
    t = new Float32Array([ - .5, -.5, 0, .5, -.5, 0, .5, .5, 0, -.5, .5, 0]),
    r = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]),
    i = new THREE.BufferGeometry;
    return i.setIndex(new THREE.BufferAttribute(e, 1)),
    i.addAttribute("position", new THREE.BufferAttribute(t, 3)),
    i.addAttribute("uv", new THREE.BufferAttribute(r, 2)),
    function(e) {
        THREE.Object3D.call(this),
        this.type = "Sprite",
        this.geometry = i,
        this.material = void 0 !== e ? e: new THREE.SpriteMaterial
    }
} (),
THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype),
THREE.Sprite.prototype.constructor = THREE.Sprite,
THREE.Sprite.prototype.raycast = function() {
    var e = new THREE.Vector3;
    return function(t, r) {
        e.setFromMatrixPosition(this.matrixWorld);
        var i = t.ray.distanceSqToPoint(e);
        i > this.scale.x * this.scale.y || r.push({
            distance: Math.sqrt(i),
            point: this.position,
            face: null,
            object: this
        })
    }
} (),
THREE.Sprite.prototype.clone = function() {
    return new this.constructor(this.material).copy(this)
},
THREE.Particle = THREE.Sprite,
THREE.LensFlare = function(e, t, r, i, n) {
    THREE.Object3D.call(this),
    this.lensFlares = [],
    this.positionScreen = new THREE.Vector3,
    this.customUpdateCallback = void 0,
    void 0 !== e && this.add(e, t, r, i, n)
},
THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype),
THREE.LensFlare.prototype.constructor = THREE.LensFlare,
THREE.LensFlare.prototype.add = function(e, t, r, i, n, o) {
    void 0 === t && (t = -1),
    void 0 === r && (r = 0),
    void 0 === o && (o = 1),
    void 0 === n && (n = new THREE.Color(16777215)),
    void 0 === i && (i = THREE.NormalBlending),
    r = Math.min(r, Math.max(0, r)),
    this.lensFlares.push({
        texture: e,
        size: t,
        distance: r,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 0,
        opacity: o,
        color: n,
        blending: i
    })
},
THREE.LensFlare.prototype.updateLensFlares = function() {
    var e, t, r = this.lensFlares.length,
    i = 2 * -this.positionScreen.x,
    n = 2 * -this.positionScreen.y;
    for (e = 0; r > e; e++) t = this.lensFlares[e],
    t.x = this.positionScreen.x + i * t.distance,
    t.y = this.positionScreen.y + n * t.distance,
    t.wantedRotation = t.x * Math.PI * .25,
    t.rotation += .25 * (t.wantedRotation - t.rotation)
},
THREE.LensFlare.prototype.copy = function(e) {
    THREE.Object3D.prototype.copy.call(this, e),
    this.positionScreen.copy(e.positionScreen),
    this.customUpdateCallback = e.customUpdateCallback;
    for (var t = 0,
    r = e.lensFlares.length; r > t; t++) this.lensFlares.push(e.lensFlares[t]);
    return this
},
THREE.Scene = function() {
    THREE.Object3D.call(this),
    this.type = "Scene",
    this.overrideMaterial = this.fog = null,
    this.autoUpdate = !0
},
THREE.Scene.prototype = Object.create(THREE.Object3D.prototype),
THREE.Scene.prototype.constructor = THREE.Scene,
THREE.Scene.prototype.copy = function(e) {
    return THREE.Object3D.prototype.copy.call(this, e),
    null !== e.fog && (this.fog = e.fog.clone()),
    null !== e.overrideMaterial && (this.overrideMaterial = e.overrideMaterial.clone()),
    this.autoUpdate = e.autoUpdate,
    this.matrixAutoUpdate = e.matrixAutoUpdate,
    this
},
THREE.Fog = function(e, t, r) {
    this.name = "",
    this.color = new THREE.Color(e),
    this.near = void 0 !== t ? t: 1,
    this.far = void 0 !== r ? r: 1e3
},
THREE.Fog.prototype.clone = function() {
    return new THREE.Fog(this.color.getHex(), this.near, this.far)
},
THREE.FogExp2 = function(e, t) {
    this.name = "",
    this.color = new THREE.Color(e),
    this.density = void 0 !== t ? t: 25e-5
},
THREE.FogExp2.prototype.clone = function() {
    return new THREE.FogExp2(this.color.getHex(), this.density)
},
THREE.ShaderChunk = {},
THREE.ShaderChunk.alphamap_fragment = "#ifdef USE_ALPHAMAP\n\n	diffuseColor.a *= texture2D( alphaMap, vUv ).g;\n\n#endif\n",
THREE.ShaderChunk.alphamap_pars_fragment = "#ifdef USE_ALPHAMAP\n\n	uniform sampler2D alphaMap;\n\n#endif\n",
THREE.ShaderChunk.alphatest_fragment = "#ifdef ALPHATEST\n\n	if ( diffuseColor.a < ALPHATEST ) discard;\n\n#endif\n",
THREE.ShaderChunk.aomap_fragment = "#ifdef USE_AOMAP\n\n	totalAmbientLight *= ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\n#endif\n",
THREE.ShaderChunk.aomap_pars_fragment = "#ifdef USE_AOMAP\n\n	uniform sampler2D aoMap;\n	uniform float aoMapIntensity;\n\n#endif",
THREE.ShaderChunk.begin_vertex = "\nvec3 transformed = vec3( position );\n",
THREE.ShaderChunk.beginnormal_vertex = "\nvec3 objectNormal = vec3( normal );\n",
THREE.ShaderChunk.bumpmap_pars_fragment = "#ifdef USE_BUMPMAP\n\n	uniform sampler2D bumpMap;\n	uniform float bumpScale;\n\n\n\n	vec2 dHdxy_fwd() {\n\n		vec2 dSTdx = dFdx( vUv );\n		vec2 dSTdy = dFdy( vUv );\n\n		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\n		return vec2( dBx, dBy );\n\n	}\n\n	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\n		vec3 vSigmaX = dFdx( surf_pos );\n		vec3 vSigmaY = dFdy( surf_pos );\n		vec3 vN = surf_norm;\n		vec3 R1 = cross( vSigmaY, vN );\n		vec3 R2 = cross( vN, vSigmaX );\n\n		float fDet = dot( vSigmaX, R1 );\n\n		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n		return normalize( abs( fDet ) * surf_norm - vGrad );\n\n	}\n\n#endif\n",
THREE.ShaderChunk.color_fragment = "#ifdef USE_COLOR\n\n	diffuseColor.rgb *= vColor;\n\n#endif",
THREE.ShaderChunk.color_pars_fragment = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif\n",
THREE.ShaderChunk.color_pars_vertex = "#ifdef USE_COLOR\n\n	varying vec3 vColor;\n\n#endif",
THREE.ShaderChunk.color_vertex = "#ifdef USE_COLOR\n\n	vColor.xyz = color.xyz;\n\n#endif",
THREE.ShaderChunk.common = "#define PI 3.14159\n#define PI2 6.28318\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\n\nvec3 transformDirection( in vec3 normal, in mat4 matrix ) {\n\n	return normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );\n\n}\n\nvec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {\n\n	return normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );\n\n}\n\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	float distance = dot( planeNormal, point - pointOnPlane );\n\n	return - distance * planeNormal + point;\n\n}\n\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return sign( dot( point - pointOnPlane, planeNormal ) );\n\n}\n\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\n	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n\n}\n\nfloat calcLightAttenuation( float lightDistance, float cutoffDistance, float decayExponent ) {\n\n	if ( decayExponent > 0.0 ) {\n\n	  return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\n	}\n\n	return 1.0;\n\n}\n\nvec3 F_Schlick( in vec3 specularColor, in float dotLH ) {\n\n\n	float fresnel = exp2( ( -5.55437 * dotLH - 6.98316 ) * dotLH );\n\n	return ( 1.0 - specularColor ) * fresnel + specularColor;\n\n}\n\nfloat G_BlinnPhong_Implicit( /* in float dotNL, in float dotNV */ ) {\n\n\n	return 0.25;\n\n}\n\nfloat D_BlinnPhong( in float shininess, in float dotNH ) {\n\n\n	return ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n\n}\n\nvec3 BRDF_BlinnPhong( in vec3 specularColor, in float shininess, in vec3 normal, in vec3 lightDir, in vec3 viewDir ) {\n\n	vec3 halfDir = normalize( lightDir + viewDir );\n\n	float dotNH = saturate( dot( normal, halfDir ) );\n	float dotLH = saturate( dot( lightDir, halfDir ) );\n\n	vec3 F = F_Schlick( specularColor, dotLH );\n\n	float G = G_BlinnPhong_Implicit( /* dotNL, dotNV */ );\n\n	float D = D_BlinnPhong( shininess, dotNH );\n\n	return F * G * D;\n\n}\n\nvec3 inputToLinear( in vec3 a ) {\n\n	#ifdef GAMMA_INPUT\n\n		return pow( a, vec3( float( GAMMA_FACTOR ) ) );\n\n	#else\n\n		return a;\n\n	#endif\n\n}\n\nvec3 linearToOutput( in vec3 a ) {\n\n	#ifdef GAMMA_OUTPUT\n\n		return pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );\n\n	#else\n\n		return a;\n\n	#endif\n\n}\n",
THREE.ShaderChunk.defaultnormal_vertex = "#ifdef FLIP_SIDED\n\n	objectNormal = -objectNormal;\n\n#endif\n\nvec3 transformedNormal = normalMatrix * objectNormal;\n",
THREE.ShaderChunk.displacementmap_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	transformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n\n#endif\n",
THREE.ShaderChunk.displacementmap_pars_vertex = "#ifdef USE_DISPLACEMENTMAP\n\n	uniform sampler2D displacementMap;\n	uniform float displacementScale;\n	uniform float displacementBias;\n\n#endif\n",
THREE.ShaderChunk.emissivemap_fragment = "#ifdef USE_EMISSIVEMAP\n\n	vec4 emissiveColor = texture2D( emissiveMap, vUv );\n\n	emissiveColor.rgb = inputToLinear( emissiveColor.rgb );\n\n	totalEmissiveLight *= emissiveColor.rgb;\n\n#endif\n",
THREE.ShaderChunk.emissivemap_pars_fragment = "#ifdef USE_EMISSIVEMAP\n\n	uniform sampler2D emissiveMap;\n\n#endif\n",
THREE.ShaderChunk.envmap_fragment = "#ifdef USE_ENVMAP\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\n		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\n		#ifdef ENVMAP_MODE_REFLECTION\n\n			vec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\n		#else\n\n			vec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\n		#endif\n\n	#else\n\n		vec3 reflectVec = vReflect;\n\n	#endif\n\n	#ifdef DOUBLE_SIDED\n		float flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n	#else\n		float flipNormal = 1.0;\n	#endif\n\n	#ifdef ENVMAP_TYPE_CUBE\n		vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\n	#elif defined( ENVMAP_TYPE_EQUIREC )\n		vec2 sampleUV;\n		sampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n		sampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n		vec4 envColor = texture2D( envMap, sampleUV );\n\n	#elif defined( ENVMAP_TYPE_SPHERE )\n		vec3 reflectView = flipNormal * normalize((viewMatrix * vec4( reflectVec, 0.0 )).xyz + vec3(0.0,0.0,1.0));\n		vec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n	#endif\n\n	envColor.xyz = inputToLinear( envColor.xyz );\n\n	#ifdef ENVMAP_BLENDING_MULTIPLY\n\n		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_MIX )\n\n		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\n	#elif defined( ENVMAP_BLENDING_ADD )\n\n		outgoingLight += envColor.xyz * specularStrength * reflectivity;\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.envmap_pars_fragment = "#ifdef USE_ENVMAP\n\n	uniform float reflectivity;\n	#ifdef ENVMAP_TYPE_CUBE\n		uniform samplerCube envMap;\n	#else\n		uniform sampler2D envMap;\n	#endif\n	uniform float flipEnvMap;\n\n	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\n		uniform float refractionRatio;\n\n	#else\n\n		varying vec3 vReflect;\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.envmap_pars_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	varying vec3 vReflect;\n\n	uniform float refractionRatio;\n\n#endif\n",
THREE.ShaderChunk.envmap_vertex = "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP ) && ! defined( PHONG )\n\n	vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\n	vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\n	#ifdef ENVMAP_MODE_REFLECTION\n\n		vReflect = reflect( cameraToVertex, worldNormal );\n\n	#else\n\n		vReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.fog_fragment = "#ifdef USE_FOG\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n\n	#else\n\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n\n	#endif\n\n	#ifdef FOG_EXP2\n\n		float fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\n	#else\n\n		float fogFactor = smoothstep( fogNear, fogFar, depth );\n\n	#endif\n	\n	outgoingLight = mix( outgoingLight, fogColor, fogFactor );\n\n#endif",
THREE.ShaderChunk.fog_pars_fragment = "#ifdef USE_FOG\n\n	uniform vec3 fogColor;\n\n	#ifdef FOG_EXP2\n\n		uniform float fogDensity;\n\n	#else\n\n		uniform float fogNear;\n		uniform float fogFar;\n	#endif\n\n#endif",
THREE.ShaderChunk.hemilight_fragment = "#if MAX_HEMI_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lightDir = hemisphereLightDirection[ i ];\n\n		float dotProduct = dot( normal, lightDir );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vec3 lightColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		totalAmbientLight += lightColor;\n\n	}\n\n#endif\n\n",
THREE.ShaderChunk.lightmap_fragment = "#ifdef USE_LIGHTMAP\n\n	totalAmbientLight += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\n#endif\n",
THREE.ShaderChunk.lightmap_pars_fragment = "#ifdef USE_LIGHTMAP\n\n	uniform sampler2D lightMap;\n	uniform float lightMapIntensity;\n\n#endif",
THREE.ShaderChunk.lights_lambert_pars_vertex = "#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n",
THREE.ShaderChunk.lights_lambert_vertex = "vLightFront = vec3( 0.0 );\n\n#ifdef DOUBLE_SIDED\n\n	vLightBack = vec3( 0.0 );\n\n#endif\n\nvec3 normal = normalize( transformedNormal );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = pointLightColor[ i ];\n\n		vec3 lVector = pointLightPosition[ i ] - mvPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\n		float dotProduct = dot( normal, lightDir );\n\n		vLightFront += lightColor * attenuation * saturate( dotProduct );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = spotLightColor[ i ];\n\n		vec3 lightPosition = spotLightPosition[ i ];\n		vec3 lVector = lightPosition - mvPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			attenuation *= spotEffect;\n\n\n			float dotProduct = dot( normal, lightDir );\n\n			vLightFront += lightColor * attenuation * saturate( dotProduct );\n\n			#ifdef DOUBLE_SIDED\n\n				vLightBack += lightColor * attenuation * saturate( - dotProduct );\n\n			#endif\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 lightColor = directionalLightColor[ i ];\n\n		vec3 lightDir = directionalLightDirection[ i ];\n\n\n		float dotProduct = dot( normal, lightDir );\n\n		vLightFront += lightColor * saturate( dotProduct );\n\n		#ifdef DOUBLE_SIDED\n\n			vLightBack += lightColor * saturate( - dotProduct );\n\n		#endif\n\n	}\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {\n\n		vec3 lightDir = hemisphereLightDirection[ i ];\n\n\n		float dotProduct = dot( normal, lightDir );\n\n		float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;\n\n		vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );\n\n		#ifdef DOUBLE_SIDED\n\n			float hemiDiffuseWeightBack = - 0.5 * dotProduct + 0.5;\n\n			vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );\n\n		#endif\n\n	}\n\n#endif\n",
THREE.ShaderChunk.lights_phong_fragment = "vec3 viewDir = normalize( vViewPosition );\n\nvec3 totalDiffuseLight = vec3( 0.0 );\nvec3 totalSpecularLight = vec3( 0.0 );\n\n#if MAX_POINT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = pointLightColor[ i ];\n\n		vec3 lightPosition = pointLightPosition[ i ];\n		vec3 lVector = lightPosition + vViewPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n\n		float attenuation = calcLightAttenuation( length( lVector ), pointLightDistance[ i ], pointLightDecay[ i ] );\n\n\n		float cosineTerm = saturate( dot( normal, lightDir ) );\n\n		totalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n\n	}\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {\n\n		vec3 lightColor = spotLightColor[ i ];\n\n		vec3 lightPosition = spotLightPosition[ i ];\n		vec3 lVector = lightPosition + vViewPosition.xyz;\n		vec3 lightDir = normalize( lVector );\n\n		float spotEffect = dot( spotLightDirection[ i ], lightDir );\n\n		if ( spotEffect > spotLightAngleCos[ i ] ) {\n\n			spotEffect = saturate( pow( saturate( spotEffect ), spotLightExponent[ i ] ) );\n\n\n			float attenuation = calcLightAttenuation( length( lVector ), spotLightDistance[ i ], spotLightDecay[ i ] );\n\n			attenuation *= spotEffect;\n\n\n			float cosineTerm = saturate( dot( normal, lightDir ) );\n\n			totalDiffuseLight += lightColor * attenuation * cosineTerm;\n\n\n			vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n			totalSpecularLight += brdf * specularStrength * lightColor * attenuation * cosineTerm;\n\n		}\n\n	}\n\n#endif\n\n#if MAX_DIR_LIGHTS > 0\n\n	for ( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {\n\n		vec3 lightColor = directionalLightColor[ i ];\n\n		vec3 lightDir = directionalLightDirection[ i ];\n\n\n		float cosineTerm = saturate( dot( normal, lightDir ) );\n\n		totalDiffuseLight += lightColor * cosineTerm;\n\n\n		vec3 brdf = BRDF_BlinnPhong( specular, shininess, normal, lightDir, viewDir );\n\n		totalSpecularLight += brdf * specularStrength * lightColor * cosineTerm;\n\n	}\n\n#endif\n",
THREE.ShaderChunk.lights_phong_pars_fragment = "uniform vec3 ambientLightColor;\n\n#if MAX_DIR_LIGHTS > 0\n\n	uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];\n	uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];\n\n#endif\n\n#if MAX_HEMI_LIGHTS > 0\n\n	uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];\n	uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];\n\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDistance[ MAX_POINT_LIGHTS ];\n	uniform float pointLightDecay[ MAX_POINT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0\n\n	uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];\n	uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];\n	uniform float spotLightDecay[ MAX_SPOT_LIGHTS ];\n\n#endif\n\n#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n\nvarying vec3 vViewPosition;\n\n#ifndef FLAT_SHADED\n\n	varying vec3 vNormal;\n\n#endif\n",
THREE.ShaderChunk.lights_phong_pars_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	varying vec3 vWorldPosition;\n\n#endif\n\n#if MAX_POINT_LIGHTS > 0\n\n	uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];\n\n#endif\n",
THREE.ShaderChunk.lights_phong_vertex = "#if MAX_SPOT_LIGHTS > 0 || defined( USE_ENVMAP )\n\n	vWorldPosition = worldPosition.xyz;\n\n#endif\n",
THREE.ShaderChunk.linear_to_gamma_fragment = "\n	outgoingLight = linearToOutput( outgoingLight );\n",
THREE.ShaderChunk.logdepthbuf_fragment = "#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\n	gl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n\n#endif",
THREE.ShaderChunk.logdepthbuf_pars_fragment = "#ifdef USE_LOGDEPTHBUF\n\n	uniform float logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.logdepthbuf_pars_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		varying float vFragDepth;\n\n	#endif\n\n	uniform float logDepthBufFC;\n\n#endif",
THREE.ShaderChunk.logdepthbuf_vertex = "#ifdef USE_LOGDEPTHBUF\n\n	gl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\n	#ifdef USE_LOGDEPTHBUF_EXT\n\n		vFragDepth = 1.0 + gl_Position.w;\n\n#else\n\n		gl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\n	#endif\n\n#endif",
THREE.ShaderChunk.map_fragment = "#ifdef USE_MAP\n\n	vec4 texelColor = texture2D( map, vUv );\n\n	texelColor.xyz = inputToLinear( texelColor.xyz );\n\n	diffuseColor *= texelColor;\n\n#endif\n",
THREE.ShaderChunk.map_pars_fragment = "#ifdef USE_MAP\n\n	uniform sampler2D map;\n\n#endif",
THREE.ShaderChunk.map_particle_fragment = "#ifdef USE_MAP\n\n	diffuseColor *= texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\n#endif\n",
THREE.ShaderChunk.map_particle_pars_fragment = "#ifdef USE_MAP\n\n	uniform vec4 offsetRepeat;\n	uniform sampler2D map;\n\n#endif\n",
THREE.ShaderChunk.morphnormal_vertex = "#ifdef USE_MORPHNORMALS\n\n	objectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n	objectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n	objectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n	objectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n\n#endif\n",
THREE.ShaderChunk.morphtarget_pars_vertex = "#ifdef USE_MORPHTARGETS\n\n	#ifndef USE_MORPHNORMALS\n\n	uniform float morphTargetInfluences[ 8 ];\n\n	#else\n\n	uniform float morphTargetInfluences[ 4 ];\n\n	#endif\n\n#endif",
THREE.ShaderChunk.morphtarget_vertex = "#ifdef USE_MORPHTARGETS\n\n	transformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n	transformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n	transformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n	transformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\n	#ifndef USE_MORPHNORMALS\n\n	transformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n	transformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n	transformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n	transformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.normal_phong_fragment = "#ifndef FLAT_SHADED\n\n	vec3 normal = normalize( vNormal );\n\n	#ifdef DOUBLE_SIDED\n\n		normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );\n\n	#endif\n\n#else\n\n	vec3 fdx = dFdx( vViewPosition );\n	vec3 fdy = dFdy( vViewPosition );\n	vec3 normal = normalize( cross( fdx, fdy ) );\n\n#endif\n\n#ifdef USE_NORMALMAP\n\n	normal = perturbNormal2Arb( -vViewPosition, normal );\n\n#elif defined( USE_BUMPMAP )\n\n	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n\n#endif\n\n",
THREE.ShaderChunk.normalmap_pars_fragment = "#ifdef USE_NORMALMAP\n\n	uniform sampler2D normalMap;\n	uniform vec2 normalScale;\n\n\n	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\n		vec3 q0 = dFdx( eye_pos.xyz );\n		vec3 q1 = dFdy( eye_pos.xyz );\n		vec2 st0 = dFdx( vUv.st );\n		vec2 st1 = dFdy( vUv.st );\n\n		vec3 S = normalize( q0 * st1.t - q1 * st0.t );\n		vec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n		vec3 N = normalize( surf_norm );\n\n		vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n		mapN.xy = normalScale * mapN.xy;\n		mat3 tsn = mat3( S, T, N );\n		return normalize( tsn * mapN );\n\n	}\n\n#endif\n",
THREE.ShaderChunk.project_vertex = "#ifdef USE_SKINNING\n\n	vec4 mvPosition = modelViewMatrix * skinned;\n\n#else\n\n	vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n\n#endif\n\ngl_Position = projectionMatrix * mvPosition;\n",
THREE.ShaderChunk.shadowmap_fragment = "#ifdef USE_SHADOWMAP\n\n	for ( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n		float texelSizeY =  1.0 / shadowMapSize[ i ].y;\n\n		float shadow = 0.0;\n\n#if defined( POINT_LIGHT_SHADOWS )\n\n		bool isPointLight = shadowDarkness[ i ] < 0.0;\n\n		if ( isPointLight ) {\n\n			float realShadowDarkness = abs( shadowDarkness[ i ] );\n\n			vec3 lightToPosition = vShadowCoord[ i ].xyz;\n\n	#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n			vec3 bd3D = normalize( lightToPosition );\n			float dp = length( lightToPosition );\n\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D, texelSizeY ) ), shadowBias[ i ], shadow );\n\n\n	#if defined( SHADOWMAP_TYPE_PCF )\n			const float Dr = 1.25;\n	#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n			const float Dr = 2.25;\n	#endif\n\n			float os = Dr *  2.0 * texelSizeY;\n\n			const vec3 Gsd = vec3( - 1, 0, 1 );\n\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zzy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zxy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xxy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xzy * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zyz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xyz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.zyx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.xyx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yzz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yxz * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yxx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D + Gsd.yzx * os, texelSizeY ) ), shadowBias[ i ], shadow );\n\n			shadow *= realShadowDarkness * ( 1.0 / 21.0 );\n\n	#else \n			vec3 bd3D = normalize( lightToPosition );\n			float dp = length( lightToPosition );\n\n			adjustShadowValue1K( dp, texture2D( shadowMap[ i ], cubeToUV( bd3D, texelSizeY ) ), shadowBias[ i ], shadow );\n\n			shadow *= realShadowDarkness;\n\n	#endif\n\n		} else {\n\n#endif \n			float texelSizeX =  1.0 / shadowMapSize[ i ].x;\n\n			vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;\n\n\n			bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n			bool inFrustum = all( inFrustumVec );\n\n			bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\n			bool frustumTest = all( frustumTestVec );\n\n			if ( frustumTest ) {\n\n	#if defined( SHADOWMAP_TYPE_PCF )\n\n\n				/*\n					for ( float y = -1.25; y <= 1.25; y += 1.25 )\n						for ( float x = -1.25; x <= 1.25; x += 1.25 ) {\n							vec4 rgbaDepth = texture2D( shadowMap[ i ], vec2( x * xPixelOffset, y * yPixelOffset ) + shadowCoord.xy );\n							float fDepth = unpackDepth( rgbaDepth );\n							if ( fDepth < shadowCoord.z )\n								shadow += 1.0;\n					}\n					shadow /= 9.0;\n				*/\n\n				shadowCoord.z += shadowBias[ i ];\n\n				const float ShadowDelta = 1.0 / 9.0;\n\n				float xPixelOffset = texelSizeX;\n				float yPixelOffset = texelSizeY;\n\n				float dx0 = - 1.25 * xPixelOffset;\n				float dy0 = - 1.25 * yPixelOffset;\n				float dx1 = 1.25 * xPixelOffset;\n				float dy1 = 1.25 * yPixelOffset;\n\n				float fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n				if ( fDepth < shadowCoord.z ) shadow += ShadowDelta;\n\n				shadow *= shadowDarkness[ i ];\n\n	#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\n\n				shadowCoord.z += shadowBias[ i ];\n\n				float xPixelOffset = texelSizeX;\n				float yPixelOffset = texelSizeY;\n\n				float dx0 = - 1.0 * xPixelOffset;\n				float dy0 = - 1.0 * yPixelOffset;\n				float dx1 = 1.0 * xPixelOffset;\n				float dy1 = 1.0 * yPixelOffset;\n\n				mat3 shadowKernel;\n				mat3 depthKernel;\n\n				depthKernel[ 0 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );\n				depthKernel[ 0 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );\n				depthKernel[ 0 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );\n				depthKernel[ 1 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );\n				depthKernel[ 1 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );\n				depthKernel[ 1 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );\n				depthKernel[ 2 ][ 0 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );\n				depthKernel[ 2 ][ 1 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );\n				depthKernel[ 2 ][ 2 ] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );\n\n				vec3 shadowZ = vec3( shadowCoord.z );\n				shadowKernel[ 0 ] = vec3( lessThan( depthKernel[ 0 ], shadowZ ) );\n				shadowKernel[ 0 ] *= vec3( 0.25 );\n\n				shadowKernel[ 1 ] = vec3( lessThan( depthKernel[ 1 ], shadowZ ) );\n				shadowKernel[ 1 ] *= vec3( 0.25 );\n\n				shadowKernel[ 2 ] = vec3( lessThan( depthKernel[ 2 ], shadowZ ) );\n				shadowKernel[ 2 ] *= vec3( 0.25 );\n\n				vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[ i ].xy );\n\n				shadowKernel[ 0 ] = mix( shadowKernel[ 1 ], shadowKernel[ 0 ], fractionalCoord.x );\n				shadowKernel[ 1 ] = mix( shadowKernel[ 2 ], shadowKernel[ 1 ], fractionalCoord.x );\n\n				vec4 shadowValues;\n				shadowValues.x = mix( shadowKernel[ 0 ][ 1 ], shadowKernel[ 0 ][ 0 ], fractionalCoord.y );\n				shadowValues.y = mix( shadowKernel[ 0 ][ 2 ], shadowKernel[ 0 ][ 1 ], fractionalCoord.y );\n				shadowValues.z = mix( shadowKernel[ 1 ][ 1 ], shadowKernel[ 1 ][ 0 ], fractionalCoord.y );\n				shadowValues.w = mix( shadowKernel[ 1 ][ 2 ], shadowKernel[ 1 ][ 1 ], fractionalCoord.y );\n\n				shadow = dot( shadowValues, vec4( 1.0 ) ) * shadowDarkness[ i ];\n\n	#else \n				shadowCoord.z += shadowBias[ i ];\n\n				vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );\n				float fDepth = unpackDepth( rgbaDepth );\n\n				if ( fDepth < shadowCoord.z )\n					shadow = shadowDarkness[ i ];\n\n	#endif\n\n			}\n\n#ifdef SHADOWMAP_DEBUG\n\n			if ( inFrustum ) {\n\n				if ( i == 0 ) {\n\n					outgoingLight *= vec3( 1.0, 0.5, 0.0 );\n\n				} else if ( i == 1 ) {\n\n					outgoingLight *= vec3( 0.0, 1.0, 0.8 );\n\n				} else {\n\n					outgoingLight *= vec3( 0.0, 0.5, 1.0 );\n\n				}\n\n			}\n\n#endif\n\n#if defined( POINT_LIGHT_SHADOWS )\n\n		}\n\n#endif\n\n		shadowMask = shadowMask * vec3( 1.0 - shadow );\n\n	}\n\n#endif\n",
THREE.ShaderChunk.shadowmap_pars_fragment = "#ifdef USE_SHADOWMAP\n\n	uniform sampler2D shadowMap[ MAX_SHADOWS ];\n	uniform vec2 shadowMapSize[ MAX_SHADOWS ];\n\n	uniform float shadowDarkness[ MAX_SHADOWS ];\n	uniform float shadowBias[ MAX_SHADOWS ];\n\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n	float unpackDepth( const in vec4 rgba_depth ) {\n\n		const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n		float depth = dot( rgba_depth, bit_shift );\n		return depth;\n\n	}\n\n	#if defined(POINT_LIGHT_SHADOWS)\n\n\n		void adjustShadowValue1K( const float testDepth, const vec4 textureData, const float bias, inout float shadowValue ) {\n\n			const vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n			if ( testDepth >= dot( textureData, bitSh ) * 1000.0 + bias )\n				shadowValue += 1.0;\n\n		}\n\n\n		vec2 cubeToUV( vec3 v, float texelSizeY ) {\n\n\n			vec3 absV = abs( v );\n\n\n			float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n			absV *= scaleToCube;\n\n\n			v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\n\n\n			vec2 planar = v.xy;\n\n			float almostATexel = 1.5 * texelSizeY;\n			float almostOne = 1.0 - almostATexel;\n\n			if ( absV.z >= almostOne ) {\n\n				if ( v.z > 0.0 )\n					planar.x = 4.0 - v.x;\n\n			} else if ( absV.x >= almostOne ) {\n\n				float signX = sign( v.x );\n				planar.x = v.z * signX + 2.0 * signX;\n\n			} else if ( absV.y >= almostOne ) {\n\n				float signY = sign( v.y );\n				planar.x = v.x + 2.0 * signY + 2.0;\n				planar.y = v.z * signY - 2.0;\n\n			}\n\n\n			return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\n		}\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.shadowmap_pars_vertex = "#ifdef USE_SHADOWMAP\n\n	uniform float shadowDarkness[ MAX_SHADOWS ];\n	uniform mat4 shadowMatrix[ MAX_SHADOWS ];\n	varying vec4 vShadowCoord[ MAX_SHADOWS ];\n\n#endif",
THREE.ShaderChunk.shadowmap_vertex = "#ifdef USE_SHADOWMAP\n\n	for ( int i = 0; i < MAX_SHADOWS; i ++ ) {\n\n			vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;\n\n	}\n\n#endif",
THREE.ShaderChunk.skinbase_vertex = "#ifdef USE_SKINNING\n\n	mat4 boneMatX = getBoneMatrix( skinIndex.x );\n	mat4 boneMatY = getBoneMatrix( skinIndex.y );\n	mat4 boneMatZ = getBoneMatrix( skinIndex.z );\n	mat4 boneMatW = getBoneMatrix( skinIndex.w );\n\n#endif",
THREE.ShaderChunk.skinning_pars_vertex = "#ifdef USE_SKINNING\n\n	uniform mat4 bindMatrix;\n	uniform mat4 bindMatrixInverse;\n\n	#ifdef BONE_TEXTURE\n\n		uniform sampler2D boneTexture;\n		uniform int boneTextureWidth;\n		uniform int boneTextureHeight;\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			float j = i * 4.0;\n			float x = mod( j, float( boneTextureWidth ) );\n			float y = floor( j / float( boneTextureWidth ) );\n\n			float dx = 1.0 / float( boneTextureWidth );\n			float dy = 1.0 / float( boneTextureHeight );\n\n			y = dy * ( y + 0.5 );\n\n			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\n			mat4 bone = mat4( v1, v2, v3, v4 );\n\n			return bone;\n\n		}\n\n	#else\n\n		uniform mat4 boneGlobalMatrices[ MAX_BONES ];\n\n		mat4 getBoneMatrix( const in float i ) {\n\n			mat4 bone = boneGlobalMatrices[ int(i) ];\n			return bone;\n\n		}\n\n	#endif\n\n#endif\n",
THREE.ShaderChunk.skinning_vertex = "#ifdef USE_SKINNING\n\n	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\n	vec4 skinned = vec4( 0.0 );\n	skinned += boneMatX * skinVertex * skinWeight.x;\n	skinned += boneMatY * skinVertex * skinWeight.y;\n	skinned += boneMatZ * skinVertex * skinWeight.z;\n	skinned += boneMatW * skinVertex * skinWeight.w;\n	skinned  = bindMatrixInverse * skinned;\n\n#endif\n",
THREE.ShaderChunk.skinnormal_vertex = "#ifdef USE_SKINNING\n\n	mat4 skinMatrix = mat4( 0.0 );\n	skinMatrix += skinWeight.x * boneMatX;\n	skinMatrix += skinWeight.y * boneMatY;\n	skinMatrix += skinWeight.z * boneMatZ;\n	skinMatrix += skinWeight.w * boneMatW;\n	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\n	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\n#endif\n",
THREE.ShaderChunk.specularmap_fragment = "float specularStrength;\n\n#ifdef USE_SPECULARMAP\n\n	vec4 texelSpecular = texture2D( specularMap, vUv );\n	specularStrength = texelSpecular.r;\n\n#else\n\n	specularStrength = 1.0;\n\n#endif",
THREE.ShaderChunk.specularmap_pars_fragment = "#ifdef USE_SPECULARMAP\n\n	uniform sampler2D specularMap;\n\n#endif",
THREE.ShaderChunk.uv2_pars_fragment = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	varying vec2 vUv2;\n\n#endif",
THREE.ShaderChunk.uv2_pars_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	attribute vec2 uv2;\n	varying vec2 vUv2;\n\n#endif",
THREE.ShaderChunk.uv2_vertex = "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\n	vUv2 = uv2;\n\n#endif",
THREE.ShaderChunk.uv_pars_fragment = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	varying vec2 vUv;\n\n#endif",
THREE.ShaderChunk.uv_pars_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	varying vec2 vUv;\n	uniform vec4 offsetRepeat;\n\n#endif\n",
THREE.ShaderChunk.uv_vertex = "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP )\n\n	vUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n\n#endif",
THREE.ShaderChunk.worldpos_vertex = "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\n	#ifdef USE_SKINNING\n\n		vec4 worldPosition = modelMatrix * skinned;\n\n	#else\n\n		vec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\n	#endif\n\n#endif\n",
THREE.UniformsUtils = {
    merge: function(e) {
        for (var t = {},
        r = 0; r < e.length; r++) {
            var i, n = this.clone(e[r]);
            for (i in n) t[i] = n[i]
        }
        return t
    },
    clone: function(e) {
        var t, r = {};
        for (t in e) {
            r[t] = {};
            for (var i in e[t]) {
                var n = e[t][i];
                n instanceof THREE.Color || n instanceof THREE.Vector2 || n instanceof THREE.Vector3 || n instanceof THREE.Vector4 || n instanceof THREE.Matrix3 || n instanceof THREE.Matrix4 || n instanceof THREE.Texture ? r[t][i] = n.clone() : Array.isArray(n) ? r[t][i] = n.slice() : r[t][i] = n
            }
        }
        return r
    }
},
THREE.UniformsLib = {
    common: {
        diffuse: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0, 0, 1, 1)
        },
        specularMap: {
            type: "t",
            value: null
        },
        alphaMap: {
            type: "t",
            value: null

        },
        envMap: {
            type: "t",
            value: null
        },
        flipEnvMap: {
            type: "f",
            value: -1
        },
        reflectivity: {
            type: "f",
            value: 1
        },
        refractionRatio: {
            type: "f",
            value: .98
        }
    },
    aomap: {
        aoMap: {
            type: "t",
            value: null
        },
        aoMapIntensity: {
            type: "f",
            value: 1
        }
    },
    lightmap: {
        lightMap: {
            type: "t",
            value: null
        },
        lightMapIntensity: {
            type: "f",
            value: 1
        }
    },
    emissivemap: {
        emissiveMap: {
            type: "t",
            value: null
        }
    },
    bumpmap: {
        bumpMap: {
            type: "t",
            value: null
        },
        bumpScale: {
            type: "f",
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            type: "t",
            value: null
        },
        normalScale: {
            type: "v2",
            value: new THREE.Vector2(1, 1)
        }
    },
    displacementmap: {
        displacementMap: {
            type: "t",
            value: null
        },
        displacementScale: {
            type: "f",
            value: 1
        },
        displacementBias: {
            type: "f",
            value: 0
        }
    },
    fog: {
        fogDensity: {
            type: "f",
            value: 25e-5
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2e3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            type: "fv",
            value: []
        },
        directionalLightDirection: {
            type: "fv",
            value: []
        },
        directionalLightColor: {
            type: "fv",
            value: []
        },
        hemisphereLightDirection: {
            type: "fv",
            value: []
        },
        hemisphereLightSkyColor: {
            type: "fv",
            value: []
        },
        hemisphereLightGroundColor: {
            type: "fv",
            value: []
        },
        pointLightColor: {
            type: "fv",
            value: []
        },
        pointLightPosition: {
            type: "fv",
            value: []
        },
        pointLightDistance: {
            type: "fv1",
            value: []
        },
        pointLightDecay: {
            type: "fv1",
            value: []
        },
        spotLightColor: {
            type: "fv",
            value: []
        },
        spotLightPosition: {

            type: "fv",
            value: []
        },
        spotLightDirection: {
            type: "fv",
            value: []
        },
        spotLightDistance: {
            type: "fv1",
            value: []
        },
        spotLightAngleCos: {
            type: "fv1",
            value: []
        },
        spotLightExponent: {
            type: "fv1",
            value: []
        },
        spotLightDecay: {
            type: "fv1",
            value: []
        }
    },
    points: {
        psColor: {
            type: "c",
            value: new THREE.Color(15658734)
        },
        opacity: {
            type: "f",
            value: 1
        },
        size: {
            type: "f",
            value: 1
        },
        scale: {
            type: "f",
            value: 1
        },
        map: {
            type: "t",
            value: null
        },
        offsetRepeat: {
            type: "v4",
            value: new THREE.Vector4(0, 0, 1, 1)
        },
        fogDensity: {
            type: "f",
            value: 25e-5
        },
        fogNear: {
            type: "f",
            value: 1
        },
        fogFar: {
            type: "f",
            value: 2e3
        },
        fogColor: {
            type: "c",
            value: new THREE.Color(16777215)
        }
    },
    shadowmap: {
        shadowMap: {
            type: "tv",
            value: []
        },
        shadowMapSize: {
            type: "v2v",
            value: []
        },
        shadowBias: {
            type: "fv1",
            value: []
        },
        shadowDarkness: {
            type: "fv1",
            value: []
        },
        shadowMatrix: {
            type: "m4v",
            value: []
        }
    }
},
THREE.ShaderLib = {
    basic: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.fog, THREE.UniformsLib.shadowmap]),
        vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.uv_pars_vertex, THREE.ShaderChunk.uv2_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.uv_vertex, THREE.ShaderChunk.uv2_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.skinbase_vertex, "	#ifdef USE_ENVMAP", THREE.ShaderChunk.beginnormal_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "	#endif", THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.uv_pars_fragment, THREE.ShaderChunk.uv2_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.aomap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	vec3 totalAmbientLight = vec3( 1.0 );\n	vec3 shadowMask = vec3( 1.0 );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.aomap_fragment, THREE.ShaderChunk.shadowmap_fragment, "	outgoingLight = diffuseColor.rgb * totalAmbientLight * shadowMask;", THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
    },
    lambert: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            }
        }]),
        vertexShader: ["#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.uv_pars_vertex, THREE.ShaderChunk.uv2_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_lambert_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.uv_vertex, THREE.ShaderChunk.uv2_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.beginnormal_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_lambert_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nuniform vec3 ambientLightColor;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n	varying vec3 vLightBack;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.uv_pars_fragment, THREE.ShaderChunk.uv2_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	vec3 totalAmbientLight = ambientLightColor;\n	vec3 shadowMask = vec3( 1.0 );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.shadowmap_fragment, "	#ifdef DOUBLE_SIDED\n		if ( gl_FrontFacing )\n			outgoingLight += diffuseColor.rgb * ( vLightFront * shadowMask + totalAmbientLight ) + emissive;\n		else\n			outgoingLight += diffuseColor.rgb * ( vLightBack * shadowMask + totalAmbientLight ) + emissive;\n	#else\n		outgoingLight += diffuseColor.rgb * ( vLightFront * shadowMask + totalAmbientLight ) + emissive;\n	#endif", THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
    },
    phong: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.aomap, THREE.UniformsLib.lightmap, THREE.UniformsLib.emissivemap, THREE.UniformsLib.bumpmap, THREE.UniformsLib.normalmap, THREE.UniformsLib.displacementmap, THREE.UniformsLib.fog, THREE.UniformsLib.lights, THREE.UniformsLib.shadowmap, {
            emissive: {
                type: "c",
                value: new THREE.Color(0)
            },
            specular: {
                type: "c",
                value: new THREE.Color(1118481)
            },
            shininess: {
                type: "f",
                value: 30
            }
        }]),
        vertexShader: ["#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n	varying vec3 vNormal;\n#endif", THREE.ShaderChunk.common, THREE.ShaderChunk.uv_pars_vertex, THREE.ShaderChunk.uv2_pars_vertex, THREE.ShaderChunk.displacementmap_pars_vertex, THREE.ShaderChunk.envmap_pars_vertex, THREE.ShaderChunk.lights_phong_pars_vertex, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.uv_vertex, THREE.ShaderChunk.uv2_vertex, THREE.ShaderChunk.color_vertex, THREE.ShaderChunk.beginnormal_vertex, THREE.ShaderChunk.morphnormal_vertex, THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.skinnormal_vertex, THREE.ShaderChunk.defaultnormal_vertex, "#ifndef FLAT_SHADED\n	vNormal = normalize( transformedNormal );\n#endif", THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.displacementmap_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "	vViewPosition = - mvPosition.xyz;", THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.envmap_vertex, THREE.ShaderChunk.lights_phong_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.uv_pars_fragment, THREE.ShaderChunk.uv2_pars_fragment, THREE.ShaderChunk.map_pars_fragment, THREE.ShaderChunk.alphamap_pars_fragment, THREE.ShaderChunk.aomap_pars_fragment, THREE.ShaderChunk.lightmap_pars_fragment, THREE.ShaderChunk.emissivemap_pars_fragment, THREE.ShaderChunk.envmap_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.lights_phong_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.bumpmap_pars_fragment, THREE.ShaderChunk.normalmap_pars_fragment, THREE.ShaderChunk.specularmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );\n	vec3 totalAmbientLight = ambientLightColor;\n	vec3 totalEmissiveLight = emissive;\n	vec3 shadowMask = vec3( 1.0 );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphamap_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.specularmap_fragment, THREE.ShaderChunk.normal_phong_fragment, THREE.ShaderChunk.lightmap_fragment, THREE.ShaderChunk.hemilight_fragment, THREE.ShaderChunk.aomap_fragment, THREE.ShaderChunk.emissivemap_fragment, THREE.ShaderChunk.lights_phong_fragment, THREE.ShaderChunk.shadowmap_fragment, "totalDiffuseLight *= shadowMask;\ntotalSpecularLight *= shadowMask;\n#ifdef METAL\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) * specular + totalSpecularLight + totalEmissiveLight;\n#else\n	outgoingLight += diffuseColor.rgb * ( totalDiffuseLight + totalAmbientLight ) + totalSpecularLight + totalEmissiveLight;\n#endif", THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.linear_to_gamma_fragment, THREE.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
    },
    points: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.points, THREE.UniformsLib.shadowmap]),
        vertexShader: ["uniform float size;\nuniform float scale;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.shadowmap_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	#ifdef USE_SIZEATTENUATION\n		gl_PointSize = size * ( scale / length( mvPosition.xyz ) );\n	#else\n		gl_PointSize = size;\n	#endif\n	gl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, THREE.ShaderChunk.worldpos_vertex, THREE.ShaderChunk.shadowmap_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 psColor;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.map_particle_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.shadowmap_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( psColor, opacity );\n	vec3 shadowMask = vec3( 1.0 );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.map_particle_fragment, THREE.ShaderChunk.color_fragment, THREE.ShaderChunk.alphatest_fragment, THREE.ShaderChunk.shadowmap_fragment, "	outgoingLight = diffuseColor.rgb * shadowMask;", THREE.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
    },
    dashed: {
        uniforms: THREE.UniformsUtils.merge([THREE.UniformsLib.common, THREE.UniformsLib.fog, {
            scale: {
                type: "f",
                value: 1
            },
            dashSize: {
                type: "f",
                value: 1
            },
            totalSize: {
                type: "f",
                value: 2
            }
        }]),
        vertexShader: ["uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.color_vertex, "	vLineDistance = scale * lineDistance;\n	vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n	gl_Position = projectionMatrix * mvPosition;", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;", THREE.ShaderChunk.common, THREE.ShaderChunk.color_pars_fragment, THREE.ShaderChunk.fog_pars_fragment, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n	if ( mod( vLineDistance, totalSize ) > dashSize ) {\n		discard;\n	}\n	vec3 outgoingLight = vec3( 0.0 );\n	vec4 diffuseColor = vec4( diffuse, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, THREE.ShaderChunk.color_fragment, "	outgoingLight = diffuseColor.rgb;", THREE.ShaderChunk.fog_fragment, "	gl_FragColor = vec4( outgoingLight, diffuseColor.a );\n}"].join("\n")
    },
    depth: {
        uniforms: {
            mNear: {
                type: "f",
                value: 1
            },
            mFar: {
                type: "f",
                value: 2e3
            },
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform float mNear;\nuniform float mFar;\nuniform float opacity;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {", THREE.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT\n		float depth = gl_FragDepthEXT / gl_FragCoord.w;\n	#else\n		float depth = gl_FragCoord.z / gl_FragCoord.w;\n	#endif\n	float color = 1.0 - smoothstep( mNear, mFar, depth );\n	gl_FragColor = vec4( vec3( color ), opacity );\n}"].join("\n")
    },
    normal: {
        uniforms: {
            opacity: {
                type: "f",
                value: 1
            }
        },
        vertexShader: ["varying vec3 vNormal;", THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n	vNormal = normalize( normalMatrix * normal );", THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform float opacity;\nvarying vec3 vNormal;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n	gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
    },
    cube: {
        uniforms: {
            tCube: {
                type: "t",
                value: null
            },
            tFlip: {
                type: "f",
                value: -1
            }
        },
        vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform samplerCube tCube;\nuniform float tFlip;\nvarying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\n	gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
    },
    equirect: {
        uniforms: {
            tEquirect: {
                type: "t",
                value: null
            },
            tFlip: {
                type: "f",
                value: -1
            }
        },
        vertexShader: ["varying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {\n	vWorldPosition = transformDirection( position, modelMatrix );\n	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: ["uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "void main() {\nvec3 direction = normalize( vWorldPosition );\nvec2 sampleUV;\nsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\nsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\ngl_FragColor = texture2D( tEquirect, sampleUV );", THREE.ShaderChunk.logdepthbuf_fragment, "}"].join("\n")
    },
    depthRGBA: {
        uniforms: {},
        vertexShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, THREE.ShaderChunk.logdepthbuf_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.logdepthbuf_vertex, "}"].join("\n"),
        fragmentShader: [THREE.ShaderChunk.common, THREE.ShaderChunk.logdepthbuf_pars_fragment, "vec4 pack_depth( const in float depth ) {\n	const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n	const vec4 bit_mask = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n	vec4 res = mod( depth * bit_shift * vec4( 255 ), vec4( 256 ) ) / vec4( 255 );\n	res -= res.xxyz * bit_mask;\n	return res;\n}\nvoid main() {", THREE.ShaderChunk.logdepthbuf_fragment, "	#ifdef USE_LOGDEPTHBUF_EXT\n		gl_FragData[ 0 ] = pack_depth( gl_FragDepthEXT );\n	#else\n		gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );\n	#endif\n}"].join("\n")
    },
    distanceRGBA: {
        uniforms: {
            lightPos: {
                type: "v3",
                value: new THREE.Vector3(0, 0, 0)
            }
        },
        vertexShader: ["varying vec4 vWorldPosition;", THREE.ShaderChunk.common, THREE.ShaderChunk.morphtarget_pars_vertex, THREE.ShaderChunk.skinning_pars_vertex, "void main() {", THREE.ShaderChunk.skinbase_vertex, THREE.ShaderChunk.begin_vertex, THREE.ShaderChunk.morphtarget_vertex, THREE.ShaderChunk.skinning_vertex, THREE.ShaderChunk.project_vertex, THREE.ShaderChunk.worldpos_vertex, "vWorldPosition = worldPosition;\n}"].join("\n"),
        fragmentShader: ["uniform vec3 lightPos;\nvarying vec4 vWorldPosition;", THREE.ShaderChunk.common, "vec4 pack1K ( float depth ) {\n   depth /= 1000.0;\n   const vec4 bitSh = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );\n	const vec4 bitMsk = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );\n	vec4 res = fract( depth * bitSh );\n	res -= res.xxyz * bitMsk;\n	return res; \n}\nfloat unpack1K ( vec4 color ) {\n	const vec4 bitSh = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );\n	return dot( color, bitSh ) * 1000.0;\n}\nvoid main () {\n	gl_FragColor = pack1K( length( vWorldPosition.xyz - lightPos.xyz ) );\n}"].join("\n")
    }
},
THREE.WebGLRenderer = function(e) {
    function t(e, t, r, i) { ! 0 === U && (e *= i, t *= i, r *= i),
        Te.clearColor(e, t, r, i)
    }

    function r() {
        Re.init(),
        Te.viewport(ie, ne, oe, ae),
        t(N.r, N.g, N.b, G)
    }

    function i() {
        te = Z = null,
        ee = "",
        $ = -1,
        Ee = !0,
        Re.reset()
    }

    function n(e) {
        e.preventDefault(),
        i(),
        r(),
        He.clear()
    }

    function o(e) {
        e = e.target,
        e.removeEventListener("dispose", o);
        e: {
            var t = He.get(e);
            if (e.image && t.__image__webglTextureCube) Te.deleteTexture(t.__image__webglTextureCube);
            else {
                if (void 0 === t.__webglInit) break e;
                Te.deleteTexture(t.__webglTexture)
            }
            He["delete"](e)
        }
        fe.textures--
    }

    function a(e) {
        e = e.target,
        e.removeEventListener("dispose", a);
        var t = He.get(e),
        r = He.get(e.texture);
        if (e && void 0 !== r.__webglTexture) {
            if (Te.deleteTexture(r.__webglTexture), e instanceof THREE.WebGLRenderTargetCube) for (r = 0; 6 > r; r++) Te.deleteFramebuffer(t.__webglFramebuffer[r]),
            Te.deleteRenderbuffer(t.__webglRenderbuffer[r]);
            else Te.deleteFramebuffer(t.__webglFramebuffer),
            Te.deleteRenderbuffer(t.__webglRenderbuffer);
            He["delete"](e.texture),
            He["delete"](e)
        }
        fe.textures--
    }

    function s(e) {
        e = e.target,
        e.removeEventListener("dispose", s),
        h(e),
        He["delete"](e)
    }

    function h(e) {
        var t = He.get(e).program;
        e.program = void 0,
        void 0 !== t && be.releaseProgram(t)
    }

    function c(e, t) {
        return t[0] - e[0]
    }

    function l(e, t) {
        return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder: e.material.id !== t.material.id ? e.material.id - t.material.id: e.z !== t.z ? e.z - t.z: e.id - t.id
    }

    function u(e, t) {
        return e.object.renderOrder !== t.object.renderOrder ? e.object.renderOrder - t.object.renderOrder: e.z !== t.z ? t.z - e.z: e.id - t.id
    }

    function p(e, t, r, i, n) {
        var o;
        r.transparent ? (i = W, o = ++X) : (i = z, o = ++j),
        o = i[o],
        void 0 !== o ? (o.id = e.id, o.object = e, o.geometry = t, o.material = r, o.z = ue.z, o.group = n) : (o = {
            id: e.id,
            object: e,
            geometry: t,
            material: r,
            z: ue.z,
            group: n
        },
        i.push(o))
    }

    function E(e, t) {
        if (!1 !== e.visible) {
            if (0 !== (e.channels.mask & t.channels.mask)) if (e instanceof THREE.Light) I.push(e);
            else if (e instanceof THREE.Sprite) Y.push(e);
            else if (e instanceof THREE.LensFlare) K.push(e);
            else if (e instanceof THREE.ImmediateRenderObject) ! 0 === Q.sortObjects && (ue.setFromMatrixPosition(e.matrixWorld), ue.applyProjection(le)),
            p(e, null, e.material, ue.z, null);
            else if ((e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && (e instanceof THREE.SkinnedMesh && e.skeleton.update(), !1 === e.frustumCulled || !0 === ce.intersectsObject(e))) {
                var r = e.material;
                if (!0 === r.visible) { ! 0 === Q.sortObjects && (ue.setFromMatrixPosition(e.matrixWorld), ue.applyProjection(le));
                    var i = xe.update(e);
                    if (r instanceof THREE.MeshFaceMaterial) for (var n = i.groups,
                    o = r.materials,
                    r = 0,
                    a = n.length; a > r; r++) {
                        var s = n[r],
                        h = o[s.materialIndex]; ! 0 === h.visible && p(e, i, h, ue.z, s)
                    } else p(e, i, r, ue.z, null)
                }
            }
            for (i = e.children, r = 0, a = i.length; a > r; r++) E(i[r], t)
        }
    }

    function d(e, t, r, i, n) {
        for (var o = 0,
        a = e.length; a > o; o++) {
            var s = e[o],
            h = s.object,
            c = s.geometry,
            l = void 0 === n ? s.material: n,
            s = s.group;
            if (h.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, h.matrixWorld), h.normalMatrix.getNormalMatrix(h.modelViewMatrix), h instanceof THREE.ImmediateRenderObject) {
                f(l);
                var u = m(t, r, i, l, h);
                ee = "",
                h.render(function(e) {
                    Q.renderBufferImmediate(e, u, l)
                })
            } else Q.renderBufferDirect(t, r, i, c, l, h, s)
        }
    }

    function f(e) {
        e.side !== THREE.DoubleSide ? Re.enable(Te.CULL_FACE) : Re.disable(Te.CULL_FACE),
        Re.setFlipSided(e.side === THREE.BackSide),
        !0 === e.transparent ? Re.setBlending(e.blending, e.blendEquation, e.blendSrc, e.blendDst, e.blendEquationAlpha, e.blendSrcAlpha, e.blendDstAlpha) : Re.setBlending(THREE.NoBlending),
        Re.setDepthFunc(e.depthFunc),
        Re.setDepthTest(e.depthTest),
        Re.setDepthWrite(e.depthWrite),
        Re.setColorWrite(e.colorWrite),
        Re.setPolygonOffset(e.polygonOffset, e.polygonOffsetFactor, e.polygonOffsetUnits)
    }

    function m(e, t, r, i, n) {
        re = 0;
        var o = He.get(i);
        if (i.needsUpdate || !o.program) {
            e: {
                var a = He.get(i),
                c = be.getParameters(i, t, r, n),
                l = be.getProgramCode(i, c),
                u = a.program,
                p = !0;
                if (void 0 === u) i.addEventListener("dispose", s);
                else if (u.code !== l) h(i);
                else {
                    if (void 0 !== c.shaderID) break e;
                    p = !1
                }
                if (p && (c.shaderID ? (u = THREE.ShaderLib[c.shaderID], a.__webglShader = {
                    name: i.type,
                    uniforms: THREE.UniformsUtils.clone(u.uniforms),
                    vertexShader: u.vertexShader,
                    fragmentShader: u.fragmentShader
                }) : a.__webglShader = {
                    name: i.type,
                    uniforms: i.uniforms,
                    vertexShader: i.vertexShader,
                    fragmentShader: i.fragmentShader
                },
                i.__webglShader = a.__webglShader, u = be.acquireProgram(i, c, l), a.program = u, i.program = u), c = u.getAttributes(), i.morphTargets) for (l = i.numSupportedMorphTargets = 0; l < Q.maxMorphTargets; l++) 0 <= c["morphTarget" + l] && i.numSupportedMorphTargets++;
                if (i.morphNormals) for (l = i.numSupportedMorphNormals = 0; l < Q.maxMorphNormals; l++) 0 <= c["morphNormal" + l] && i.numSupportedMorphNormals++;
                a.uniformsList = [];
                var E, c = a.program.getUniforms();
                for (E in a.__webglShader.uniforms)(l = c[E]) && a.uniformsList.push([a.__webglShader.uniforms[E], l])
            }
            i.needsUpdate = !1
        }
        if (l = u = p = !1, a = o.program, E = a.getUniforms(), c = o.__webglShader.uniforms, a.id !== Z && (Te.useProgram(a.program), Z = a.id, l = u = p = !0), i.id !== $ && ( - 1 === $ && (l = !0), $ = i.id, u = !0), (p || e !== te) && (Te.uniformMatrix4fv(E.projectionMatrix, !1, e.projectionMatrix.elements), ye.logarithmicDepthBuffer && Te.uniform1f(E.logDepthBufFC, 2 / (Math.log(e.far + 1) / Math.LN2)), e !== te && (te = e), (i instanceof THREE.ShaderMaterial || i instanceof THREE.MeshPhongMaterial || i.envMap) && void 0 !== E.cameraPosition && (ue.setFromMatrixPosition(e.matrixWorld), Te.uniform3f(E.cameraPosition, ue.x, ue.y, ue.z)), (i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshLambertMaterial || i instanceof THREE.MeshBasicMaterial || i instanceof THREE.ShaderMaterial || i.skinning) && void 0 !== E.viewMatrix && Te.uniformMatrix4fv(E.viewMatrix, !1, e.matrixWorldInverse.elements)), i.skinning && (n.bindMatrix && void 0 !== E.bindMatrix && Te.uniformMatrix4fv(E.bindMatrix, !1, n.bindMatrix.elements), n.bindMatrixInverse && void 0 !== E.bindMatrixInverse && Te.uniformMatrix4fv(E.bindMatrixInverse, !1, n.bindMatrixInverse.elements), ye.floatVertexTextures && n.skeleton && n.skeleton.useVertexTexture ? (void 0 !== E.boneTexture && (p = v(), Te.uniform1i(E.boneTexture, p), Q.setTexture(n.skeleton.boneTexture, p)), void 0 !== E.boneTextureWidth && Te.uniform1i(E.boneTextureWidth, n.skeleton.boneTextureWidth), void 0 !== E.boneTextureHeight && Te.uniform1i(E.boneTextureHeight, n.skeleton.boneTextureHeight)) : n.skeleton && n.skeleton.boneMatrices && void 0 !== E.boneGlobalMatrices && Te.uniformMatrix4fv(E.boneGlobalMatrices, !1, n.skeleton.boneMatrices)), u) {
            if (r && i.fog && (c.fogColor.value = r.color, r instanceof THREE.Fog ? (c.fogNear.value = r.near, c.fogFar.value = r.far) : r instanceof THREE.FogExp2 && (c.fogDensity.value = r.density)), i instanceof THREE.MeshPhongMaterial || i instanceof THREE.MeshLambertMaterial || i.lights) {
                if (Ee) {
                    var d, f, m, y, l = !0,
                    R = p = 0,
                    H = 0,
                    w = de,
                    M = e.matrixWorldInverse,
                    S = w.directional.colors,
                    _ = w.directional.positions,
                    A = w.point.colors,
                    L = w.point.positions,
                    P = w.point.distances,
                    D = w.point.decays,
                    k = w.spot.colors,
                    V = w.spot.positions,
                    O = w.spot.distances,
                    F = w.spot.directions,
                    U = w.spot.anglesCos,
                    B = w.spot.exponents,
                    N = w.spot.decays,
                    G = w.hemi.skyColors,
                    I = w.hemi.groundColors,
                    z = w.hemi.positions,
                    j = 0,
                    W = 0,
                    X = 0,
                    q = 0,
                    Y = 0,
                    K = 0,
                    J = 0,
                    ee = 0,
                    ie = d = 0;
                    for (r = y = ie = 0, u = t.length; u > r; r++) d = t[r],
                    f = d.color,
                    m = d.intensity,
                    y = d.distance,
                    d instanceof THREE.AmbientLight ? d.visible && (p += f.r, R += f.g, H += f.b) : d instanceof THREE.DirectionalLight ? (Y += 1, d.visible && (pe.setFromMatrixPosition(d.matrixWorld), ue.setFromMatrixPosition(d.target.matrixWorld), pe.sub(ue), pe.transformDirection(M), d = 3 * j, _[d + 0] = pe.x, _[d + 1] = pe.y, _[d + 2] = pe.z, g(S, d, f, m), j += 1)) : d instanceof THREE.PointLight ? (K += 1, d.visible && (ie = 3 * W, g(A, ie, f, m), ue.setFromMatrixPosition(d.matrixWorld), ue.applyMatrix4(M), L[ie + 0] = ue.x, L[ie + 1] = ue.y, L[ie + 2] = ue.z, P[W] = y, D[W] = 0 === d.distance ? 0 : d.decay, W += 1)) : d instanceof THREE.SpotLight ? (J += 1, d.visible && (ie = 3 * X, g(k, ie, f, m), pe.setFromMatrixPosition(d.matrixWorld), ue.copy(pe).applyMatrix4(M), V[ie + 0] = ue.x, V[ie + 1] = ue.y, V[ie + 2] = ue.z, O[X] = y, ue.setFromMatrixPosition(d.target.matrixWorld), pe.sub(ue), pe.transformDirection(M), F[ie + 0] = pe.x, F[ie + 1] = pe.y, F[ie + 2] = pe.z, U[X] = Math.cos(d.angle), B[X] = d.exponent, N[X] = 0 === d.distance ? 0 : d.decay, X += 1)) : d instanceof THREE.HemisphereLight && (ee += 1, d.visible && (pe.setFromMatrixPosition(d.matrixWorld), pe.transformDirection(M), y = 3 * q, z[y + 0] = pe.x, z[y + 1] = pe.y, z[y + 2] = pe.z, f = d.color, d = d.groundColor, g(G, y, f, m), g(I, y, d, m), q += 1));
                    for (r = 3 * j, u = Math.max(S.length, 3 * Y); u > r; r++) S[r] = 0;
                    for (r = 3 * W, u = Math.max(A.length, 3 * K); u > r; r++) A[r] = 0;
                    for (r = 3 * X, u = Math.max(k.length, 3 * J); u > r; r++) k[r] = 0;
                    for (r = 3 * q, u = Math.max(G.length, 3 * ee); u > r; r++) G[r] = 0;
                    for (r = 3 * q, u = Math.max(I.length, 3 * ee); u > r; r++) I[r] = 0;
                    w.directional.length = j,
                    w.point.length = W,
                    w.spot.length = X,
                    w.hemi.length = q,
                    w.ambient[0] = p,
                    w.ambient[1] = R,
                    w.ambient[2] = H,
                    Ee = !1
                }
                l ? (l = de, c.ambientLightColor.value = l.ambient, c.directionalLightColor.value = l.directional.colors, c.directionalLightDirection.value = l.directional.positions, c.pointLightColor.value = l.point.colors, c.pointLightPosition.value = l.point.positions, c.pointLightDistance.value = l.point.distances, c.pointLightDecay.value = l.point.decays, c.spotLightColor.value = l.spot.colors, c.spotLightPosition.value = l.spot.positions, c.spotLightDistance.value = l.spot.distances, c.spotLightDirection.value = l.spot.directions, c.spotLightAngleCos.value = l.spot.anglesCos, c.spotLightExponent.value = l.spot.exponents, c.spotLightDecay.value = l.spot.decays, c.hemisphereLightSkyColor.value = l.hemi.skyColors, c.hemisphereLightGroundColor.value = l.hemi.groundColors, c.hemisphereLightDirection.value = l.hemi.positions, T(c, !0)) : T(c, !1)
            }
            if (i instanceof THREE.MeshBasicMaterial || i instanceof THREE.MeshLambertMaterial || i instanceof THREE.MeshPhongMaterial) {
                c.opacity.value = i.opacity,
                c.diffuse.value = i.color,
                i.emissive && (c.emissive.value = i.emissive),
                c.map.value = i.map,
                c.specularMap.value = i.specularMap,
                c.alphaMap.value = i.alphaMap,
                i.aoMap && (c.aoMap.value = i.aoMap, c.aoMapIntensity.value = i.aoMapIntensity);
                var ne;
                i.map ? ne = i.map: i.specularMap ? ne = i.specularMap: i.displacementMap ? ne = i.displacementMap: i.normalMap ? ne = i.normalMap: i.bumpMap ? ne = i.bumpMap: i.alphaMap ? ne = i.alphaMap: i.emissiveMap && (ne = i.emissiveMap),
                void 0 !== ne && (ne instanceof THREE.WebGLRenderTarget && (ne = ne.texture), l = ne.offset, ne = ne.repeat, c.offsetRepeat.value.set(l.x, l.y, ne.x, ne.y)),
                c.envMap.value = i.envMap,
                c.flipEnvMap.value = i.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1,
                c.reflectivity.value = i.reflectivity,
                c.refractionRatio.value = i.refractionRatio
            }
            if (i instanceof THREE.LineBasicMaterial ? (c.diffuse.value = i.color, c.opacity.value = i.opacity) : i instanceof THREE.LineDashedMaterial ? (c.diffuse.value = i.color, c.opacity.value = i.opacity, c.dashSize.value = i.dashSize, c.totalSize.value = i.dashSize + i.gapSize, c.scale.value = i.scale) : i instanceof THREE.PointsMaterial ? (c.psColor.value = i.color, c.opacity.value = i.opacity, c.size.value = i.size, c.scale.value = C.height / 2, c.map.value = i.map, null !== i.map && (e = i.map.offset, ne = i.map.repeat, c.offsetRepeat.value.set(e.x, e.y, ne.x, ne.y))) : i instanceof THREE.MeshPhongMaterial ? (c.specular.value = i.specular, c.shininess.value = Math.max(i.shininess, 1e-4), i.lightMap && (c.lightMap.value = i.lightMap, c.lightMapIntensity.value = i.lightMapIntensity), i.emissiveMap && (c.emissiveMap.value = i.emissiveMap), i.bumpMap && (c.bumpMap.value = i.bumpMap, c.bumpScale.value = i.bumpScale), i.normalMap && (c.normalMap.value = i.normalMap, c.normalScale.value.copy(i.normalScale)), i.displacementMap && (c.displacementMap.value = i.displacementMap, c.displacementScale.value = i.displacementScale, c.displacementBias.value = i.displacementBias)) : i instanceof THREE.MeshDepthMaterial ? (c.mNear.value = e.near, c.mFar.value = e.far, c.opacity.value = i.opacity) : i instanceof THREE.MeshNormalMaterial && (c.opacity.value = i.opacity), n.receiveShadow && !i._shadowPass && c.shadowMatrix) for (e = i = 0, ne = t.length; ne > e; e++) l = t[e],
            !0 === l.castShadow && (l instanceof THREE.PointLight || l instanceof THREE.SpotLight || l instanceof THREE.DirectionalLight) && (r = l.shadow, l instanceof THREE.PointLight ? (ue.setFromMatrixPosition(l.matrixWorld).negate(), r.matrix.identity().setPosition(ue), c.shadowDarkness.value[i] = -r.darkness) : c.shadowDarkness.value[i] = r.darkness, c.shadowMatrix.value[i] = r.matrix, c.shadowMap.value[i] = r.map, c.shadowMapSize.value[i] = r.mapSize, c.shadowBias.value[i] = r.bias, i++);
            for (t = o.uniformsList, o = 0, i = t.length; i > o; o++) if (e = t[o][0], !1 !== e.needsUpdate) switch (c = e.type, r = e.value, ne = t[o][1], c) {
            case "1i":
                Te.uniform1i(ne, r);
                break;
            case "1f":
                Te.uniform1f(ne, r);
                break;
            case "2f":
                Te.uniform2f(ne, r[0], r[1]);
                break;
            case "3f":
                Te.uniform3f(ne, r[0], r[1], r[2]);
                break;
            case "4f":
                Te.uniform4f(ne, r[0], r[1], r[2], r[3]);
                break;
            case "1iv":
                Te.uniform1iv(ne, r);
                break;
            case "3iv":
                Te.uniform3iv(ne, r);
                break;
            case "1fv":
                Te.uniform1fv(ne, r);
                break;
            case "2fv":
                Te.uniform2fv(ne, r);
                break;
            case "3fv":
                Te.uniform3fv(ne, r);
                break;
            case "4fv":
                Te.uniform4fv(ne, r);
                break;
            case "Matrix3fv":
                Te.uniformMatrix3fv(ne, !1, r);
                break;

            case "Matrix4fv":
                Te.uniformMatrix4fv(ne, !1, r);
                break;
            case "i":
                Te.uniform1i(ne, r);
                break;
            case "f":
                Te.uniform1f(ne, r);
                break;
            case "v2":
                Te.uniform2f(ne, r.x, r.y);
                break;
            case "v3":
                Te.uniform3f(ne, r.x, r.y, r.z);
                break;
            case "v4":
                Te.uniform4f(ne, r.x, r.y, r.z, r.w);
                break;
            case "c":
                Te.uniform3f(ne, r.r, r.g, r.b);
                break;
            case "iv1":
                Te.uniform1iv(ne, r);
                break;
            case "iv":
                Te.uniform3iv(ne, r);
                break;
            case "fv1":
                Te.uniform1fv(ne, r);
                break;
            case "fv":
                Te.uniform3fv(ne, r);
                break;
            case "v2v":
                for (void 0 === e._array && (e._array = new Float32Array(2 * r.length)), u = c = 0, l = r.length; l > c; c++, u += 2) e._array[u + 0] = r[c].x,
                e._array[u + 1] = r[c].y;
                Te.uniform2fv(ne, e._array);
                break;
            case "v3v":
                for (void 0 === e._array && (e._array = new Float32Array(3 * r.length)), u = c = 0, l = r.length; l > c; c++, u += 3) e._array[u + 0] = r[c].x,
                e._array[u + 1] = r[c].y,
                e._array[u + 2] = r[c].z;
                Te.uniform3fv(ne, e._array);
                break;
            case "v4v":
                for (void 0 === e._array && (e._array = new Float32Array(4 * r.length)), u = c = 0, l = r.length; l > c; c++, u += 4) e._array[u + 0] = r[c].x,
                e._array[u + 1] = r[c].y,
                e._array[u + 2] = r[c].z,
                e._array[u + 3] = r[c].w;
                Te.uniform4fv(ne, e._array);
                break;
            case "m3":
                Te.uniformMatrix3fv(ne, !1, r.elements);
                break;
            case "m3v":
                for (void 0 === e._array && (e._array = new Float32Array(9 * r.length)), c = 0, l = r.length; l > c; c++) r[c].flattenToArrayOffset(e._array, 9 * c);
                Te.uniformMatrix3fv(ne, !1, e._array);
                break;
            case "m4":
                Te.uniformMatrix4fv(ne, !1, r.elements);
                break;
            case "m4v":
                for (void 0 === e._array && (e._array = new Float32Array(16 * r.length)), c = 0, l = r.length; l > c; c++) r[c].flattenToArrayOffset(e._array, 16 * c);
                Te.uniformMatrix4fv(ne, !1, e._array);
                break;
            case "t":
                if (u = v(), Te.uniform1i(ne, u), !r) continue;
                r instanceof THREE.CubeTexture || Array.isArray(r.image) && 6 === r.image.length ? x(r, u) : r instanceof THREE.WebGLRenderTargetCube ? b(r.texture, u) : r instanceof THREE.WebGLRenderTarget ? Q.setTexture(r.texture, u) : Q.setTexture(r, u);
                break;
            case "tv":
                for (void 0 === e._array && (e._array = []), c = 0, l = e.value.length; l > c; c++) e._array[c] = v();
                for (Te.uniform1iv(ne, e._array), c = 0, l = e.value.length; l > c; c++) r = e.value[c],
                u = e._array[c],
                r && (r instanceof THREE.CubeTexture || r.image instanceof Array && 6 === r.image.length ? x(r, u) : r instanceof THREE.WebGLRenderTarget ? Q.setTexture(r.texture, u) : r instanceof THREE.WebGLRenderTargetCube ? b(r.texture, u) : Q.setTexture(r, u));
                break;
            default:
                console.warn("THREE.WebGLRenderer: Unknown uniform type: " + c)
            }
        }
        return Te.uniformMatrix4fv(E.modelViewMatrix, !1, n.modelViewMatrix.elements),
        E.normalMatrix && Te.uniformMatrix3fv(E.normalMatrix, !1, n.normalMatrix.elements),
        void 0 !== E.modelMatrix && Te.uniformMatrix4fv(E.modelMatrix, !1, n.matrixWorld.elements),
        a
    }

    function T(e, t) {
        e.ambientLightColor.needsUpdate = t,
        e.directionalLightColor.needsUpdate = t,
        e.directionalLightDirection.needsUpdate = t,
        e.pointLightColor.needsUpdate = t,
        e.pointLightPosition.needsUpdate = t,
        e.pointLightDistance.needsUpdate = t,
        e.pointLightDecay.needsUpdate = t,
        e.spotLightColor.needsUpdate = t,
        e.spotLightPosition.needsUpdate = t,
        e.spotLightDistance.needsUpdate = t,
        e.spotLightDirection.needsUpdate = t,
        e.spotLightAngleCos.needsUpdate = t,
        e.spotLightExponent.needsUpdate = t,
        e.spotLightDecay.needsUpdate = t,
        e.hemisphereLightSkyColor.needsUpdate = t,
        e.hemisphereLightGroundColor.needsUpdate = t,
        e.hemisphereLightDirection.needsUpdate = t
    }

    function v() {
        var e = re;
        return e >= ye.maxTextures && console.warn("WebGLRenderer: trying to use " + e + " texture units while this GPU supports only " + ye.maxTextures),
        re += 1,
        e
    }

    function g(e, t, r, i) {
        e[t + 0] = r.r * i,
        e[t + 1] = r.g * i,
        e[t + 2] = r.b * i
    }

    function y(e, t, r) {
        r ? (Te.texParameteri(e, Te.TEXTURE_WRAP_S, _(t.wrapS)), Te.texParameteri(e, Te.TEXTURE_WRAP_T, _(t.wrapT)), Te.texParameteri(e, Te.TEXTURE_MAG_FILTER, _(t.magFilter)), Te.texParameteri(e, Te.TEXTURE_MIN_FILTER, _(t.minFilter))) : (Te.texParameteri(e, Te.TEXTURE_WRAP_S, Te.CLAMP_TO_EDGE), Te.texParameteri(e, Te.TEXTURE_WRAP_T, Te.CLAMP_TO_EDGE), t.wrapS === THREE.ClampToEdgeWrapping && t.wrapT === THREE.ClampToEdgeWrapping || console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.", t), Te.texParameteri(e, Te.TEXTURE_MAG_FILTER, S(t.magFilter)), Te.texParameteri(e, Te.TEXTURE_MIN_FILTER, S(t.minFilter)), t.minFilter !== THREE.NearestFilter && t.minFilter !== THREE.LinearFilter && console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.", t)),
        !(r = ge.get("EXT_texture_filter_anisotropic")) || t.type === THREE.FloatType && null === ge.get("OES_texture_float_linear") || t.type === THREE.HalfFloatType && null === ge.get("OES_texture_half_float_linear") || !(1 < t.anisotropy || He.get(t).__currentAnisotropy) || (Te.texParameterf(e, r.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(t.anisotropy, Q.getMaxAnisotropy())), He.get(t).__currentAnisotropy = t.anisotropy)
    }

    function R(e, t) {
        if (e.width > t || e.height > t) {
            var r = t / Math.max(e.width, e.height),
            i = document.createElement("canvas");
            return i.width = Math.floor(e.width * r),
            i.height = Math.floor(e.height * r),
            i.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, i.width, i.height),
            console.warn("THREE.WebGLRenderer: image is too big (" + e.width + "x" + e.height + "). Resized to " + i.width + "x" + i.height, e),
            i
        }
        return e
    }

    function H(e) {
        return THREE.Math.isPowerOfTwo(e.width) && THREE.Math.isPowerOfTwo(e.height)
    }

    function x(e, t) {
        var r = He.get(e);
        if (6 === e.image.length) if (0 < e.version && r.__version !== e.version) {
            r.__image__webglTextureCube || (e.addEventListener("dispose", o), r.__image__webglTextureCube = Te.createTexture(), fe.textures++),
            Re.activeTexture(Te.TEXTURE0 + t),
            Re.bindTexture(Te.TEXTURE_CUBE_MAP, r.__image__webglTextureCube),
            Te.pixelStorei(Te.UNPACK_FLIP_Y_WEBGL, e.flipY);
            for (var i = e instanceof THREE.CompressedTexture,
            n = e.image[0] instanceof THREE.DataTexture, a = [], s = 0; 6 > s; s++) a[s] = !Q.autoScaleCubemaps || i || n ? n ? e.image[s].image: e.image[s] : R(e.image[s], ye.maxCubemapSize);
            var h = H(a[0]),
            c = _(e.format),
            l = _(e.type);
            for (y(Te.TEXTURE_CUBE_MAP, e, h), s = 0; 6 > s; s++) if (i) for (var u, p = a[s].mipmaps, E = 0, d = p.length; d > E; E++) u = p[E],
            e.format !== THREE.RGBAFormat && e.format !== THREE.RGBFormat ? -1 < Re.getCompressedTextureFormats().indexOf(c) ? Re.compressedTexImage2D(Te.TEXTURE_CUBE_MAP_POSITIVE_X + s, E, c, u.width, u.height, 0, u.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setCubeTexture()") : Re.texImage2D(Te.TEXTURE_CUBE_MAP_POSITIVE_X + s, E, c, u.width, u.height, 0, c, l, u.data);
            else n ? Re.texImage2D(Te.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, c, a[s].width, a[s].height, 0, c, l, a[s].data) : Re.texImage2D(Te.TEXTURE_CUBE_MAP_POSITIVE_X + s, 0, c, c, l, a[s]);
            e.generateMipmaps && h && Te.generateMipmap(Te.TEXTURE_CUBE_MAP),
            r.__version = e.version,
            e.onUpdate && e.onUpdate(e)
        } else Re.activeTexture(Te.TEXTURE0 + t),
        Re.bindTexture(Te.TEXTURE_CUBE_MAP, r.__image__webglTextureCube)
    }

    function b(e, t) {
        Re.activeTexture(Te.TEXTURE0 + t),
        Re.bindTexture(Te.TEXTURE_CUBE_MAP, He.get(e).__webglTexture)
    }

    function w(e, t, r) {
        Te.bindFramebuffer(Te.FRAMEBUFFER, e),
        Te.framebufferTexture2D(Te.FRAMEBUFFER, Te.COLOR_ATTACHMENT0, r, He.get(t.texture).__webglTexture, 0)
    }

    function M(e, t) {
        Te.bindRenderbuffer(Te.RENDERBUFFER, e),
        t.depthBuffer && !t.stencilBuffer ? (Te.renderbufferStorage(Te.RENDERBUFFER, Te.DEPTH_COMPONENT16, t.width, t.height), Te.framebufferRenderbuffer(Te.FRAMEBUFFER, Te.DEPTH_ATTACHMENT, Te.RENDERBUFFER, e)) : t.depthBuffer && t.stencilBuffer ? (Te.renderbufferStorage(Te.RENDERBUFFER, Te.DEPTH_STENCIL, t.width, t.height), Te.framebufferRenderbuffer(Te.FRAMEBUFFER, Te.DEPTH_STENCIL_ATTACHMENT, Te.RENDERBUFFER, e)) : Te.renderbufferStorage(Te.RENDERBUFFER, Te.RGBA4, t.width, t.height)
    }

    function S(e) {
        return e === THREE.NearestFilter || e === THREE.NearestMipMapNearestFilter || e === THREE.NearestMipMapLinearFilter ? Te.NEAREST: Te.LINEAR
    }

    function _(e) {
        var t;
        if (e === THREE.RepeatWrapping) return Te.REPEAT;
        if (e === THREE.ClampToEdgeWrapping) return Te.CLAMP_TO_EDGE;
        if (e === THREE.MirroredRepeatWrapping) return Te.MIRRORED_REPEAT;
        if (e === THREE.NearestFilter) return Te.NEAREST;
        if (e === THREE.NearestMipMapNearestFilter) return Te.NEAREST_MIPMAP_NEAREST;
        if (e === THREE.NearestMipMapLinearFilter) return Te.NEAREST_MIPMAP_LINEAR;
        if (e === THREE.LinearFilter) return Te.LINEAR;
        if (e === THREE.LinearMipMapNearestFilter) return Te.LINEAR_MIPMAP_NEAREST;
        if (e === THREE.LinearMipMapLinearFilter) return Te.LINEAR_MIPMAP_LINEAR;
        if (e === THREE.UnsignedByteType) return Te.UNSIGNED_BYTE;
        if (e === THREE.UnsignedShort4444Type) return Te.UNSIGNED_SHORT_4_4_4_4;
        if (e === THREE.UnsignedShort5551Type) return Te.UNSIGNED_SHORT_5_5_5_1;
        if (e === THREE.UnsignedShort565Type) return Te.UNSIGNED_SHORT_5_6_5;
        if (e === THREE.ByteType) return Te.BYTE;
        if (e === THREE.ShortType) return Te.SHORT;
        if (e === THREE.UnsignedShortType) return Te.UNSIGNED_SHORT;
        if (e === THREE.IntType) return Te.INT;
        if (e === THREE.UnsignedIntType) return Te.UNSIGNED_INT;
        if (e === THREE.FloatType) return Te.FLOAT;
        if (t = ge.get("OES_texture_half_float"), null !== t && e === THREE.HalfFloatType) return t.HALF_FLOAT_OES;
        if (e === THREE.AlphaFormat) return Te.ALPHA;
        if (e === THREE.RGBFormat) return Te.RGB;
        if (e === THREE.RGBAFormat) return Te.RGBA;
        if (e === THREE.LuminanceFormat) return Te.LUMINANCE;
        if (e === THREE.LuminanceAlphaFormat) return Te.LUMINANCE_ALPHA;
        if (e === THREE.AddEquation) return Te.FUNC_ADD;
        if (e === THREE.SubtractEquation) return Te.FUNC_SUBTRACT;
        if (e === THREE.ReverseSubtractEquation) return Te.FUNC_REVERSE_SUBTRACT;
        if (e === THREE.ZeroFactor) return Te.ZERO;
        if (e === THREE.OneFactor) return Te.ONE;
        if (e === THREE.SrcColorFactor) return Te.SRC_COLOR;
        if (e === THREE.OneMinusSrcColorFactor) return Te.ONE_MINUS_SRC_COLOR;
        if (e === THREE.SrcAlphaFactor) return Te.SRC_ALPHA;
        if (e === THREE.OneMinusSrcAlphaFactor) return Te.ONE_MINUS_SRC_ALPHA;
        if (e === THREE.DstAlphaFactor) return Te.DST_ALPHA;
        if (e === THREE.OneMinusDstAlphaFactor) return Te.ONE_MINUS_DST_ALPHA;
        if (e === THREE.DstColorFactor) return Te.DST_COLOR;
        if (e === THREE.OneMinusDstColorFactor) return Te.ONE_MINUS_DST_COLOR;
        if (e === THREE.SrcAlphaSaturateFactor) return Te.SRC_ALPHA_SATURATE;
        if (t = ge.get("WEBGL_compressed_texture_s3tc"), null !== t) {
            if (e === THREE.RGB_S3TC_DXT1_Format) return t.COMPRESSED_RGB_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT1_Format) return t.COMPRESSED_RGBA_S3TC_DXT1_EXT;
            if (e === THREE.RGBA_S3TC_DXT3_Format) return t.COMPRESSED_RGBA_S3TC_DXT3_EXT;
            if (e === THREE.RGBA_S3TC_DXT5_Format) return t.COMPRESSED_RGBA_S3TC_DXT5_EXT
        }
        if (t = ge.get("WEBGL_compressed_texture_pvrtc"), null !== t) {
            if (e === THREE.RGB_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
            if (e === THREE.RGB_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
            if (e === THREE.RGBA_PVRTC_4BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
            if (e === THREE.RGBA_PVRTC_2BPPV1_Format) return t.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
        }
        if (t = ge.get("EXT_blend_minmax"), null !== t) {
            if (e === THREE.MinEquation) return t.MIN_EXT;
            if (e === THREE.MaxEquation) return t.MAX_EXT
        }
        return 0
    }
    console.log("THREE.WebGLRenderer", THREE.REVISION),
    e = e || {};
    var C = void 0 !== e.canvas ? e.canvas: document.createElement("canvas"),
    A = void 0 !== e.context ? e.context: null,
    L = C.width,
    P = C.height,
    D = 1,
    k = void 0 !== e.alpha ? e.alpha: !1,
    V = void 0 !== e.depth ? e.depth: !0,
    O = void 0 !== e.stencil ? e.stencil: !0,
    F = void 0 !== e.antialias ? e.antialias: !1,
    U = void 0 !== e.premultipliedAlpha ? e.premultipliedAlpha: !0,
    B = void 0 !== e.preserveDrawingBuffer ? e.preserveDrawingBuffer: !1,
    N = new THREE.Color(0),
    G = 0,
    I = [],
    z = [],
    j = -1,
    W = [],
    X = -1,
    q = new Float32Array(8),
    Y = [],
    K = [];
    this.domElement = C,
    this.context = null,
    this.sortObjects = this.autoClearStencil = this.autoClearDepth = this.autoClearColor = this.autoClear = !0,
    this.gammaFactor = 2,
    this.gammaOutput = this.gammaInput = !1,
    this.maxMorphTargets = 8,
    this.maxMorphNormals = 4,
    this.autoScaleCubemaps = !0;
    var Q = this,
    Z = null,
    J = null,
    $ = -1,
    ee = "",
    te = null,
    re = 0,
    ie = 0,
    ne = 0,
    oe = C.width,
    ae = C.height,
    se = 0,
    he = 0,
    ce = new THREE.Frustum,
    le = new THREE.Matrix4,
    ue = new THREE.Vector3,
    pe = new THREE.Vector3,
    Ee = !0,
    de = {
        ambient: [0, 0, 0],
        directional: {
            length: 0,
            colors: [],
            positions: []
        },
        point: {
            length: 0,
            colors: [],
            positions: [],
            distances: [],
            decays: []
        },
        spot: {
            length: 0,
            colors: [],
            positions: [],
            distances: [],
            directions: [],
            anglesCos: [],
            exponents: [],
            decays: []
        },
        hemi: {
            length: 0,
            skyColors: [],
            groundColors: [],
            positions: []
        }
    },
    fe = {
        geometries: 0,
        textures: 0
    },
    me = {
        calls: 0,
        vertices: 0,
        faces: 0,
        points: 0
    };
    this.info = {
        render: me,
        memory: fe,
        programs: null
    };
    var Te;
    try {
        if (k = {
            alpha: k,
            depth: V,
            stencil: O,
            antialias: F,
            premultipliedAlpha: U,
            preserveDrawingBuffer: B
        },
        Te = A || C.getContext("webgl", k) || C.getContext("experimental-webgl", k), null === Te) {
            if (null !== C.getContext("webgl")) throw "Error creating WebGL context with your selected attributes.";
            throw "Error creating WebGL context."
        }
        C.addEventListener("webglcontextlost", n, !1)
    } catch(ve) {
        console.error("THREE.WebGLRenderer: " + ve)
    }
    var ge = new THREE.WebGLExtensions(Te);
    ge.get("OES_texture_float"),
    ge.get("OES_texture_float_linear"),
    ge.get("OES_texture_half_float"),
    ge.get("OES_texture_half_float_linear"),
    ge.get("OES_standard_derivatives"),
    ge.get("ANGLE_instanced_arrays"),
    ge.get("OES_element_index_uint") && (THREE.BufferGeometry.MaxIndex = 4294967296);
    var ye = new THREE.WebGLCapabilities(Te, ge, e),
    Re = new THREE.WebGLState(Te, ge, _),
    He = new THREE.WebGLProperties,
    xe = new THREE.WebGLObjects(Te, He, this.info),
    be = new THREE.WebGLPrograms(this, ye);
    this.info.programs = be.programs;
    var we = new THREE.WebGLBufferRenderer(Te, ge, me),
    Me = new THREE.WebGLIndexedBufferRenderer(Te, ge, me);
    r(),
    this.context = Te,
    this.capabilities = ye,
    this.extensions = ge,
    this.state = Re;
    var Se = new THREE.WebGLShadowMap(this, I, xe);
    this.shadowMap = Se;
    var _e = new THREE.SpritePlugin(this, Y),
    Ce = new THREE.LensFlarePlugin(this, K);
    this.getContext = function() {
        return Te
    },
    this.getContextAttributes = function() {
        return Te.getContextAttributes()
    },
    this.forceContextLoss = function() {
        ge.get("WEBGL_lose_context").loseContext()
    },
    this.getMaxAnisotropy = function() {
        var e;
        return function() {
            if (void 0 !== e) return e;
            var t = ge.get("EXT_texture_filter_anisotropic");
            return e = null !== t ? Te.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0

        }
    } (),
    this.getPrecision = function() {
        return ye.precision
    },
    this.getPixelRatio = function() {
        return D
    },
    this.setPixelRatio = function(e) {
        void 0 !== e && (D = e)
    },
    this.getSize = function() {
        return {

            width: L,
            height: P
        }
    },
    this.setSize = function(e, t, r) {
        L = e,
        P = t,
        C.width = e * D,
        C.height = t * D,
        !1 !== r && (C.style.width = e + "px", C.style.height = t + "px"),
        this.setViewport(0, 0, e, t)
    },
    this.setViewport = function(e, t, r, i) {
        ie = e * D,
        ne = t * D,
        oe = r * D,
        ae = i * D,
        Te.viewport(ie, ne, oe, ae)
    },
    this.getViewport = function(e) {
        e.x = ie / D,
        e.y = ne / D,
        e.z = oe / D,
        e.w = ae / D
    },
    this.setScissor = function(e, t, r, i) {
        Te.scissor(e * D, t * D, r * D, i * D)
    },
    this.enableScissorTest = function(e) {
        Re.setScissorTest(e)
    },
    this.getClearColor = function() {
        return N
    },
    this.setClearColor = function(e, r) {
        N.set(e),
        G = void 0 !== r ? r: 1,
        t(N.r, N.g, N.b, G)
    },
    this.getClearAlpha = function() {
        return G
    },
    this.setClearAlpha = function(e) {
        G = e,
        t(N.r, N.g, N.b, G)
    },
    this.clear = function(e, t, r) {
        var i = 0; (void 0 === e || e) && (i |= Te.COLOR_BUFFER_BIT),
        (void 0 === t || t) && (i |= Te.DEPTH_BUFFER_BIT),
        (void 0 === r || r) && (i |= Te.STENCIL_BUFFER_BIT),
        Te.clear(i)
    },
    this.clearColor = function() {
        Te.clear(Te.COLOR_BUFFER_BIT)
    },
    this.clearDepth = function() {
        Te.clear(Te.DEPTH_BUFFER_BIT)
    },
    this.clearStencil = function() {
        Te.clear(Te.STENCIL_BUFFER_BIT)
    },
    this.clearTarget = function(e, t, r, i) {
        this.setRenderTarget(e),
        this.clear(t, r, i)
    },
    this.resetGLState = i,
    this.dispose = function() {
        C.removeEventListener("webglcontextlost", n, !1)
    },
    this.renderBufferImmediate = function(e, t, r) {
        Re.initAttributes();
        var i = He.get(e);
        if (e.hasPositions && !i.position && (i.position = Te.createBuffer()), e.hasNormals && !i.normal && (i.normal = Te.createBuffer()), e.hasUvs && !i.uv && (i.uv = Te.createBuffer()), e.hasColors && !i.color && (i.color = Te.createBuffer()), t = t.getAttributes(), e.hasPositions && (Te.bindBuffer(Te.ARRAY_BUFFER, i.position), Te.bufferData(Te.ARRAY_BUFFER, e.positionArray, Te.DYNAMIC_DRAW), Re.enableAttribute(t.position), Te.vertexAttribPointer(t.position, 3, Te.FLOAT, !1, 0, 0)), e.hasNormals) {
            if (Te.bindBuffer(Te.ARRAY_BUFFER, i.normal), "MeshPhongMaterial" !== r.type && r.shading === THREE.FlatShading) for (var n = 0,
            o = 3 * e.count; o > n; n += 9) {
                var a = e.normalArray,
                s = (a[n + 0] + a[n + 3] + a[n + 6]) / 3,
                h = (a[n + 1] + a[n + 4] + a[n + 7]) / 3,
                c = (a[n + 2] + a[n + 5] + a[n + 8]) / 3;
                a[n + 0] = s,
                a[n + 1] = h,
                a[n + 2] = c,
                a[n + 3] = s,
                a[n + 4] = h,
                a[n + 5] = c,
                a[n + 6] = s,
                a[n + 7] = h,
                a[n + 8] = c
            }
            Te.bufferData(Te.ARRAY_BUFFER, e.normalArray, Te.DYNAMIC_DRAW),
            Re.enableAttribute(t.normal),
            Te.vertexAttribPointer(t.normal, 3, Te.FLOAT, !1, 0, 0)
        }
        e.hasUvs && r.map && (Te.bindBuffer(Te.ARRAY_BUFFER, i.uv), Te.bufferData(Te.ARRAY_BUFFER, e.uvArray, Te.DYNAMIC_DRAW), Re.enableAttribute(t.uv), Te.vertexAttribPointer(t.uv, 2, Te.FLOAT, !1, 0, 0)),
        e.hasColors && r.vertexColors !== THREE.NoColors && (Te.bindBuffer(Te.ARRAY_BUFFER, i.color), Te.bufferData(Te.ARRAY_BUFFER, e.colorArray, Te.DYNAMIC_DRAW), Re.enableAttribute(t.color), Te.vertexAttribPointer(t.color, 3, Te.FLOAT, !1, 0, 0)),
        Re.disableUnusedAttributes(),
        Te.drawArrays(Te.TRIANGLES, 0, e.count),
        e.count = 0
    },
    this.renderBufferDirect = function(e, t, r, i, n, o, a) {
        f(n);
        var s = m(e, t, r, n, o),
        h = !1;
        if (e = i.id + "_" + s.id + "_" + n.wireframe, e !== ee && (ee = e, h = !0), t = o.morphTargetInfluences, void 0 !== t) {
            for (e = [], r = 0, h = t.length; h > r; r++) {
                var l = t[r];
                e.push([l, r])
            }
            e.sort(c),
            8 < e.length && (e.length = 8);
            var u = i.morphAttributes;
            for (r = 0, h = e.length; h > r; r++) l = e[r],
            q[r] = l[0],
            0 !== l[0] ? (t = l[1], !0 === n.morphTargets && u.position && i.addAttribute("morphTarget" + r, u.position[t]), !0 === n.morphNormals && u.normal && i.addAttribute("morphNormal" + r, u.normal[t])) : (!0 === n.morphTargets && i.removeAttribute("morphTarget" + r), !0 === n.morphNormals && i.removeAttribute("morphNormal" + r));
            e = s.getUniforms(),
            null !== e.morphTargetInfluences && Te.uniform1fv(e.morphTargetInfluences, q),
            h = !0
        }
        if (t = i.index, r = i.attributes.position, !0 === n.wireframe && (t = xe.getWireframeAttribute(i)), null !== t ? (e = Me, e.setIndex(t)) : e = we, h) {
            var p, h = void 0;
            if (i instanceof THREE.InstancedBufferGeometry && (p = ge.get("ANGLE_instanced_arrays"), null === p)) console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
            else {
                void 0 === h && (h = 0),
                Re.initAttributes();
                var E, l = i.attributes,
                s = s.getAttributes(),
                u = n.defaultAttributeValues;
                for (E in s) {
                    var d = s[E];
                    if (d >= 0) {
                        var T = l[E];
                        if (void 0 !== T) {
                            var v = T.itemSize,
                            g = xe.getAttributeBuffer(T);
                            if (T instanceof THREE.InterleavedBufferAttribute) {
                                var y = T.data,
                                R = y.stride,
                                T = T.offset;
                                y instanceof THREE.InstancedInterleavedBuffer ? (Re.enableAttributeAndDivisor(d, y.meshPerAttribute, p), void 0 === i.maxInstancedCount && (i.maxInstancedCount = y.meshPerAttribute * y.count)) : Re.enableAttribute(d),
                                Te.bindBuffer(Te.ARRAY_BUFFER, g),
                                Te.vertexAttribPointer(d, v, Te.FLOAT, !1, R * y.array.BYTES_PER_ELEMENT, (h * R + T) * y.array.BYTES_PER_ELEMENT)
                            } else T instanceof THREE.InstancedBufferAttribute ? (Re.enableAttributeAndDivisor(d, T.meshPerAttribute, p), void 0 === i.maxInstancedCount && (i.maxInstancedCount = T.meshPerAttribute * T.count)) : Re.enableAttribute(d),
                            Te.bindBuffer(Te.ARRAY_BUFFER, g),
                            Te.vertexAttribPointer(d, v, Te.FLOAT, !1, 0, h * v * 4)
                        } else if (void 0 !== u && (v = u[E], void 0 !== v)) switch (v.length) {
                        case 2:
                            Te.vertexAttrib2fv(d, v);
                            break;
                        case 3:
                            Te.vertexAttrib3fv(d, v);
                            break;
                        case 4:
                            Te.vertexAttrib4fv(d, v);
                            break;
                        default:
                            Te.vertexAttrib1fv(d, v)
                        }
                    }
                }
                Re.disableUnusedAttributes()
            }
            null !== t && Te.bindBuffer(Te.ELEMENT_ARRAY_BUFFER, xe.getAttributeBuffer(t))
        }
        p = 1 / 0,
        null !== t ? p = t.count: void 0 !== r && (p = r.count),
        E = i.drawRange.start,
        t = i.drawRange.count,
        r = null !== a ? a.start: 0,
        h = null !== a ? a.count: 1 / 0,
        a = Math.max(0, E, r),
        p = Math.min(0 + p, E + t, r + h) - 1,
        p = Math.max(0, p - a + 1),
        o instanceof THREE.Mesh ? (!0 === n.wireframe ? (Re.setLineWidth(n.wireframeLinewidth * D), e.setMode(Te.LINES)) : e.setMode(Te.TRIANGLES), i instanceof THREE.InstancedBufferGeometry && 0 < i.maxInstancedCount ? e.renderInstances(i) : e.render(a, p)) : o instanceof THREE.Line ? (i = n.linewidth, void 0 === i && (i = 1), Re.setLineWidth(i * D), o instanceof THREE.LineSegments ? e.setMode(Te.LINES) : e.setMode(Te.LINE_STRIP), e.render(a, p)) : o instanceof THREE.Points && (e.setMode(Te.POINTS), e.render(a, p))
    },
    this.render = function(e, t, r, i) {
        if (!1 == t instanceof THREE.Camera) console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        else {
            var n = e.fog;
            ee = "",
            $ = -1,
            te = null,
            Ee = !0,
            !0 === e.autoUpdate && e.updateMatrixWorld(),
            null === t.parent && t.updateMatrixWorld(),
            t.matrixWorldInverse.getInverse(t.matrixWorld),
            le.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            ce.setFromMatrix(le),
            I.length = 0,
            X = j = -1,
            Y.length = 0,
            K.length = 0,
            E(e, t),
            z.length = j + 1,
            W.length = X + 1,
            !0 === Q.sortObjects && (z.sort(l), W.sort(u)),
            Se.render(e),
            me.calls = 0,
            me.vertices = 0,
            me.faces = 0,
            me.points = 0,
            this.setRenderTarget(r),
            (this.autoClear || i) && this.clear(this.autoClearColor, this.autoClearDepth, this.autoClearStencil),
            e.overrideMaterial ? (i = e.overrideMaterial, d(z, t, I, n, i), d(W, t, I, n, i)) : (Re.setBlending(THREE.NoBlending), d(z, t, I, n), d(W, t, I, n)),
            _e.render(e, t),
            Ce.render(e, t, se, he),
            r && (e = r.texture, t = H(r), e.generateMipmaps && t && e.minFilter !== THREE.NearestFilter && e.minFilter !== THREE.LinearFilter && (e = r instanceof THREE.WebGLRenderTargetCube ? Te.TEXTURE_CUBE_MAP: Te.TEXTURE_2D, r = He.get(r.texture).__webglTexture, Re.bindTexture(e, r), Te.generateMipmap(e), Re.bindTexture(e, null))),
            Re.setDepthTest(!0),
            Re.setDepthWrite(!0),
            Re.setColorWrite(!0)
        }
    },
    this.setFaceCulling = function(e, t) {
        e === THREE.CullFaceNone ? Re.disable(Te.CULL_FACE) : (t === THREE.FrontFaceDirectionCW ? Te.frontFace(Te.CW) : Te.frontFace(Te.CCW), e === THREE.CullFaceBack ? Te.cullFace(Te.BACK) : e === THREE.CullFaceFront ? Te.cullFace(Te.FRONT) : Te.cullFace(Te.FRONT_AND_BACK), Re.enable(Te.CULL_FACE))
    },
    this.setTexture = function(e, t) {
        var r = He.get(e);
        if (0 < e.version && r.__version !== e.version) {
            var i = e.image;
            if (void 0 === i) console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined", e);
            else if (!1 === i.complete) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete", e);
            else {
                if (void 0 === r.__webglInit && (r.__webglInit = !0, e.addEventListener("dispose", o), r.__webglTexture = Te.createTexture(), fe.textures++), Re.activeTexture(Te.TEXTURE0 + t), Re.bindTexture(Te.TEXTURE_2D, r.__webglTexture), Te.pixelStorei(Te.UNPACK_FLIP_Y_WEBGL, e.flipY), Te.pixelStorei(Te.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.premultiplyAlpha), Te.pixelStorei(Te.UNPACK_ALIGNMENT, e.unpackAlignment), e.image = R(e.image, ye.maxTextureSize), (e.wrapS !== THREE.ClampToEdgeWrapping || e.wrapT !== THREE.ClampToEdgeWrapping || e.minFilter !== THREE.NearestFilter && e.minFilter !== THREE.LinearFilter) && !1 === H(e.image)) {
                    if (i = e.image, i instanceof HTMLImageElement || i instanceof HTMLCanvasElement) {
                        var n = document.createElement("canvas");
                        n.width = THREE.Math.nearestPowerOfTwo(i.width),
                        n.height = THREE.Math.nearestPowerOfTwo(i.height),
                        n.getContext("2d").drawImage(i, 0, 0, n.width, n.height),
                        console.warn("THREE.WebGLRenderer: image is not power of two (" + i.width + "x" + i.height + "). Resized to " + n.width + "x" + n.height, i),
                        i = n
                    }
                    e.image = i
                }
                var a = e.image,
                i = H(a),
                n = _(e.format),
                s = _(e.type);
                y(Te.TEXTURE_2D, e, i);
                var h = e.mipmaps;
                if (e instanceof THREE.DataTexture) if (0 < h.length && i) {
                    for (var c = 0,
                    l = h.length; l > c; c++) a = h[c],
                    Re.texImage2D(Te.TEXTURE_2D, c, n, a.width, a.height, 0, n, s, a.data);
                    e.generateMipmaps = !1
                } else Re.texImage2D(Te.TEXTURE_2D, 0, n, a.width, a.height, 0, n, s, a.data);
                else if (e instanceof THREE.CompressedTexture) for (c = 0, l = h.length; l > c; c++) a = h[c],
                e.format !== THREE.RGBAFormat && e.format !== THREE.RGBFormat ? -1 < Re.getCompressedTextureFormats().indexOf(n) ? Re.compressedTexImage2D(Te.TEXTURE_2D, c, n, a.width, a.height, 0, a.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Re.texImage2D(Te.TEXTURE_2D, c, n, a.width, a.height, 0, n, s, a.data);
                else if (0 < h.length && i) {
                    for (c = 0, l = h.length; l > c; c++) a = h[c],
                    Re.texImage2D(Te.TEXTURE_2D, c, n, n, s, a);
                    e.generateMipmaps = !1
                } else Re.texImage2D(Te.TEXTURE_2D, 0, n, n, s, e.image);
                e.generateMipmaps && i && Te.generateMipmap(Te.TEXTURE_2D),
                r.__version = e.version,
                e.onUpdate && e.onUpdate(e)
            }
        } else Re.activeTexture(Te.TEXTURE0 + t),
        Re.bindTexture(Te.TEXTURE_2D, r.__webglTexture)
    },
    this.setRenderTarget = function(e) {
        var t = e instanceof THREE.WebGLRenderTargetCube;
        if (e && void 0 === He.get(e).__webglFramebuffer) {
            var r = He.get(e),
            i = He.get(e.texture);
            void 0 === e.depthBuffer && (e.depthBuffer = !0),
            void 0 === e.stencilBuffer && (e.stencilBuffer = !0),
            e.addEventListener("dispose", a),
            i.__webglTexture = Te.createTexture(),
            fe.textures++;
            var n = H(e),
            o = _(e.texture.format),
            s = _(e.texture.type);
            if (t) {
                for (r.__webglFramebuffer = [], r.__webglRenderbuffer = [], Re.bindTexture(Te.TEXTURE_CUBE_MAP, i.__webglTexture), y(Te.TEXTURE_CUBE_MAP, e.texture, n), i = 0; 6 > i; i++) r.__webglFramebuffer[i] = Te.createFramebuffer(),
                r.__webglRenderbuffer[i] = Te.createRenderbuffer(),
                Re.texImage2D(Te.TEXTURE_CUBE_MAP_POSITIVE_X + i, 0, o, e.width, e.height, 0, o, s, null),
                w(r.__webglFramebuffer[i], e, Te.TEXTURE_CUBE_MAP_POSITIVE_X + i),
                M(r.__webglRenderbuffer[i], e);
                e.texture.generateMipmaps && n && Te.generateMipmap(Te.TEXTURE_CUBE_MAP)
            } else r.__webglFramebuffer = Te.createFramebuffer(),
            r.__webglRenderbuffer = e.shareDepthFrom ? e.shareDepthFrom.__webglRenderbuffer: Te.createRenderbuffer(),
            Re.bindTexture(Te.TEXTURE_2D, i.__webglTexture),
            y(Te.TEXTURE_2D, e.texture, n),
            Re.texImage2D(Te.TEXTURE_2D, 0, o, e.width, e.height, 0, o, s, null),
            w(r.__webglFramebuffer, e, Te.TEXTURE_2D),
            e.shareDepthFrom ? e.depthBuffer && !e.stencilBuffer ? Te.framebufferRenderbuffer(Te.FRAMEBUFFER, Te.DEPTH_ATTACHMENT, Te.RENDERBUFFER, r.__webglRenderbuffer) : e.depthBuffer && e.stencilBuffer && Te.framebufferRenderbuffer(Te.FRAMEBUFFER, Te.DEPTH_STENCIL_ATTACHMENT, Te.RENDERBUFFER, r.__webglRenderbuffer) : M(r.__webglRenderbuffer, e),
            e.texture.generateMipmaps && n && Te.generateMipmap(Te.TEXTURE_2D);
            t ? Re.bindTexture(Te.TEXTURE_CUBE_MAP, null) : Re.bindTexture(Te.TEXTURE_2D, null),
            Te.bindRenderbuffer(Te.RENDERBUFFER, null),
            Te.bindFramebuffer(Te.FRAMEBUFFER, null)
        }
        e ? (r = He.get(e), i = t ? r.__webglFramebuffer[e.activeCubeFace] : r.__webglFramebuffer, r = e.width, n = e.height, s = o = 0) : (i = null, r = oe, n = ae, o = ie, s = ne),
        i !== J && (Te.bindFramebuffer(Te.FRAMEBUFFER, i), Te.viewport(o, s, r, n), J = i),
        t && (i = He.get(e.texture), Te.framebufferTexture2D(Te.FRAMEBUFFER, Te.COLOR_ATTACHMENT0, Te.TEXTURE_CUBE_MAP_POSITIVE_X + e.activeCubeFace, i.__webglTexture, 0)),
        se = r,
        he = n
    },
    this.readRenderTargetPixels = function(e, t, r, i, n, o) {
        if (!1 == e instanceof THREE.WebGLRenderTarget) console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        else {
            var a = He.get(e).__webglFramebuffer;
            if (a) {
                var s = !1;
                a !== J && (Te.bindFramebuffer(Te.FRAMEBUFFER, a), s = !0);
                try {
                    var h = e.texture;
                    h.format !== THREE.RGBAFormat && _(h.format) !== Te.getParameter(Te.IMPLEMENTATION_COLOR_READ_FORMAT) ? console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.") : h.type === THREE.UnsignedByteType || _(h.type) === Te.getParameter(Te.IMPLEMENTATION_COLOR_READ_TYPE) || h.type === THREE.FloatType && ge.get("WEBGL_color_buffer_float") || h.type === THREE.HalfFloatType && ge.get("EXT_color_buffer_half_float") ? Te.checkFramebufferStatus(Te.FRAMEBUFFER) === Te.FRAMEBUFFER_COMPLETE ? Te.readPixels(t, r, i, n, _(h.format), _(h.type), o) : console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.") : console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.")
                } finally {
                    s && Te.bindFramebuffer(Te.FRAMEBUFFER, J)
                }
            }
        }
    },
    this.supportsFloatTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),
        ge.get("OES_texture_float")
    },
    this.supportsHalfFloatTextures = function() {
        return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),
        ge.get("OES_texture_half_float")
    },
    this.supportsStandardDerivatives = function() {
        return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),
        ge.get("OES_standard_derivatives")
    },
    this.supportsCompressedTextureS3TC = function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),
        ge.get("WEBGL_compressed_texture_s3tc")
    },
    this.supportsCompressedTexturePVRTC = function() {
        return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),
        ge.get("WEBGL_compressed_texture_pvrtc")
    },
    this.supportsBlendMinMax = function() {
        return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),
        ge.get("EXT_blend_minmax")
    },
    this.supportsVertexTextures = function() {
        return ye.vertexTextures
    },
    this.supportsInstancedArrays = function() {
        return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),
        ge.get("ANGLE_instanced_arrays")
    },
    this.initMaterial = function() {
        console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")
    },
    this.addPrePlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")
    },
    this.addPostPlugin = function() {
        console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")
    },
    this.updateShadowMap = function() {
        console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")
    },
    Object.defineProperties(this, {
        shadowMapEnabled: {
            get: function() {
                return Se.enabled
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),
                Se.enabled = e
            }
        },
        shadowMapType: {
            get: function() {
                return Se.type
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),
                Se.type = e
            }
        },
        shadowMapCullFace: {
            get: function() {
                return Se.cullFace
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace."),
                Se.cullFace = e
            }
        },
        shadowMapDebug: {
            get: function() {
                return Se.debug
            },
            set: function(e) {
                console.warn("THREE.WebGLRenderer: .shadowMapDebug is now .shadowMap.debug."),
                Se.debug = e
            }
        }
    })
},
THREE.WebGLRenderTarget = function(e, t, r) {
    this.uuid = THREE.Math.generateUUID(),
    this.width = e,
    this.height = t,
    r = r || {},
    void 0 === r.minFilter && (r.minFilter = THREE.LinearFilter),
    this.texture = new THREE.Texture(void 0, void 0, r.wrapS, r.wrapT, r.magFilter, r.minFilter, r.format, r.type, r.anisotropy),
    this.depthBuffer = void 0 !== r.depthBuffer ? r.depthBuffer: !0,
    this.stencilBuffer = void 0 !== r.stencilBuffer ? r.stencilBuffer: !0,
    this.shareDepthFrom = void 0 !== r.shareDepthFrom ? r.shareDepthFrom: null
},
THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget,
    get wrapS() {
        return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
        this.texture.wrapS
    },
    set wrapS(e) {
        console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),
        this.texture.wrapS = e
    },
    get wrapT() {
        return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
        this.texture.wrapT
    },
    set wrapT(e) {
        console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),
        this.texture.wrapT = e
    },
    get magFilter() {
        return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
        this.texture.magFilter
    },
    set magFilter(e) {
        console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),
        this.texture.magFilter = e
    },
    get minFilter() {
        return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
        this.texture.minFilter
    },
    set minFilter(e) {
        console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),
        this.texture.minFilter = e
    },
    get anisotropy() {
        return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
        this.texture.anisotropy
    },
    set anisotropy(e) {
        console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),
        this.texture.anisotropy = e
    },
    get offset() {
        return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
        this.texture.offset
    },
    set offset(e) {
        console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),
        this.texture.offset = e
    },
    get repeat() {
        return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
        this.texture.repeat
    },
    set repeat(e) {
        console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),
        this.texture.repeat = e
    },
    get format() {
        return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
        this.texture.format
    },
    set format(e) {
        console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),
        this.texture.format = e
    },
    get type() {
        return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
        this.texture.type
    },
    set type(e) {
        console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),
        this.texture.type = e
    },
    get generateMipmaps() {
        return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
        this.texture.generateMipmaps
    },
    set generateMipmaps(e) {
        console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),
        this.texture.generateMipmaps = e
    },
    setSize: function(e, t) { (this.width !== e || this.height !== t) && (this.width = e, this.height = t, this.dispose())
    },
    clone: function() {
        return (new this.constructor).copy(this)
    },
    copy: function(e) {
        return this.width = e.width,
        this.height = e.height,
        this.texture = e.texture.clone(),
        this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        this.shareDepthFrom = e.shareDepthFrom,
        this
    },
    dispose: function() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
},
THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype),
THREE.WebGLRenderTargetCube = function(e, t, r) {
    THREE.WebGLRenderTarget.call(this, e, t, r),
    this.activeCubeFace = 0
},
THREE.WebGLRenderTargetCube.prototype = Object.create(THREE.WebGLRenderTarget.prototype),
THREE.WebGLRenderTargetCube.prototype.constructor = THREE.WebGLRenderTargetCube,
THREE.WebGLBufferRenderer = function(e, t, r) {
    var i;
    this.setMode = function(e) {
        i = e
    },
    this.render = function(t, n) {
        e.drawArrays(i, t, n),
        r.calls++,
        r.vertices += n,
        i === e.TRIANGLES && (r.faces += n / 3)
    },
    this.renderInstances = function(e) {
        var r = t.get("ANGLE_instanced_arrays");
        if (null === r) console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
        else {
            var n = e.attributes.position;
            n instanceof THREE.InterleavedBufferAttribute ? r.drawArraysInstancedANGLE(i, 0, n.data.count, e.maxInstancedCount) : r.drawArraysInstancedANGLE(i, 0, n.count, e.maxInstancedCount)
        }
    }
},
THREE.WebGLIndexedBufferRenderer = function(e, t, r) {
    var i, n, o;
    this.setMode = function(e) {
        i = e
    },
    this.setIndex = function(r) {
        r.array instanceof Uint32Array && t.get("OES_element_index_uint") ? (n = e.UNSIGNED_INT, o = 4) : (n = e.UNSIGNED_SHORT, o = 2)
    },
    this.render = function(t, a) {
        e.drawElements(i, a, n, t * o),
        r.calls++,
        r.vertices += a,
        i === e.TRIANGLES && (r.faces += a / 3)
    },
    this.renderInstances = function(e) {
        var r = t.get("ANGLE_instanced_arrays");
        null === r ? console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.") : r.drawElementsInstancedANGLE(i, e.index.array.length, n, 0, e.maxInstancedCount)
    }
},
THREE.WebGLExtensions = function(e) {
    var t = {};
    this.get = function(r) {
        if (void 0 !== t[r]) return t[r];
        var i;
        switch (r) {
        case "EXT_texture_filter_anisotropic":
            i = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            i = e.getExtension("WEBGL_compressed_texture_s3tc") || e.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            i = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default:
            i = e.getExtension(r)
        }
        return null === i && console.warn("THREE.WebGLRenderer: " + r + " extension not supported."),
        t[r] = i
    }
},
THREE.WebGLCapabilities = function(e, t, r) {
    function i(t) {
        if ("highp" === t) {
            if (0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision) return "highp";
            t = "mediump"
        }
        return "mediump" === t && 0 < e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision && 0 < e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision ? "mediump": "lowp"
    }
    this.getMaxPrecision = i,
    this.precision = void 0 !== r.precision ? r.precision: "highp",
    this.logarithmicDepthBuffer = void 0 !== r.logarithmicDepthBuffer ? r.logarithmicDepthBuffer: !1,
    this.maxTextures = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
    this.maxVertexTextures = e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    this.maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE),
    this.maxCubemapSize = e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),
    this.maxAttributes = e.getParameter(e.MAX_VERTEX_ATTRIBS),
    this.maxVertexUniforms = e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),
    this.maxVaryings = e.getParameter(e.MAX_VARYING_VECTORS),
    this.maxFragmentUniforms = e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),
    this.vertexTextures = 0 < this.maxVertexTextures,
    this.floatFragmentTextures = !!t.get("OES_texture_float"),
    this.floatVertexTextures = this.vertexTextures && this.floatFragmentTextures,
    r = i(this.precision),
    r !== this.precision && (console.warn("THREE.WebGLRenderer:", this.precision, "not supported, using", r, "instead."), this.precision = r),
    this.logarithmicDepthBuffer && (this.logarithmicDepthBuffer = !!t.get("EXT_frag_depth"))
},
THREE.WebGLGeometries = function(e, t, r) {
    function i(e) {
        e = e.target;
        var a, s = o[e.id].attributes;
        for (a in s) n(s[a]);
        e.removeEventListener("dispose", i),
        delete o[e.id],
        a = t.get(e),
        a.wireframe && n(a.wireframe),
        r.memory.geometries--
    }

    function n(r) {
        var i;
        i = r instanceof THREE.InterleavedBufferAttribute ? t.get(r.data).__webglBuffer: t.get(r).__webglBuffer,
        void 0 !== i && (e.deleteBuffer(i), r instanceof THREE.InterleavedBufferAttribute ? t["delete"](r.data) : t["delete"](r))
    }
    var o = {};
    this.get = function(e) {
        var t = e.geometry;
        if (void 0 !== o[t.id]) return o[t.id];
        t.addEventListener("dispose", i);
        var n;
        return t instanceof THREE.BufferGeometry ? n = t: t instanceof THREE.Geometry && (void 0 === t._bufferGeometry && (t._bufferGeometry = (new THREE.BufferGeometry).setFromObject(e)), n = t._bufferGeometry),
        o[t.id] = n,
        r.memory.geometries++,
        n
    }
},
THREE.WebGLObjects = function(e, t, r) {
    function i(r, i) {
        var n = r instanceof THREE.InterleavedBufferAttribute ? r.data: r,
        o = t.get(n);
        void 0 === o.__webglBuffer ? (o.__webglBuffer = e.createBuffer(), e.bindBuffer(i, o.__webglBuffer), e.bufferData(i, n.array, n.dynamic ? e.DYNAMIC_DRAW: e.STATIC_DRAW), o.version = n.version) : o.version !== n.version && (e.bindBuffer(i, o.__webglBuffer), !1 === n.dynamic || -1 === n.updateRange.count ? e.bufferSubData(i, 0, n.array) : 0 === n.updateRange.count ? console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.") : (e.bufferSubData(i, n.updateRange.offset * n.array.BYTES_PER_ELEMENT, n.array.subarray(n.updateRange.offset, n.updateRange.offset + n.updateRange.count)), n.updateRange.count = 0), o.version = n.version)
    }

    function n(e, t, r) {
        if (t > r) {
            var i = t;
            t = r,
            r = i
        }
        return i = e[t],
        void 0 === i ? (e[t] = [r], !0) : -1 === i.indexOf(r) ? (i.push(r), !0) : !1
    }
    var o = new THREE.WebGLGeometries(e, t, r);
    this.getAttributeBuffer = function(e) {
        return e instanceof THREE.InterleavedBufferAttribute ? t.get(e.data).__webglBuffer: t.get(e).__webglBuffer
    },
    this.getWireframeAttribute = function(r) {
        var o = t.get(r);
        if (void 0 !== o.wireframe) return o.wireframe;
        var a = [],
        s = r.index,
        h = r.attributes;
        if (r = h.position, null !== s) for (var h = {},
        s = s.array,
        c = 0,
        l = s.length; l > c; c += 3) {
            var u = s[c + 0],
            p = s[c + 1],
            E = s[c + 2];
            n(h, u, p) && a.push(u, p),
            n(h, p, E) && a.push(p, E),
            n(h, E, u) && a.push(E, u)
        } else for (s = h.position.array, c = 0, l = s.length / 3 - 1; l > c; c += 3) u = c + 0,
        p = c + 1,
        E = c + 2,
        a.push(u, p, p, E, E, u);
        return a = new THREE.BufferAttribute(new(65535 < r.count ? Uint32Array: Uint16Array)(a), 1),
        i(a, e.ELEMENT_ARRAY_BUFFER),
        o.wireframe = a
    },
    this.update = function(t) {
        var r = o.get(t);
        t.geometry instanceof THREE.Geometry && r.updateFromObject(t),
        t = r.index;
        var n = r.attributes;
        null !== t && i(t, e.ELEMENT_ARRAY_BUFFER);
        for (var a in n) i(n[a], e.ARRAY_BUFFER);
        t = r.morphAttributes;
        for (a in t) for (var n = t[a], s = 0, h = n.length; h > s; s++) i(n[s], e.ARRAY_BUFFER);
        return r
    }
},
THREE.WebGLProgram = function() {
    function e(e) {
        var t, r = [];
        for (t in e) {
            var i = e[t]; ! 1 !== i && r.push("#define " + t + " " + i)
        }
        return r.join("\n")
    }

    function t(e) {
        return "" !== e
    }
    var r = 0;
    return function(i, n, o, a) {
        var s = i.context,
        h = o.defines,
        c = o.__webglShader.vertexShader,
        l = o.__webglShader.fragmentShader,
        u = "SHADOWMAP_TYPE_BASIC";
        a.shadowMapType === THREE.PCFShadowMap ? u = "SHADOWMAP_TYPE_PCF": a.shadowMapType === THREE.PCFSoftShadowMap && (u = "SHADOWMAP_TYPE_PCF_SOFT");
        var p = "ENVMAP_TYPE_CUBE",
        E = "ENVMAP_MODE_REFLECTION",
        d = "ENVMAP_BLENDING_MULTIPLY";
        if (a.envMap) {
            switch (o.envMap.mapping) {
            case THREE.CubeReflectionMapping:
            case THREE.CubeRefractionMapping:
                p = "ENVMAP_TYPE_CUBE";
                break;
            case THREE.EquirectangularReflectionMapping:
            case THREE.EquirectangularRefractionMapping:
                p = "ENVMAP_TYPE_EQUIREC";
                break;
            case THREE.SphericalReflectionMapping:
                p = "ENVMAP_TYPE_SPHERE"
            }
            switch (o.envMap.mapping) {
            case THREE.CubeRefractionMapping:
            case THREE.EquirectangularRefractionMapping:
                E = "ENVMAP_MODE_REFRACTION"
            }
            switch (o.combine) {
            case THREE.MultiplyOperation:
                d = "ENVMAP_BLENDING_MULTIPLY";
                break;
            case THREE.MixOperation:
                d = "ENVMAP_BLENDING_MIX";
                break;
            case THREE.AddOperation:
                d = "ENVMAP_BLENDING_ADD"
            }
        }
        var f = 0 < i.gammaFactor ? i.gammaFactor: 1,
        m = e(h),
        T = s.createProgram();
        o instanceof THREE.RawShaderMaterial ? i = h = "": (h = ["precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + o.__webglShader.name, m, a.supportsVertexTextures ? "#define VERTEX_TEXTURES": "", i.gammaInput ? "#define GAMMA_INPUT": "", i.gammaOutput ? "#define GAMMA_OUTPUT": "", "#define GAMMA_FACTOR " + f, "#define MAX_DIR_LIGHTS " + a.maxDirLights, "#define MAX_POINT_LIGHTS " + a.maxPointLights, "#define MAX_SPOT_LIGHTS " + a.maxSpotLights, "#define MAX_HEMI_LIGHTS " + a.maxHemiLights, "#define MAX_SHADOWS " + a.maxShadows, "#define MAX_BONES " + a.maxBones, a.map ? "#define USE_MAP": "", a.envMap ? "#define USE_ENVMAP": "", a.envMap ? "#define " + E: "", a.lightMap ? "#define USE_LIGHTMAP": "", a.aoMap ? "#define USE_AOMAP": "", a.emissiveMap ? "#define USE_EMISSIVEMAP": "", a.bumpMap ? "#define USE_BUMPMAP": "", a.normalMap ? "#define USE_NORMALMAP": "", a.displacementMap && a.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP": "", a.specularMap ? "#define USE_SPECULARMAP": "", a.alphaMap ? "#define USE_ALPHAMAP": "", a.vertexColors ? "#define USE_COLOR": "", a.flatShading ? "#define FLAT_SHADED": "", a.skinning ? "#define USE_SKINNING": "", a.useVertexTexture ? "#define BONE_TEXTURE": "", a.morphTargets ? "#define USE_MORPHTARGETS": "", a.morphNormals && !1 === a.flatShading ? "#define USE_MORPHNORMALS": "", a.doubleSided ? "#define DOUBLE_SIDED": "", a.flipSided ? "#define FLIP_SIDED": "", a.shadowMapEnabled ? "#define USE_SHADOWMAP": "", a.shadowMapEnabled ? "#define " + u: "", a.shadowMapDebug ? "#define SHADOWMAP_DEBUG": "", 0 < a.pointLightShadows ? "#define POINT_LIGHT_SHADOWS": "", a.sizeAttenuation ? "#define USE_SIZEATTENUATION": "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF": "", a.logarithmicDepthBuffer && i.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT": "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_COLOR", "	attribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", "\n"].filter(t).join("\n"), i = [a.bumpMap || a.normalMap || a.flatShading || o.derivatives ? "#extension GL_OES_standard_derivatives : enable": "", a.logarithmicDepthBuffer && i.extensions.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable": "", "precision " + a.precision + " float;", "precision " + a.precision + " int;", "#define SHADER_NAME " + o.__webglShader.name, m, "#define MAX_DIR_LIGHTS " + a.maxDirLights, "#define MAX_POINT_LIGHTS " + a.maxPointLights, "#define MAX_SPOT_LIGHTS " + a.maxSpotLights, "#define MAX_HEMI_LIGHTS " + a.maxHemiLights, "#define MAX_SHADOWS " + a.maxShadows, a.alphaTest ? "#define ALPHATEST " + a.alphaTest: "", i.gammaInput ? "#define GAMMA_INPUT": "", i.gammaOutput ? "#define GAMMA_OUTPUT": "", "#define GAMMA_FACTOR " + f, a.useFog && a.fog ? "#define USE_FOG": "", a.useFog && a.fogExp ? "#define FOG_EXP2": "", a.map ? "#define USE_MAP": "", a.envMap ? "#define USE_ENVMAP": "", a.envMap ? "#define " + p: "", a.envMap ? "#define " + E: "", a.envMap ? "#define " + d: "", a.lightMap ? "#define USE_LIGHTMAP": "", a.aoMap ? "#define USE_AOMAP": "", a.emissiveMap ? "#define USE_EMISSIVEMAP": "", a.bumpMap ? "#define USE_BUMPMAP": "", a.normalMap ? "#define USE_NORMALMAP": "", a.specularMap ? "#define USE_SPECULARMAP": "", a.alphaMap ? "#define USE_ALPHAMAP": "", a.vertexColors ? "#define USE_COLOR": "", a.flatShading ? "#define FLAT_SHADED": "", a.metal ? "#define METAL": "", a.doubleSided ? "#define DOUBLE_SIDED": "", a.flipSided ? "#define FLIP_SIDED": "", a.shadowMapEnabled ? "#define USE_SHADOWMAP": "", a.shadowMapEnabled ? "#define " + u: "", a.shadowMapDebug ? "#define SHADOWMAP_DEBUG": "", 0 < a.pointLightShadows ? "#define POINT_LIGHT_SHADOWS": "", a.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF": "", a.logarithmicDepthBuffer && i.extensions.get("EXT_frag_depth") ? "#define USE_LOGDEPTHBUF_EXT": "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "\n"].filter(t).join("\n")),
        l = i + l,
        c = THREE.WebGLShader(s, s.VERTEX_SHADER, h + c),
        l = THREE.WebGLShader(s, s.FRAGMENT_SHADER, l),
        s.attachShader(T, c),
        s.attachShader(T, l),
        void 0 !== o.index0AttributeName ? s.bindAttribLocation(T, 0, o.index0AttributeName) : !0 === a.morphTargets && s.bindAttribLocation(T, 0, "position"),
        s.linkProgram(T),
        a = s.getProgramInfoLog(T),
        u = s.getShaderInfoLog(c),
        p = s.getShaderInfoLog(l),
        d = E = !0,
        !1 === s.getProgramParameter(T, s.LINK_STATUS) ? (E = !1, console.error("THREE.WebGLProgram: shader error: ", s.getError(), "gl.VALIDATE_STATUS", s.getProgramParameter(T, s.VALIDATE_STATUS), "gl.getProgramInfoLog", a, u, p)) : "" !== a ? console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", a) : ("" === u || "" === p) && (d = !1),
        d && (this.diagnostics = {
            runnable: E,
            material: o,
            programLog: a,
            vertexShader: {
                log: u,
                prefix: h
            },
            fragmentShader: {
                log: p,
                prefix: i
            }
        }),
        s.deleteShader(c),
        s.deleteShader(l);
        var v;
        this.getUniforms = function() {
            if (void 0 === v) {
                for (var e = {},
                t = s.getProgramParameter(T, s.ACTIVE_UNIFORMS), r = 0; t > r; r++) {
                    var i = s.getActiveUniform(T, r).name,
                    n = s.getUniformLocation(T, i),
                    o = i.lastIndexOf("[0]"); - 1 !== o && o === i.length - 3 && (e[i.substr(0, o)] = n),
                    e[i] = n
                }
                v = e
            }
            return v
        };
        var g;
        return this.getAttributes = function() {
            if (void 0 === g) {
                for (var e = {},
                t = s.getProgramParameter(T, s.ACTIVE_ATTRIBUTES), r = 0; t > r; r++) {
                    var i = s.getActiveAttrib(T, r).name;
                    e[i] = s.getAttribLocation(T, i)
                }
                g = e
            }
            return g
        },
        this.destroy = function() {
            s.deleteProgram(T),
            this.program = void 0
        },
        Object.defineProperties(this, {
            uniforms: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms()."),
                    this.getUniforms()
                }
            },
            attributes: {
                get: function() {
                    return console.warn("THREE.WebGLProgram: .attributes is now .getAttributes()."),
                    this.getAttributes()
                }
            }
        }),
        this.id = r++,
        this.code = n,
        this.usedTimes = 1,
        this.program = T,
        this.vertexShader = c,
        this.fragmentShader = l,
        this
    }
} (),
THREE.WebGLPrograms = function(e, t) {
    var r = [],
    i = {
        MeshDepthMaterial: "depth",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points"
    },
    n = "precision supportsVertexTextures map envMap envMapMode lightMap aoMap emissiveMap bumpMap normalMap displacementMap specularMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals maxDirLights maxPointLights maxSpotLights maxHemiLights maxShadows shadowMapEnabled pointLightShadows shadowMapType shadowMapDebug alphaTest metal doubleSided flipSided".split(" ");
    this.getParameters = function(r, n, o, a) {
        var s, h, c, l, u, p = i[r.type];
        s = u = l = c = h = 0;
        for (var E = n.length; E > s; s++) {
            var d = n[s]; ! 1 !== d.visible && (d instanceof THREE.DirectionalLight && h++, d instanceof THREE.PointLight && c++, d instanceof THREE.SpotLight && l++, d instanceof THREE.HemisphereLight && u++)
        }
        for (var d = s = E = 0,
        f = n.length; f > d; d++) {
            var m = n[d];
            m.castShadow && ((m instanceof THREE.SpotLight || m instanceof THREE.DirectionalLight) && E++, m instanceof THREE.PointLight && (E++, s++))
        }
        return n = E,
        t.floatVertexTextures && a && a.skeleton && a.skeleton.useVertexTexture ? E = 1024 : (E = Math.floor((t.maxVertexUniforms - 20) / 4), void 0 !== a && a instanceof THREE.SkinnedMesh && (E = Math.min(a.skeleton.bones.length, E), E < a.skeleton.bones.length && console.warn("WebGLRenderer: too many bones - " + a.skeleton.bones.length + ", this GPU supports just " + E + " (try OpenGL instead of ANGLE)"))),
        d = e.getPrecision(),
        null !== r.precision && (d = t.getMaxPrecision(r.precision), d !== r.precision && console.warn("THREE.WebGLRenderer.initMaterial:", r.precision, "not supported, using", d, "instead.")),
        {
            shaderID: p,
            precision: d,
            supportsVertexTextures: t.vertexTextures,
            map: !!r.map,
            envMap: !!r.envMap,
            envMapMode: r.envMap && r.envMap.mapping,
            lightMap: !!r.lightMap,
            aoMap: !!r.aoMap,
            emissiveMap: !!r.emissiveMap,
            bumpMap: !!r.bumpMap,
            normalMap: !!r.normalMap,
            displacementMap: !!r.displacementMap,
            specularMap: !!r.specularMap,
            alphaMap: !!r.alphaMap,
            combine: r.combine,
            vertexColors: r.vertexColors,
            fog: o,
            useFog: r.fog,
            fogExp: o instanceof THREE.FogExp2,
            flatShading: r.shading === THREE.FlatShading,
            sizeAttenuation: r.sizeAttenuation,
            logarithmicDepthBuffer: t.logarithmicDepthBuffer,
            skinning: r.skinning,
            maxBones: E,
            useVertexTexture: t.floatVertexTextures && a && a.skeleton && a.skeleton.useVertexTexture,
            morphTargets: r.morphTargets,
            morphNormals: r.morphNormals,
            maxMorphTargets: e.maxMorphTargets,
            maxMorphNormals: e.maxMorphNormals,
            maxDirLights: h,
            maxPointLights: c,
            maxSpotLights: l,
            maxHemiLights: u,
            maxShadows: n,
            pointLightShadows: s,
            shadowMapEnabled: e.shadowMap.enabled && a.receiveShadow && n > 0,
            shadowMapType: e.shadowMap.type,
            shadowMapDebug: e.shadowMap.debug,
            alphaTest: r.alphaTest,
            metal: r.metal,
            doubleSided: r.side === THREE.DoubleSide,
            flipSided: r.side === THREE.BackSide
        }
    },
    this.getProgramCode = function(e, t) {
        var r = [];
        if (t.shaderID ? r.push(t.shaderID) : (r.push(e.fragmentShader), r.push(e.vertexShader)), void 0 !== e.defines) for (var i in e.defines) r.push(i),
        r.push(e.defines[i]);
        for (i = 0; i < n.length; i++) {
            var o = n[i];
            r.push(o),
            r.push(t[o])
        }
        return r.join()
    },
    this.acquireProgram = function(t, i, n) {
        for (var o, a = 0,
        s = r.length; s > a; a++) {
            var h = r[a];
            if (h.code === n) {
                o = h,
                ++o.usedTimes;
                break
            }
        }
        return void 0 === o && (o = new THREE.WebGLProgram(e, n, t, i), r.push(o)),
        o
    },
    this.releaseProgram = function(e) {
        if (0 === --e.usedTimes) {
            var t = r.indexOf(e);
            r[t] = r[r.length - 1],
            r.pop(),
            e.destroy()
        }
    },
    this.programs = r
},
THREE.WebGLProperties = function() {
    var e = {};
    this.get = function(t) {
        t = t.uuid;
        var r = e[t];
        return void 0 === r && (r = {},
        e[t] = r),
        r
    },
    this["delete"] = function(t) {
        delete e[t.uuid]
    },
    this.clear = function() {
        e = {}
    }
},
THREE.WebGLShader = function() {
    function e(e) {
        e = e.split("\n");
        for (var t = 0; t < e.length; t++) e[t] = t + 1 + ": " + e[t];
        return e.join("\n")
    }
    return function(t, r, i) {
        var n = t.createShader(r);
        return t.shaderSource(n, i),
        t.compileShader(n),
        !1 === t.getShaderParameter(n, t.COMPILE_STATUS) && console.error("THREE.WebGLShader: Shader couldn't compile."),
        "" !== t.getShaderInfoLog(n) && console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", r === t.VERTEX_SHADER ? "vertex": "fragment", t.getShaderInfoLog(n), e(i)),
        n
    }
} (),
THREE.WebGLShadowMap = function(e, t, r) {
    function i(e, t, r, i) {
        var n = e.geometry,
        o = null,
        o = p,
        a = e.customDepthMaterial;
        return r && (o = E, a = e.customDistanceMaterial),
        a ? o = a: (e = e instanceof THREE.SkinnedMesh && t.skinning, a = 0, void 0 !== n.morphTargets && 0 < n.morphTargets.length && t.morphTargets && (a |= 1), e && (a |= 2), o = o[a]),
        o.visible = t.visible,
        o.wireframe = t.wireframe,
        o.wireframeLinewidth = t.wireframeLinewidth,
        r && void 0 !== o.uniforms.lightPos && o.uniforms.lightPos.value.copy(i),
        o
    }

    function n(e, t) {
        if (!1 !== e.visible) { (e instanceof THREE.Mesh || e instanceof THREE.Line || e instanceof THREE.Points) && e.castShadow && (!1 === e.frustumCulled || !0 === s.intersectsObject(e)) && !0 === e.material.visible && (e.modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld), u.push(e));
            for (var r = e.children,
            i = 0,
            o = r.length; o > i; i++) n(r[i], t)
        }
    }
    var o = e.context,
    a = e.state,
    s = new THREE.Frustum,
    h = new THREE.Matrix4;
    new THREE.Vector3,
    new THREE.Vector3;
    for (var c = new THREE.Vector3,
    l = new THREE.Vector3,
    u = [], p = Array(4), E = Array(4), d = [new THREE.Vector3(1, 0, 0), new THREE.Vector3( - 1, 0, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, -1, 0)], f = [new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, 1), new THREE.Vector3(0, 0, -1)], m = [new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4, new THREE.Vector4], T = new THREE.Vector4, v = THREE.ShaderLib.depthRGBA, g = THREE.UniformsUtils.clone(v.uniforms), y = THREE.ShaderLib.distanceRGBA, R = THREE.UniformsUtils.clone(y.uniforms), H = 0; 4 !== H; ++H) {
        var x = 0 !== (1 & H),
        b = 0 !== (2 & H),
        w = new THREE.ShaderMaterial({
            uniforms: g,
            vertexShader: v.vertexShader,
            fragmentShader: v.fragmentShader,
            morphTargets: x,
            skinning: b
        });
        w._shadowPass = !0,
        p[H] = w,
        x = new THREE.ShaderMaterial({
            uniforms: R,
            vertexShader: y.vertexShader,
            fragmentShader: y.fragmentShader,
            morphTargets: x,
            skinning: b
        }),
        x._shadowPass = !0,
        E[H] = x
    }
    var M = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = THREE.PCFShadowMap,
    this.cullFace = THREE.CullFaceFront,
    this.render = function(p) {
        var E, v;
        if (!1 !== M.enabled && (!1 !== M.autoUpdate || !1 !== M.needsUpdate)) {
            o.clearColor(1, 1, 1, 1),
            a.disable(o.BLEND),
            a.enable(o.CULL_FACE),
            o.frontFace(o.CCW),
            o.cullFace(M.cullFace === THREE.CullFaceFront ? o.FRONT: o.BACK),
            a.setDepthTest(!0),
            e.getViewport(T);
            for (var g = 0,
            y = t.length; y > g; g++) {
                var R = t[g];
                if (!0 === R.castShadow) {
                    var H = R.shadow,
                    x = H.camera,
                    b = H.mapSize;
                    if (R instanceof THREE.PointLight) {
                        E = 6,
                        v = !0;
                        var w = b.x / 4,
                        S = b.y / 2;
                        m[0].set(2 * w, S, w, S),
                        m[1].set(0, S, w, S),
                        m[2].set(3 * w, S, w, S),
                        m[3].set(w, S, w, S),
                        m[4].set(3 * w, 0, w, S),
                        m[5].set(w, 0, w, S)
                    } else E = 1,
                    v = !1;
                    for (null === H.map && (w = THREE.LinearFilter, M.type === THREE.PCFSoftShadowMap && (w = THREE.NearestFilter), H.map = new THREE.WebGLRenderTarget(b.x, b.y, {
                        minFilter: w,
                        magFilter: w,
                        format: THREE.RGBAFormat
                    }), H.matrix = new THREE.Matrix4, R instanceof THREE.SpotLight && (x.aspect = b.x / b.y), x.updateProjectionMatrix()), b = H.map, H = H.matrix, l.setFromMatrixPosition(R.matrixWorld), x.position.copy(l), e.setRenderTarget(b), e.clear(), b = 0; E > b; b++) for (v ? (c.copy(x.position), c.add(d[b]), x.up.copy(f[b]), x.lookAt(c), w = m[b], e.setViewport(w.x, w.y, w.z, w.w)) : (c.setFromMatrixPosition(R.target.matrixWorld), x.lookAt(c)), x.updateMatrixWorld(), x.matrixWorldInverse.getInverse(x.matrixWorld), H.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1), H.multiply(x.projectionMatrix), H.multiply(x.matrixWorldInverse), h.multiplyMatrices(x.projectionMatrix, x.matrixWorldInverse), s.setFromMatrix(h), u.length = 0, n(p, x), w = 0, S = u.length; S > w; w++) {
                        var _ = u[w],
                        C = r.update(_),
                        A = _.material;
                        if (A instanceof THREE.MeshFaceMaterial) for (var L = C.groups,
                        A = A.materials,
                        P = 0,
                        D = L.length; D > P; P++) {
                            var k = L[P],
                            V = A[k.materialIndex]; ! 0 === V.visible && (V = i(_, V, v, l), e.renderBufferDirect(x, t, null, C, V, _, k))
                        } else V = i(_, A, v, l),
                        e.renderBufferDirect(x, t, null, C, V, _, null)
                    }
                    e.resetGLState()
                }
            }
            e.setViewport(T.x, T.y, T.z, T.w),
            p = e.getClearColor(),
            E = e.getClearAlpha(),
            e.setClearColor(p, E),
            a.enable(o.BLEND),
            M.cullFace === THREE.CullFaceFront && o.cullFace(o.BACK),
            e.resetGLState(),
            M.needsUpdate = !1
        }
    }
},
THREE.WebGLState = function(e, t, r) {
    var i = this,
    n = new Uint8Array(16),
    o = new Uint8Array(16),
    a = new Uint8Array(16),
    s = {},
    h = null,
    c = null,
    l = null,
    u = null,
    p = null,
    E = null,
    d = null,
    f = null,
    m = null,
    T = null,
    v = null,
    g = null,
    y = null,
    R = null,
    H = null,
    x = e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),
    b = void 0,
    w = {};
    this.init = function() {
        e.clearColor(0, 0, 0, 1),
        e.clearDepth(1),
        e.clearStencil(0),
        this.enable(e.DEPTH_TEST),
        e.depthFunc(e.LEQUAL),
        e.frontFace(e.CCW),
        e.cullFace(e.BACK),
        this.enable(e.CULL_FACE),
        this.enable(e.BLEND),
        e.blendEquation(e.FUNC_ADD),
        e.blendFunc(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA)
    },
    this.initAttributes = function() {
        for (var e = 0,
        t = n.length; t > e; e++) n[e] = 0
    },
    this.enableAttribute = function(r) {
        n[r] = 1,
        0 === o[r] && (e.enableVertexAttribArray(r), o[r] = 1),
        0 !== a[r] && (t.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(r, 0), a[r] = 0)
    },
    this.enableAttributeAndDivisor = function(t, r, i) {
        n[t] = 1,
        0 === o[t] && (e.enableVertexAttribArray(t), o[t] = 1),
        a[t] !== r && (i.vertexAttribDivisorANGLE(t, r), a[t] = r)
    },
    this.disableUnusedAttributes = function() {
        for (var t = 0,
        r = o.length; r > t; t++) o[t] !== n[t] && (e.disableVertexAttribArray(t), o[t] = 0)
    },
    this.enable = function(t) { ! 0 !== s[t] && (e.enable(t), s[t] = !0)
    },
    this.disable = function(t) { ! 1 !== s[t] && (e.disable(t), s[t] = !1)
    },
    this.getCompressedTextureFormats = function() {
        if (null === h && (h = [], t.get("WEBGL_compressed_texture_pvrtc") || t.get("WEBGL_compressed_texture_s3tc"))) for (var r = e.getParameter(e.COMPRESSED_TEXTURE_FORMATS), i = 0; i < r.length; i++) h.push(r[i]);
        return h
    },
    this.setBlending = function(t, i, n, o, a, s, h) {
        t !== c && (t === THREE.NoBlending ? this.disable(e.BLEND) : t === THREE.AdditiveBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.SRC_ALPHA, e.ONE)) : t === THREE.SubtractiveBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.ONE_MINUS_SRC_COLOR)) : t === THREE.MultiplyBlending ? (this.enable(e.BLEND), e.blendEquation(e.FUNC_ADD), e.blendFunc(e.ZERO, e.SRC_COLOR)) : t === THREE.CustomBlending ? this.enable(e.BLEND) : (this.enable(e.BLEND), e.blendEquationSeparate(e.FUNC_ADD, e.FUNC_ADD), e.blendFuncSeparate(e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA)), c = t),
        t === THREE.CustomBlending ? (a = a || i, s = s || n, h = h || o, (i !== l || a !== E) && (e.blendEquationSeparate(r(i), r(a)), l = i, E = a), (n !== u || o !== p || s !== d || h !== f) && (e.blendFuncSeparate(r(n), r(o), r(s), r(h)), u = n, p = o, d = s, f = h)) : f = d = E = p = u = l = null
    },
    this.setDepthFunc = function(t) {
        if (m !== t) {
            if (t) switch (t) {
            case THREE.NeverDepth:
                e.depthFunc(e.NEVER);
                break;
            case THREE.AlwaysDepth:
                e.depthFunc(e.ALWAYS);
                break;
            case THREE.LessDepth:
                e.depthFunc(e.LESS);
                break;
            case THREE.LessEqualDepth:
                e.depthFunc(e.LEQUAL);
                break;
            case THREE.EqualDepth:
                e.depthFunc(e.EQUAL);
                break;
            case THREE.GreaterEqualDepth:
                e.depthFunc(e.GEQUAL);
                break;
            case THREE.GreaterDepth:
                e.depthFunc(e.GREATER);
                break;
            case THREE.NotEqualDepth:
                e.depthFunc(e.NOTEQUAL);
                break;
            default:
                e.depthFunc(e.LEQUAL)
            } else e.depthFunc(e.LEQUAL);
            m = t
        }
    },
    this.setDepthTest = function(t) {
        t ? this.enable(e.DEPTH_TEST) : this.disable(e.DEPTH_TEST)
    },
    this.setDepthWrite = function(t) {
        T !== t && (e.depthMask(t), T = t)
    },
    this.setColorWrite = function(t) {
        v !== t && (e.colorMask(t, t, t, t), v = t)
    },
    this.setFlipSided = function(t) {
        g !== t && (t ? e.frontFace(e.CW) : e.frontFace(e.CCW), g = t)
    },
    this.setLineWidth = function(t) {
        t !== y && (e.lineWidth(t), y = t)
    },
    this.setPolygonOffset = function(t, r, i) {
        t ? this.enable(e.POLYGON_OFFSET_FILL) : this.disable(e.POLYGON_OFFSET_FILL),
        !t || R === r && H === i || (e.polygonOffset(r, i), R = r, H = i)
    },
    this.setScissorTest = function(t) {
        t ? this.enable(e.SCISSOR_TEST) : this.disable(e.SCISSOR_TEST)
    },
    this.activeTexture = function(t) {
        void 0 === t && (t = e.TEXTURE0 + x - 1),
        b !== t && (e.activeTexture(t), b = t)
    },
    this.bindTexture = function(t, r) {
        void 0 === b && i.activeTexture();
        var n = w[b];
        void 0 === n && (n = {
            type: void 0,
            texture: void 0
        },
        w[b] = n),
        (n.type !== t || n.texture !== r) && (e.bindTexture(t, r), n.type = t, n.texture = r)
    },
    this.compressedTexImage2D = function() {
        try {
            e.compressedTexImage2D.apply(e, arguments)
        } catch(t) {
            console.error(t)
        }
    },
    this.texImage2D = function() {
        try {
            e.texImage2D.apply(e, arguments)
        } catch(t) {
            console.error(t)
        }
    },
    this.reset = function() {
        for (var t = 0; t < o.length; t++) 1 === o[t] && (e.disableVertexAttribArray(t), o[t] = 0);
        s = {},
        g = v = T = c = h = null
    }
},
THREE.LensFlarePlugin = function(e, t) {
    var r, i, n, o, a, s, h, c, l, u, p, E, d, f, m, T, v = e.context,
    g = e.state;
    this.render = function(y, R, H, x) {
        if (0 !== t.length) {
            y = new THREE.Vector3;
            var b = x / H,
            w = .5 * H,
            M = .5 * x,
            S = 16 / x,
            _ = new THREE.Vector2(S * b, S),
            C = new THREE.Vector3(1, 1, 0),
            A = new THREE.Vector2(1, 1);
            if (void 0 === d) {
                var S = new Float32Array([ - 1, -1, 0, 0, 1, -1, 1, 0, 1, 1, 1, 1, -1, 1, 0, 1]),
                L = new Uint16Array([0, 1, 2, 0, 2, 3]);
                p = v.createBuffer(),
                E = v.createBuffer(),
                v.bindBuffer(v.ARRAY_BUFFER, p),
                v.bufferData(v.ARRAY_BUFFER, S, v.STATIC_DRAW),
                v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, E),
                v.bufferData(v.ELEMENT_ARRAY_BUFFER, L, v.STATIC_DRAW),
                m = v.createTexture(),
                T = v.createTexture(),
                g.bindTexture(v.TEXTURE_2D, m),
                v.texImage2D(v.TEXTURE_2D, 0, v.RGB, 16, 16, 0, v.RGB, v.UNSIGNED_BYTE, null),
                v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_S, v.CLAMP_TO_EDGE),
                v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_T, v.CLAMP_TO_EDGE),
                v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MAG_FILTER, v.NEAREST),
                v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MIN_FILTER, v.NEAREST),
                g.bindTexture(v.TEXTURE_2D, T),
                v.texImage2D(v.TEXTURE_2D, 0, v.RGBA, 16, 16, 0, v.RGBA, v.UNSIGNED_BYTE, null),
                v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_S, v.CLAMP_TO_EDGE),
                v.texParameteri(v.TEXTURE_2D, v.TEXTURE_WRAP_T, v.CLAMP_TO_EDGE),
                v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MAG_FILTER, v.NEAREST),
                v.texParameteri(v.TEXTURE_2D, v.TEXTURE_MIN_FILTER, v.NEAREST);
                var S = (f = 0 < v.getParameter(v.MAX_VERTEX_TEXTURE_IMAGE_UNITS)) ? {
                    vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                    fragmentShader: "uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                }: {
                    vertexShader: "uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",
                    fragmentShader: "precision mediump float;\nuniform lowp int renderType;\nuniform sampler2D map;\nuniform sampler2D occlusionMap;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nfloat visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;\nvisibility = ( 1.0 - visibility / 4.0 );\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * visibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"
                },
                L = v.createProgram(),
                P = v.createShader(v.FRAGMENT_SHADER),
                D = v.createShader(v.VERTEX_SHADER),
                k = "precision " + e.getPrecision() + " float;\n";
                v.shaderSource(P, k + S.fragmentShader),
                v.shaderSource(D, k + S.vertexShader),
                v.compileShader(P),
                v.compileShader(D),
                v.attachShader(L, P),
                v.attachShader(L, D),
                v.linkProgram(L),
                d = L,
                l = v.getAttribLocation(d, "position"),
                u = v.getAttribLocation(d, "uv"),
                r = v.getUniformLocation(d, "renderType"),
                i = v.getUniformLocation(d, "map"),
                n = v.getUniformLocation(d, "occlusionMap"),
                o = v.getUniformLocation(d, "opacity"),
                a = v.getUniformLocation(d, "color"),
                s = v.getUniformLocation(d, "scale"),
                h = v.getUniformLocation(d, "rotation"),
                c = v.getUniformLocation(d, "screenPosition")
            }
            for (v.useProgram(d), g.initAttributes(), g.enableAttribute(l), g.enableAttribute(u), g.disableUnusedAttributes(), v.uniform1i(n, 0), v.uniform1i(i, 1), v.bindBuffer(v.ARRAY_BUFFER, p), v.vertexAttribPointer(l, 2, v.FLOAT, !1, 16, 0), v.vertexAttribPointer(u, 2, v.FLOAT, !1, 16, 8), v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, E), g.disable(v.CULL_FACE), v.depthMask(!1), L = 0, P = t.length; P > L; L++) if (S = 16 / x, _.set(S * b, S), D = t[L], y.set(D.matrixWorld.elements[12], D.matrixWorld.elements[13], D.matrixWorld.elements[14]), y.applyMatrix4(R.matrixWorldInverse), y.applyProjection(R.projectionMatrix), C.copy(y), A.x = C.x * w + w, A.y = C.y * M + M, f || 0 < A.x && A.x < H && 0 < A.y && A.y < x) {
                g.activeTexture(v.TEXTURE0),
                g.bindTexture(v.TEXTURE_2D, null),
                g.activeTexture(v.TEXTURE1),
                g.bindTexture(v.TEXTURE_2D, m),
                v.copyTexImage2D(v.TEXTURE_2D, 0, v.RGB, A.x - 8, A.y - 8, 16, 16, 0),
                v.uniform1i(r, 0),
                v.uniform2f(s, _.x, _.y),
                v.uniform3f(c, C.x, C.y, C.z),
                g.disable(v.BLEND),
                g.enable(v.DEPTH_TEST),
                v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0),
                g.activeTexture(v.TEXTURE0),
                g.bindTexture(v.TEXTURE_2D, T),
                v.copyTexImage2D(v.TEXTURE_2D, 0, v.RGBA, A.x - 8, A.y - 8, 16, 16, 0),
                v.uniform1i(r, 1),
                g.disable(v.DEPTH_TEST),
                g.activeTexture(v.TEXTURE1),
                g.bindTexture(v.TEXTURE_2D, m),
                v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0),
                D.positionScreen.copy(C),
                D.customUpdateCallback ? D.customUpdateCallback(D) : D.updateLensFlares(),
                v.uniform1i(r, 2),
                g.enable(v.BLEND);
                for (var k = 0,
                V = D.lensFlares.length; V > k; k++) {
                    var O = D.lensFlares[k];.001 < O.opacity && .001 < O.scale && (C.x = O.x, C.y = O.y, C.z = O.z, S = O.size * O.scale / x, _.x = S * b, _.y = S, v.uniform3f(c, C.x, C.y, C.z), v.uniform2f(s, _.x, _.y), v.uniform1f(h, O.rotation), v.uniform1f(o, O.opacity), v.uniform3f(a, O.color.r, O.color.g, O.color.b), g.setBlending(O.blending, O.blendEquation, O.blendSrc, O.blendDst), e.setTexture(O.texture, 1), v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0))
                }
            }
            g.enable(v.CULL_FACE),
            g.enable(v.DEPTH_TEST),
            v.depthMask(!0),
            e.resetGLState()
        }
    }
},
THREE.SpritePlugin = function(e, t) {
    function r(e, t) {
        return e.z !== t.z ? t.z - e.z: t.id - e.id
    }
    var i, n, o, a, s, h, c, l, u, p, E, d, f, m, T, v, g, y, R, H, x, b = e.context,
    w = e.state,
    M = new THREE.Vector3,
    S = new THREE.Quaternion,
    _ = new THREE.Vector3;
    this.render = function(C, A) {
        if (0 !== t.length) {
            if (void 0 === H) {
                var L = new Float32Array([ - .5, -.5, 0, 0, .5, -.5, 1, 0, .5, .5, 1, 1, -.5, .5, 0, 1]),
                P = new Uint16Array([0, 1, 2, 0, 2, 3]);
                y = b.createBuffer(),
                R = b.createBuffer(),
                b.bindBuffer(b.ARRAY_BUFFER, y),
                b.bufferData(b.ARRAY_BUFFER, L, b.STATIC_DRAW),
                b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, R),
                b.bufferData(b.ELEMENT_ARRAY_BUFFER, P, b.STATIC_DRAW);
                var L = b.createProgram(),
                P = b.createShader(b.VERTEX_SHADER),
                D = b.createShader(b.FRAGMENT_SHADER);
                b.shaderSource(P, ["precision " + e.getPrecision() + " float;", "uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n")),
                b.shaderSource(D, ["precision " + e.getPrecision() + " float;", "uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n")),
                b.compileShader(P),
                b.compileShader(D),
                b.attachShader(L, P),
                b.attachShader(L, D),
                b.linkProgram(L),
                H = L,
                v = b.getAttribLocation(H, "position"),
                g = b.getAttribLocation(H, "uv"),
                i = b.getUniformLocation(H, "uvOffset"),
                n = b.getUniformLocation(H, "uvScale"),
                o = b.getUniformLocation(H, "rotation"),
                a = b.getUniformLocation(H, "scale"),
                s = b.getUniformLocation(H, "color"),
                h = b.getUniformLocation(H, "map"),
                c = b.getUniformLocation(H, "opacity"),
                l = b.getUniformLocation(H, "modelViewMatrix"),
                u = b.getUniformLocation(H, "projectionMatrix"),
                p = b.getUniformLocation(H, "fogType"),
                E = b.getUniformLocation(H, "fogDensity"),
                d = b.getUniformLocation(H, "fogNear"),
                f = b.getUniformLocation(H, "fogFar"),
                m = b.getUniformLocation(H, "fogColor"),
                T = b.getUniformLocation(H, "alphaTest"),
                L = document.createElement("canvas"),
                L.width = 8,
                L.height = 8,
                P = L.getContext("2d"),
                P.fillStyle = "white",
                P.fillRect(0, 0, 8, 8),
                x = new THREE.Texture(L),
                x.needsUpdate = !0
            }
            b.useProgram(H),
            w.initAttributes(),
            w.enableAttribute(v),
            w.enableAttribute(g),
            w.disableUnusedAttributes(),
            w.disable(b.CULL_FACE),
            w.enable(b.BLEND),
            b.bindBuffer(b.ARRAY_BUFFER, y),
            b.vertexAttribPointer(v, 2, b.FLOAT, !1, 16, 0),
            b.vertexAttribPointer(g, 2, b.FLOAT, !1, 16, 8),
            b.bindBuffer(b.ELEMENT_ARRAY_BUFFER, R),
            b.uniformMatrix4fv(u, !1, A.projectionMatrix.elements),
            w.activeTexture(b.TEXTURE0),
            b.uniform1i(h, 0),
            P = L = 0,
            (D = C.fog) ? (b.uniform3f(m, D.color.r, D.color.g, D.color.b), D instanceof THREE.Fog ? (b.uniform1f(d, D.near), b.uniform1f(f, D.far), b.uniform1i(p, 1), P = L = 1) : D instanceof THREE.FogExp2 && (b.uniform1f(E, D.density), b.uniform1i(p, 2), P = L = 2)) : (b.uniform1i(p, 0), P = L = 0);
            for (var D = 0,
            k = t.length; k > D; D++) {
                var V = t[D];
                V.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse, V.matrixWorld),
                V.z = -V.modelViewMatrix.elements[14]
            }
            t.sort(r);
            for (var O = [], D = 0, k = t.length; k > D; D++) {
                var V = t[D],
                F = V.material;
                b.uniform1f(T, F.alphaTest),
                b.uniformMatrix4fv(l, !1, V.modelViewMatrix.elements),
                V.matrixWorld.decompose(M, S, _),
                O[0] = _.x,
                O[1] = _.y,
                V = 0,
                C.fog && F.fog && (V = P),
                L !== V && (b.uniform1i(p, V), L = V),
                null !== F.map ? (b.uniform2f(i, F.map.offset.x, F.map.offset.y), b.uniform2f(n, F.map.repeat.x, F.map.repeat.y)) : (b.uniform2f(i, 0, 0), b.uniform2f(n, 1, 1)),
                b.uniform1f(c, F.opacity),
                b.uniform3f(s, F.color.r, F.color.g, F.color.b),
                b.uniform1f(o, F.rotation),
                b.uniform2fv(a, O),
                w.setBlending(F.blending, F.blendEquation, F.blendSrc, F.blendDst),
                w.setDepthTest(F.depthTest),
                w.setDepthWrite(F.depthWrite),
                F.map && F.map.image && F.map.image.width ? e.setTexture(F.map, 0) : e.setTexture(x, 0),
                b.drawElements(b.TRIANGLES, 6, b.UNSIGNED_SHORT, 0);
            }
            w.enable(b.CULL_FACE),
            e.resetGLState()
        }
    }
},
THREE.CurveUtils = {
    tangentQuadraticBezier: function(e, t, r, i) {
        return 2 * (1 - e) * (r - t) + 2 * e * (i - r)
    },
    tangentCubicBezier: function(e, t, r, i, n) {
        return - 3 * t * (1 - e) * (1 - e) + 3 * r * (1 - e) * (1 - e) - 6 * e * r * (1 - e) + 6 * e * i * (1 - e) - 3 * e * e * i + 3 * e * e * n
    },
    tangentSpline: function(e, t, r, i, n) {
        return 6 * e * e - 6 * e + (3 * e * e - 4 * e + 1) + ( - 6 * e * e + 6 * e) + (3 * e * e - 2 * e)
    },
    interpolate: function(e, t, r, i, n) {
        e = .5 * (r - e),
        i = .5 * (i - t);
        var o = n * n;
        return (2 * t - 2 * r + e + i) * n * o + ( - 3 * t + 3 * r - 2 * e - i) * o + e * n + t
    }
},
THREE.GeometryUtils = {
    merge: function(e, t, r) {
        console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
        var i;
        t instanceof THREE.Mesh && (t.matrixAutoUpdate && t.updateMatrix(), i = t.matrix, t = t.geometry),
        e.merge(t, i, r)
    },
    center: function(e) {
        return console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead."),
        e.center()
    }
},
THREE.ImageUtils = {
    crossOrigin: void 0,
    loadTexture: function(e, t, r, i) {
        console.warn("THREE.ImageUtils.loadTexture is being deprecated. Use THREE.TextureLoader() instead.");
        var n = new THREE.TextureLoader;
        return n.setCrossOrigin(this.crossOrigin),
        e = n.load(e, r, void 0, i),
        t && (e.mapping = t),
        e
    },
    loadTextureCube: function(e, t, r, i) {
        console.warn("THREE.ImageUtils.loadTextureCube is being deprecated. Use THREE.CubeTextureLoader() instead.");
        var n = new THREE.CubeTextureLoader;
        return n.setCrossOrigin(this.crossOrigin),
        e = n.load(e, r, void 0, i),
        t && (e.mapping = t),
        e
    },
    loadCompressedTexture: function() {
        console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")
    },
    loadCompressedTextureCube: function() {
        console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")
    }
},
THREE.SceneUtils = {
    createMultiMaterialObject: function(e, t) {
        for (var r = new THREE.Group,
        i = 0,
        n = t.length; n > i; i++) r.add(new THREE.Mesh(e, t[i]));
        return r
    },
    detach: function(e, t, r) {
        e.applyMatrix(t.matrixWorld),
        t.remove(e),
        r.add(e)
    },
    attach: function(e, t, r) {
        var i = new THREE.Matrix4;
        i.getInverse(r.matrixWorld),
        e.applyMatrix(i),
        t.remove(e),
        r.add(e)
    }
},
THREE.ShapeUtils = {
    area: function(e) {
        for (var t = e.length,
        r = 0,
        i = t - 1,
        n = 0; t > n; i = n++) r += e[i].x * e[n].y - e[n].x * e[i].y;
        return.5 * r
    },
    triangulate: function() {
        return function(e, t) {
            var r = e.length;
            if (3 > r) return null;
            var i, n, o, a = [],
            s = [],
            h = [];
            if (0 < THREE.ShapeUtils.area(e)) for (n = 0; r > n; n++) s[n] = n;
            else for (n = 0; r > n; n++) s[n] = r - 1 - n;
            var c = 2 * r;
            for (n = r - 1; r > 2;) {
                if (0 >= c--) {
                    console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");
                    break
                }
                i = n,
                i >= r && (i = 0),
                n = i + 1,
                n >= r && (n = 0),
                o = n + 1,
                o >= r && (o = 0);
                var l;
                e: {
                    var u = l = void 0,
                    p = void 0,
                    E = void 0,
                    d = void 0,
                    f = void 0,
                    m = void 0,
                    T = void 0,
                    v = void 0,
                    u = e[s[i]].x,
                    p = e[s[i]].y,
                    E = e[s[n]].x,
                    d = e[s[n]].y,
                    f = e[s[o]].x,
                    m = e[s[o]].y;
                    if (Number.EPSILON > (E - u) * (m - p) - (d - p) * (f - u)) l = !1;
                    else {
                        var g = void 0,
                        y = void 0,
                        R = void 0,
                        H = void 0,
                        x = void 0,
                        b = void 0,
                        w = void 0,
                        M = void 0,
                        S = void 0,
                        _ = void 0,
                        S = M = w = v = T = void 0,
                        g = f - E,
                        y = m - d,
                        R = u - f,
                        H = p - m,
                        x = E - u,
                        b = d - p;
                        for (l = 0; r > l; l++) if (T = e[s[l]].x, v = e[s[l]].y, !(T === u && v === p || T === E && v === d || T === f && v === m) && (w = T - u, M = v - p, S = T - E, _ = v - d, T -= f, v -= m, S = g * _ - y * S, w = x * M - b * w, M = R * v - H * T, S >= -Number.EPSILON && M >= -Number.EPSILON && w >= -Number.EPSILON)) {
                            l = !1;
                            break e
                        }
                        l = !0
                    }
                }
                if (l) {
                    for (a.push([e[s[i]], e[s[n]], e[s[o]]]), h.push([s[i], s[n], s[o]]), i = n, o = n + 1; r > o; i++, o++) s[i] = s[o];
                    r--,
                    c = 2 * r
                }
            }
            return t ? h: a
        }
    } (),
    triangulateShape: function(e, t) {
        function r(e, t, r) {
            return e.x !== t.x ? e.x < t.x ? e.x <= r.x && r.x <= t.x: t.x <= r.x && r.x <= e.x: e.y < t.y ? e.y <= r.y && r.y <= t.y: t.y <= r.y && r.y <= e.y
        }

        function i(e, t, i, n, o) {
            var a = t.x - e.x,
            s = t.y - e.y,
            h = n.x - i.x,
            c = n.y - i.y,
            l = e.x - i.x,
            u = e.y - i.y,
            p = s * h - a * c,
            E = s * l - a * u;
            if (Math.abs(p) > Number.EPSILON) {
                if (p > 0) {
                    if (0 > E || E > p) return [];
                    if (h = c * l - h * u, 0 > h || h > p) return []
                } else {
                    if (E > 0 || p > E) return [];
                    if (h = c * l - h * u, h > 0 || p > h) return []
                }
                return 0 === h ? !o || 0 !== E && E !== p ? [e] : [] : h === p ? !o || 0 !== E && E !== p ? [t] : [] : 0 === E ? [i] : E === p ? [n] : (o = h / p, [{
                    x: e.x + o * a,
                    y: e.y + o * s
                }])
            }
            return 0 !== E || c * l !== h * u ? [] : (s = 0 === a && 0 === s, h = 0 === h && 0 === c, s && h ? e.x !== i.x || e.y !== i.y ? [] : [e] : s ? r(i, n, e) ? [e] : [] : h ? r(e, t, i) ? [i] : [] : (0 !== a ? (e.x < t.x ? (a = e, h = e.x, s = t, e = t.x) : (a = t, h = t.x, s = e, e = e.x), i.x < n.x ? (t = i, p = i.x, c = n, i = n.x) : (t = n, p = n.x, c = i, i = i.x)) : (e.y < t.y ? (a = e, h = e.y, s = t, e = t.y) : (a = t, h = t.y, s = e, e = e.y), i.y < n.y ? (t = i, p = i.y, c = n, i = n.y) : (t = n, p = n.y, c = i, i = i.y)), p >= h ? p > e ? [] : e === p ? o ? [] : [t] : i >= e ? [t, s] : [t, c] : h > i ? [] : h === i ? o ? [] : [a] : i >= e ? [a, s] : [a, c]))
        }

        function n(e, t, r, i) {
            var n = t.x - e.x,
            o = t.y - e.y;
            t = r.x - e.x,
            r = r.y - e.y;
            var a = i.x - e.x;
            return i = i.y - e.y,
            e = n * r - o * t,
            n = n * i - o * a,
            Math.abs(e) > Number.EPSILON ? (t = a * r - i * t, e > 0 ? n >= 0 && t >= 0 : n >= 0 || t >= 0) : n > 0
        }
        var o, a, s, h, c, l = {};
        for (s = e.concat(), o = 0, a = t.length; a > o; o++) Array.prototype.push.apply(s, t[o]);
        for (o = 0, a = s.length; a > o; o++) c = s[o].x + ":" + s[o].y,
        void 0 !== l[c] && console.warn("THREE.Shape: Duplicate point", c),
        l[c] = o;
        o = function(e, t) {
            function r(e, t) {
                var r = m.length - 1,
                i = e - 1;
                0 > i && (i = r);
                var o = e + 1;
                return o > r && (o = 0),
                (r = n(m[e], m[i], m[o], s[t])) ? (r = s.length - 1, i = t - 1, 0 > i && (i = r), o = t + 1, o > r && (o = 0), (r = n(s[t], s[i], s[o], m[e])) ? !0 : !1) : !1
            }

            function o(e, t) {
                var r, n;
                for (r = 0; r < m.length; r++) if (n = r + 1, n %= m.length, n = i(e, t, m[r], m[n], !0), 0 < n.length) return ! 0;
                return ! 1
            }

            function a(e, r) {
                var n, o, a, s;
                for (n = 0; n < T.length; n++) for (o = t[T[n]], a = 0; a < o.length; a++) if (s = a + 1, s %= o.length, s = i(e, r, o[a], o[s], !0), 0 < s.length) return ! 0;
                return ! 1
            }
            var s, h, c, l, u, p, E, d, f, m = e.concat(),
            T = [],
            v = [],
            g = 0;
            for (h = t.length; h > g; g++) T.push(g);
            E = 0;
            for (var y = 2 * T.length; 0 < T.length;) {
                if (y--, 0 > y) {
                    console.log("Infinite Loop! Holes left:" + T.length + ", Probably Hole outside Shape!");
                    break
                }
                for (c = E; c < m.length; c++) {
                    for (l = m[c], h = -1, g = 0; g < T.length; g++) if (u = T[g], p = l.x + ":" + l.y + ":" + u, void 0 === v[p]) {
                        for (s = t[u], d = 0; d < s.length; d++) if (u = s[d], r(c, d) && !o(l, u) && !a(l, u)) {
                            h = d,
                            T.splice(g, 1),
                            E = m.slice(0, c + 1),
                            u = m.slice(c),
                            d = s.slice(h),
                            f = s.slice(0, h + 1),
                            m = E.concat(d).concat(f).concat(u),
                            E = c;
                            break
                        }
                        if (h >= 0) break;
                        v[p] = !0
                    }
                    if (h >= 0) break
                }
            }
            return m
        } (e, t);
        var u = THREE.ShapeUtils.triangulate(o, !1);
        for (o = 0, a = u.length; a > o; o++) for (h = u[o], s = 0; 3 > s; s++) c = h[s].x + ":" + h[s].y,
        c = l[c],
        void 0 !== c && (h[s] = c);
        return u.concat()
    },
    isClockWise: function(e) {
        return 0 > THREE.ShapeUtils.area(e)
    },
    b2: function() {
        return function(e, t, r, i) {
            var n = 1 - e;
            return n * n * t + 2 * (1 - e) * e * r + e * e * i
        }
    } (),
    b3: function() {
        return function(e, t, r, i, n) {
            var o = 1 - e,
            a = 1 - e;
            return o * o * o * t + 3 * a * a * e * r + 3 * (1 - e) * e * e * i + e * e * e * n
        }
    } ()
},
THREE.Audio = function(e) {
    THREE.Object3D.call(this),
    this.type = "Audio",
    this.context = e.context,
    this.source = this.context.createBufferSource(),
    this.source.onended = this.onEnded.bind(this),
    this.gain = this.context.createGain(),
    this.gain.connect(this.context.destination),
    this.panner = this.context.createPanner(),
    this.panner.connect(this.gain),
    this.autoplay = !1,
    this.startTime = 0,
    this.playbackRate = 1,
    this.isPlaying = !1
},
THREE.Audio.prototype = Object.create(THREE.Object3D.prototype),
THREE.Audio.prototype.constructor = THREE.Audio,
THREE.Audio.prototype.load = function(e) {
    var t = this,
    r = new XMLHttpRequest;
    return r.open("GET", e, !0),
    r.responseType = "arraybuffer",
    r.onload = function(e) {
        t.context.decodeAudioData(this.response,
        function(e) {
            t.source.buffer = e,
            t.autoplay && t.play()
        })
    },
    r.send(),
    this
},
THREE.Audio.prototype.play = function() {
    if (!0 === this.isPlaying) console.warn("THREE.Audio: Audio is already playing.");
    else {
        var e = this.context.createBufferSource();
        e.buffer = this.source.buffer,
        e.loop = this.source.loop,
        e.onended = this.source.onended,
        e.start(0, this.startTime),
        e.playbackRate.value = this.playbackRate,
        this.isPlaying = !0,
        this.source = e,
        this.connect()
    }
},
THREE.Audio.prototype.pause = function() {
    this.source.stop(),
    this.startTime = this.context.currentTime
},
THREE.Audio.prototype.stop = function() {
    this.source.stop(),
    this.startTime = 0
},
THREE.Audio.prototype.connect = function() {
    void 0 !== this.filter ? (this.source.connect(this.filter), this.filter.connect(this.panner)) : this.source.connect(this.panner)
},
THREE.Audio.prototype.disconnect = function() {
    void 0 !== this.filter ? (this.source.disconnect(this.filter), this.filter.disconnect(this.panner)) : this.source.disconnect(this.panner)
},
THREE.Audio.prototype.setFilter = function(e) { ! 0 === this.isPlaying ? (this.disconnect(), this.filter = e, this.connect()) : this.filter = e
},
THREE.Audio.prototype.getFilter = function() {
    return this.filter
},
THREE.Audio.prototype.setPlaybackRate = function(e) {
    this.playbackRate = e,
    !0 === this.isPlaying && (this.source.playbackRate.value = this.playbackRate)
},
THREE.Audio.prototype.getPlaybackRate = function() {
    return this.playbackRate
},
THREE.Audio.prototype.onEnded = function() {
    this.isPlaying = !1
},
THREE.Audio.prototype.setLoop = function(e) {
    this.source.loop = e
},
THREE.Audio.prototype.getLoop = function() {
    return this.source.loop
},
THREE.Audio.prototype.setRefDistance = function(e) {
    this.panner.refDistance = e
},
THREE.Audio.prototype.getRefDistance = function() {
    return this.panner.refDistance
},
THREE.Audio.prototype.setRolloffFactor = function(e) {
    this.panner.rolloffFactor = e
},
THREE.Audio.prototype.getRolloffFactor = function() {
    return this.panner.rolloffFactor
},
THREE.Audio.prototype.setVolume = function(e) {
    this.gain.gain.value = e
},
THREE.Audio.prototype.getVolume = function() {
    return this.gain.gain.value
},
THREE.Audio.prototype.updateMatrixWorld = function() {
    var e = new THREE.Vector3;
    return function(t) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, t),
        e.setFromMatrixPosition(this.matrixWorld),
        this.panner.setPosition(e.x, e.y, e.z)
    }
} (),
THREE.AudioListener = function() {
    THREE.Object3D.call(this),
    this.type = "AudioListener",
    this.context = new(window.AudioContext || window.webkitAudioContext)
},
THREE.AudioListener.prototype = Object.create(THREE.Object3D.prototype),
THREE.AudioListener.prototype.constructor = THREE.AudioListener,
THREE.AudioListener.prototype.updateMatrixWorld = function() {
    var e = new THREE.Vector3,
    t = new THREE.Quaternion,
    r = new THREE.Vector3,
    i = new THREE.Vector3;
    return function(n) {
        THREE.Object3D.prototype.updateMatrixWorld.call(this, n),
        n = this.context.listener;
        var o = this.up;
        this.matrixWorld.decompose(e, t, r),
        i.set(0, 0, -1).applyQuaternion(t),
        n.setPosition(e.x, e.y, e.z),
        n.setOrientation(i.x, i.y, i.z, o.x, o.y, o.z)
    }
} (),
THREE.Curve = function() {},
THREE.Curve.prototype = {
    constructor: THREE.Curve,
    getPoint: function(e) {
        return console.warn("THREE.Curve: Warning, getPoint() not implemented!"),
        null
    },
    getPointAt: function(e) {
        return e = this.getUtoTmapping(e),
        this.getPoint(e)
    },
    getPoints: function(e) {
        e || (e = 5);
        var t, r = [];
        for (t = 0; e >= t; t++) r.push(this.getPoint(t / e));
        return r
    },
    getSpacedPoints: function(e) {
        e || (e = 5);
        var t, r = [];
        for (t = 0; e >= t; t++) r.push(this.getPointAt(t / e));
        return r
    },
    getLength: function() {
        var e = this.getLengths();
        return e[e.length - 1]
    },
    getLengths: function(e) {
        if (e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions: 200), this.cacheArcLengths && this.cacheArcLengths.length === e + 1 && !this.needsUpdate) return this.cacheArcLengths;
        this.needsUpdate = !1;
        var t, r, i = [],
        n = this.getPoint(0),
        o = 0;
        for (i.push(0), r = 1; e >= r; r++) t = this.getPoint(r / e),
        o += t.distanceTo(n),
        i.push(o),
        n = t;
        return this.cacheArcLengths = i
    },
    updateArcLengths: function() {
        this.needsUpdate = !0,
        this.getLengths()
    },
    getUtoTmapping: function(e, t) {
        var r, i = this.getLengths(),
        n = 0,
        o = i.length;
        r = t ? t: e * i[o - 1];
        for (var a, s = 0,
        h = o - 1; h >= s;) if (n = Math.floor(s + (h - s) / 2), a = i[n] - r, 0 > a) s = n + 1;
        else {
            if (! (a > 0)) {
                h = n;
                break
            }
            h = n - 1
        }
        return n = h,
        i[n] === r ? n / (o - 1) : (s = i[n], i = (n + (r - s) / (i[n + 1] - s)) / (o - 1))
    },
    getTangent: function(e) {
        var t = e - 1e-4;
        return e += 1e-4,
        0 > t && (t = 0),
        e > 1 && (e = 1),
        t = this.getPoint(t),
        this.getPoint(e).clone().sub(t).normalize()
    },
    getTangentAt: function(e) {
        return e = this.getUtoTmapping(e),
        this.getTangent(e)
    }
},
THREE.Curve.Utils = THREE.CurveUtils,
THREE.Curve.create = function(e, t) {
    return e.prototype = Object.create(THREE.Curve.prototype),
    e.prototype.constructor = e,
    e.prototype.getPoint = t,
    e
},
THREE.CurvePath = function() {
    this.curves = [],
    this.autoClose = !1
},
THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype),
THREE.CurvePath.prototype.constructor = THREE.CurvePath,
THREE.CurvePath.prototype.add = function(e) {
    this.curves.push(e)
},
THREE.CurvePath.prototype.closePath = function() {
    var e = this.curves[0].getPoint(0),
    t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new THREE.LineCurve(t, e))
},
THREE.CurvePath.prototype.getPoint = function(e) {
    for (var t = e * this.getLength(), r = this.getCurveLengths(), i = 0; i < r.length;) {
        if (r[i] >= t) return e = this.curves[i],
        t = 1 - (r[i] - t) / e.getLength(),
        e.getPointAt(t);
        i++
    }
    return null
},
THREE.CurvePath.prototype.getLength = function() {
    var e = this.getCurveLengths();
    return e[e.length - 1]
},
THREE.CurvePath.prototype.getCurveLengths = function() {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) return this.cacheLengths;
    for (var e = [], t = 0, r = 0, i = this.curves.length; i > r; r++) t += this.curves[r].getLength(),
    e.push(t);
    return this.cacheLengths = e
},
THREE.CurvePath.prototype.createPointsGeometry = function(e) {
    return e = this.getPoints(e, !0),
    this.createGeometry(e)
},
THREE.CurvePath.prototype.createSpacedPointsGeometry = function(e) {
    return e = this.getSpacedPoints(e, !0),
    this.createGeometry(e)
},
THREE.CurvePath.prototype.createGeometry = function(e) {
    for (var t = new THREE.Geometry,
    r = 0,
    i = e.length; i > r; r++) {
        var n = e[r];
        t.vertices.push(new THREE.Vector3(n.x, n.y, n.z || 0))
    }
    return t
},
THREE.Path = function(e) {
    THREE.CurvePath.call(this),
    this.actions = [],
    e && this.fromPoints(e)
},
THREE.Path.prototype = Object.create(THREE.CurvePath.prototype),
THREE.Path.prototype.constructor = THREE.Path,
THREE.Path.prototype.fromPoints = function(e) {
    this.moveTo(e[0].x, e[0].y);
    for (var t = 1,
    r = e.length; r > t; t++) this.lineTo(e[t].x, e[t].y)
},
THREE.Path.prototype.moveTo = function(e, t) {
    this.actions.push({
        action: "moveTo",
        args: [e, t]
    })
},
THREE.Path.prototype.lineTo = function(e, t) {
    var r = this.actions[this.actions.length - 1].args,
    r = new THREE.LineCurve(new THREE.Vector2(r[r.length - 2], r[r.length - 1]), new THREE.Vector2(e, t));
    this.curves.push(r),
    this.actions.push({
        action: "lineTo",
        args: [e, t]
    })
},
THREE.Path.prototype.quadraticCurveTo = function(e, t, r, i) {
    var n = this.actions[this.actions.length - 1].args,
    n = new THREE.QuadraticBezierCurve(new THREE.Vector2(n[n.length - 2], n[n.length - 1]), new THREE.Vector2(e, t), new THREE.Vector2(r, i));
    this.curves.push(n),
    this.actions.push({
        action: "quadraticCurveTo",
        args: [e, t, r, i]
    })
},
THREE.Path.prototype.bezierCurveTo = function(e, t, r, i, n, o) {
    var a = this.actions[this.actions.length - 1].args,
    a = new THREE.CubicBezierCurve(new THREE.Vector2(a[a.length - 2], a[a.length - 1]), new THREE.Vector2(e, t), new THREE.Vector2(r, i), new THREE.Vector2(n, o));
    this.curves.push(a),
    this.actions.push({
        action: "bezierCurveTo",
        args: [e, t, r, i, n, o]
    })
},
THREE.Path.prototype.splineThru = function(e) {
    var t = Array.prototype.slice.call(arguments),
    r = this.actions[this.actions.length - 1].args,
    r = [new THREE.Vector2(r[r.length - 2], r[r.length - 1])];
    Array.prototype.push.apply(r, e),
    r = new THREE.SplineCurve(r),
    this.curves.push(r),
    this.actions.push({
        action: "splineThru",
        args: t
    })
},
THREE.Path.prototype.arc = function(e, t, r, i, n, o) {
    var a = this.actions[this.actions.length - 1].args;
    this.absarc(e + a[a.length - 2], t + a[a.length - 1], r, i, n, o)
},
THREE.Path.prototype.absarc = function(e, t, r, i, n, o) {
    this.absellipse(e, t, r, r, i, n, o)
},
THREE.Path.prototype.ellipse = function(e, t, r, i, n, o, a, s) {
    var h = this.actions[this.actions.length - 1].args;
    this.absellipse(e + h[h.length - 2], t + h[h.length - 1], r, i, n, o, a, s)
},
THREE.Path.prototype.absellipse = function(e, t, r, i, n, o, a, s) {
    var h = [e, t, r, i, n, o, a, s || 0];
    e = new THREE.EllipseCurve(e, t, r, i, n, o, a, s),
    this.curves.push(e),
    e = e.getPoint(1),
    h.push(e.x),
    h.push(e.y),
    this.actions.push({
        action: "ellipse",
        args: h
    })
},
THREE.Path.prototype.getSpacedPoints = function(e, t) {
    e || (e = 40);
    for (var r = [], i = 0; e > i; i++) r.push(this.getPoint(i / e));
    return r
},
THREE.Path.prototype.getPoints = function(e, t) {
    e = e || 12;
    for (var r, i, n, o, a, s, h, c, l, u, p = THREE.ShapeUtils.b2,
    E = THREE.ShapeUtils.b3,
    d = [], f = 0, m = this.actions.length; m > f; f++) {
        l = this.actions[f];
        var T = l.args;
        switch (l.action) {
        case "moveTo":
            d.push(new THREE.Vector2(T[0], T[1]));
            break;
        case "lineTo":
            d.push(new THREE.Vector2(T[0], T[1]));
            break;
        case "quadraticCurveTo":
            for (r = T[2], i = T[3], a = T[0], s = T[1], 0 < d.length ? (l = d[d.length - 1], h = l.x, c = l.y) : (l = this.actions[f - 1].args, h = l[l.length - 2], c = l[l.length - 1]), T = 1; e >= T; T++) u = T / e,
            l = p(u, h, a, r),
            u = p(u, c, s, i),
            d.push(new THREE.Vector2(l, u));
            break;
        case "bezierCurveTo":
            for (r = T[4], i = T[5], a = T[0], s = T[1], n = T[2], o = T[3], 0 < d.length ? (l = d[d.length - 1], h = l.x, c = l.y) : (l = this.actions[f - 1].args, h = l[l.length - 2], c = l[l.length - 1]), T = 1; e >= T; T++) u = T / e,
            l = E(u, h, a, n, r),
            u = E(u, c, s, o, i),
            d.push(new THREE.Vector2(l, u));
            break;
        case "splineThru":
            for (l = this.actions[f - 1].args, u = [new THREE.Vector2(l[l.length - 2], l[l.length - 1])], l = e * T[0].length, u = u.concat(T[0]), u = new THREE.SplineCurve(u), T = 1; l >= T; T++) d.push(u.getPointAt(T / l));
            break;
        case "arc":
            for (r = T[0], i = T[1], s = T[2], n = T[3], l = T[4], a = !!T[5], h = l - n, c = 2 * e, T = 1; c >= T; T++) u = T / c,
            a || (u = 1 - u),
            u = n + u * h,
            l = r + s * Math.cos(u),
            u = i + s * Math.sin(u),
            d.push(new THREE.Vector2(l, u));
            break;
        case "ellipse":
            r = T[0],
            i = T[1],
            s = T[2],
            o = T[3],
            n = T[4],
            l = T[5],
            a = !!T[6];
            var v = T[7];
            h = l - n,
            c = 2 * e;
            var g, y;
            for (0 !== v && (g = Math.cos(v), y = Math.sin(v)), T = 1; c >= T; T++) {
                if (u = T / c, a || (u = 1 - u), u = n + u * h, l = r + s * Math.cos(u), u = i + o * Math.sin(u), 0 !== v) {
                    var R = l;
                    l = (R - r) * g - (u - i) * y + r,
                    u = (R - r) * y + (u - i) * g + i
                }
                d.push(new THREE.Vector2(l, u))
            }
        }
    }
    return p = d[d.length - 1],
    Math.abs(p.x - d[0].x) < Number.EPSILON && Math.abs(p.y - d[0].y) < Number.EPSILON && d.splice(d.length - 1, 1),
    t && d.push(d[0]),
    d
},
THREE.Path.prototype.toShapes = function(e, t) {
    function r(e) {
        for (var t = [], r = 0, i = e.length; i > r; r++) {
            var n = e[r],
            o = new THREE.Shape;
            o.actions = n.actions,
            o.curves = n.curves,
            t.push(o)
        }
        return t
    }

    function i(e, t) {
        for (var r = t.length,
        i = !1,
        n = r - 1,
        o = 0; r > o; n = o++) {
            var a = t[n],
            s = t[o],
            h = s.x - a.x,
            c = s.y - a.y;
            if (Math.abs(c) > Number.EPSILON) {
                if (0 > c && (a = t[o], h = -h, s = t[n], c = -c), !(e.y < a.y || e.y > s.y)) if (e.y === a.y) {
                    if (e.x === a.x) return ! 0
                } else {
                    if (n = c * (e.x - a.x) - h * (e.y - a.y), 0 === n) return ! 0;
                    0 > n || (i = !i)
                }
            } else if (e.y === a.y && (s.x <= e.x && e.x <= a.x || a.x <= e.x && e.x <= s.x)) return ! 0
        }
        return i
    }
    var n = THREE.ShapeUtils.isClockWise,
    o = function(e) {
        for (var t = [], r = new THREE.Path, i = 0, n = e.length; n > i; i++) {
            var o = e[i],
            a = o.args,
            o = o.action;
            "moveTo" === o && 0 !== r.actions.length && (t.push(r), r = new THREE.Path),
            r[o].apply(r, a)
        }
        return 0 !== r.actions.length && t.push(r),
        t
    } (this.actions);
    if (0 === o.length) return [];
    if (!0 === t) return r(o);
    var a, s, h, c = [];
    if (1 === o.length) return s = o[0],
    h = new THREE.Shape,
    h.actions = s.actions,
    h.curves = s.curves,
    c.push(h),
    c;
    var l = !n(o[0].getPoints()),
    l = e ? !l: l;
    h = [];
    var u, p = [],
    E = [],
    d = 0;
    p[d] = void 0,
    E[d] = [];
    for (var f = 0,
    m = o.length; m > f; f++) s = o[f],
    u = s.getPoints(),
    a = n(u),
    (a = e ? !a: a) ? (!l && p[d] && d++, p[d] = {
        s: new THREE.Shape,
        p: u
    },
    p[d].s.actions = s.actions, p[d].s.curves = s.curves, l && d++, E[d] = []) : E[d].push({
        h: s,
        p: u[0]
    });
    if (!p[0]) return r(o);
    if (1 < p.length) {
        for (f = !1, s = [], n = 0, o = p.length; o > n; n++) h[n] = [];
        for (n = 0, o = p.length; o > n; n++) for (a = E[n], l = 0; l < a.length; l++) {
            for (d = a[l], u = !0, m = 0; m < p.length; m++) i(d.p, p[m].p) && (n !== m && s.push({
                froms: n,
                tos: m,
                hole: l
            }), u ? (u = !1, h[m].push(d)) : f = !0);
            u && h[n].push(d)
        }
        0 < s.length && (f || (E = h))
    }
    for (f = 0, n = p.length; n > f; f++) for (h = p[f].s, c.push(h), s = E[f], o = 0, a = s.length; a > o; o++) h.holes.push(s[o].h);
    return c
},
THREE.Shape = function() {
    THREE.Path.apply(this, arguments),
    this.holes = []
},
THREE.Shape.prototype = Object.create(THREE.Path.prototype),
THREE.Shape.prototype.constructor = THREE.Shape,
THREE.Shape.prototype.extrude = function(e) {
    return new THREE.ExtrudeGeometry(this, e)
},
THREE.Shape.prototype.makeGeometry = function(e) {
    return new THREE.ShapeGeometry(this, e)
},
THREE.Shape.prototype.getPointsHoles = function(e) {
    for (var t = [], r = 0, i = this.holes.length; i > r; r++) t[r] = this.holes[r].getPoints(e);
    return t
},
THREE.Shape.prototype.extractAllPoints = function(e) {
    return {
        shape: this.getPoints(e),
        holes: this.getPointsHoles(e)
    }
},
THREE.Shape.prototype.extractPoints = function(e) {
    return this.extractAllPoints(e)
},
THREE.Shape.Utils = THREE.ShapeUtils,
THREE.LineCurve = function(e, t) {
    this.v1 = e,
    this.v2 = t
},
THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.LineCurve.prototype.constructor = THREE.LineCurve,
THREE.LineCurve.prototype.getPoint = function(e) {
    var t = this.v2.clone().sub(this.v1);
    return t.multiplyScalar(e).add(this.v1),
    t

},
THREE.LineCurve.prototype.getPointAt = function(e) {
    return this.getPoint(e)
},
THREE.LineCurve.prototype.getTangent = function(e) {
    return this.v2.clone().sub(this.v1).normalize()
},
THREE.QuadraticBezierCurve = function(e, t, r) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = r
},
THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.QuadraticBezierCurve.prototype.constructor = THREE.QuadraticBezierCurve,
THREE.QuadraticBezierCurve.prototype.getPoint = function(e) {
    var t = THREE.ShapeUtils.b2;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y))
},
THREE.QuadraticBezierCurve.prototype.getTangent = function(e) {
    var t = THREE.CurveUtils.tangentQuadraticBezier;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y)).normalize()
},
THREE.CubicBezierCurve = function(e, t, r, i) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = r,
    this.v3 = i
},
THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.CubicBezierCurve.prototype.constructor = THREE.CubicBezierCurve,
THREE.CubicBezierCurve.prototype.getPoint = function(e) {
    var t = THREE.ShapeUtils.b3;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y))
},
THREE.CubicBezierCurve.prototype.getTangent = function(e) {
    var t = THREE.CurveUtils.tangentCubicBezier;
    return new THREE.Vector2(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y)).normalize()
},
THREE.SplineCurve = function(e) {
    this.points = void 0 == e ? [] : e
},
THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.SplineCurve.prototype.constructor = THREE.SplineCurve,
THREE.SplineCurve.prototype.getPoint = function(e) {
    var t = this.points;
    e *= t.length - 1;
    var r = Math.floor(e);
    e -= r;
    var i = t[0 === r ? r: r - 1],
    n = t[r],
    o = t[r > t.length - 2 ? t.length - 1 : r + 1],
    t = t[r > t.length - 3 ? t.length - 1 : r + 2],
    r = THREE.CurveUtils.interpolate;
    return new THREE.Vector2(r(i.x, n.x, o.x, t.x, e), r(i.y, n.y, o.y, t.y, e))
},
THREE.EllipseCurve = function(e, t, r, i, n, o, a, s) {
    this.aX = e,
    this.aY = t,
    this.xRadius = r,
    this.yRadius = i,
    this.aStartAngle = n,
    this.aEndAngle = o,
    this.aClockwise = a,
    this.aRotation = s || 0
},
THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype),
THREE.EllipseCurve.prototype.constructor = THREE.EllipseCurve,
THREE.EllipseCurve.prototype.getPoint = function(e) {
    var t = this.aEndAngle - this.aStartAngle;
    0 > t && (t += 2 * Math.PI),
    t > 2 * Math.PI && (t -= 2 * Math.PI),
    t = !0 === this.aClockwise ? this.aEndAngle + (1 - e) * (2 * Math.PI - t) : this.aStartAngle + e * t,
    e = this.aX + this.xRadius * Math.cos(t);
    var r = this.aY + this.yRadius * Math.sin(t);
    if (0 !== this.aRotation) {
        var t = Math.cos(this.aRotation),
        i = Math.sin(this.aRotation),
        n = e;
        e = (n - this.aX) * t - (r - this.aY) * i + this.aX,
        r = (n - this.aX) * i + (r - this.aY) * t + this.aY
    }
    return new THREE.Vector2(e, r)
},
THREE.ArcCurve = function(e, t, r, i, n, o) {
    THREE.EllipseCurve.call(this, e, t, r, r, i, n, o)
},
THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype),
THREE.ArcCurve.prototype.constructor = THREE.ArcCurve,
THREE.LineCurve3 = THREE.Curve.create(function(e, t) {
    this.v1 = e,
    this.v2 = t
},
function(e) {
    var t = new THREE.Vector3;
    return t.subVectors(this.v2, this.v1),
    t.multiplyScalar(e),
    t.add(this.v1),
    t
}),
THREE.QuadraticBezierCurve3 = THREE.Curve.create(function(e, t, r) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = r
},
function(e) {
    var t = THREE.ShapeUtils.b2;
    return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x), t(e, this.v0.y, this.v1.y, this.v2.y), t(e, this.v0.z, this.v1.z, this.v2.z))
}),
THREE.CubicBezierCurve3 = THREE.Curve.create(function(e, t, r, i) {
    this.v0 = e,
    this.v1 = t,
    this.v2 = r,
    this.v3 = i
},
function(e) {
    var t = THREE.ShapeUtils.b3;
    return new THREE.Vector3(t(e, this.v0.x, this.v1.x, this.v2.x, this.v3.x), t(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y), t(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z))
}),
THREE.SplineCurve3 = THREE.Curve.create(function(e) {
    console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3"),
    this.points = void 0 == e ? [] : e
},
function(e) {
    var t = this.points;
    e *= t.length - 1;
    var r = Math.floor(e);
    e -= r;
    var i = t[0 == r ? r: r - 1],
    n = t[r],
    o = t[r > t.length - 2 ? t.length - 1 : r + 1],
    t = t[r > t.length - 3 ? t.length - 1 : r + 2],
    r = THREE.CurveUtils.interpolate;
    return new THREE.Vector3(r(i.x, n.x, o.x, t.x, e), r(i.y, n.y, o.y, t.y, e), r(i.z, n.z, o.z, t.z, e))
}),
THREE.CatmullRomCurve3 = function() {
    function e() {}
    var t = new THREE.Vector3,
    r = new e,
    i = new e,
    n = new e;
    return e.prototype.init = function(e, t, r, i) {
        this.c0 = e,
        this.c1 = r,
        this.c2 = -3 * e + 3 * t - 2 * r - i,
        this.c3 = 2 * e - 2 * t + r + i
    },
    e.prototype.initNonuniformCatmullRom = function(e, t, r, i, n, o, a) {
        e = ((t - e) / n - (r - e) / (n + o) + (r - t) / o) * o,
        i = ((r - t) / o - (i - t) / (o + a) + (i - r) / a) * o,
        this.init(t, r, e, i)
    },
    e.prototype.initCatmullRom = function(e, t, r, i, n) {
        this.init(t, r, n * (r - e), n * (i - t))
    },
    e.prototype.calc = function(e) {
        var t = e * e;
        return this.c0 + this.c1 * e + this.c2 * t + this.c3 * t * e
    },
    THREE.Curve.create(function(e) {
        this.points = e || []
    },
    function(e) {
        var o, a, s = this.points;
        a = s.length,
        2 > a && console.log("duh, you need at least 2 points"),
        e *= a - 1,
        o = Math.floor(e),
        e -= o,
        0 === e && o === a - 1 && (o = a - 2, e = 1);
        var h, c, l;
        if (0 === o ? (t.subVectors(s[0], s[1]).add(s[0]), h = t) : h = s[o - 1], c = s[o], l = s[o + 1], a > o + 2 ? s = s[o + 2] : (t.subVectors(s[a - 1], s[a - 2]).add(s[a - 2]), s = t), void 0 === this.type || "centripetal" === this.type || "chordal" === this.type) {
            var u = "chordal" === this.type ? .5 : .25;
            a = Math.pow(h.distanceToSquared(c), u),
            o = Math.pow(c.distanceToSquared(l), u),
            u = Math.pow(l.distanceToSquared(s), u),
            1e-4 > o && (o = 1),
            1e-4 > a && (a = o),
            1e-4 > u && (u = o),
            r.initNonuniformCatmullRom(h.x, c.x, l.x, s.x, a, o, u),
            i.initNonuniformCatmullRom(h.y, c.y, l.y, s.y, a, o, u),
            n.initNonuniformCatmullRom(h.z, c.z, l.z, s.z, a, o, u)
        } else "catmullrom" === this.type && (a = void 0 !== this.tension ? this.tension: .5, r.initCatmullRom(h.x, c.x, l.x, s.x, a), i.initCatmullRom(h.y, c.y, l.y, s.y, a), n.initCatmullRom(h.z, c.z, l.z, s.z, a));
        return new THREE.Vector3(r.calc(e), i.calc(e), n.calc(e))
    })
} (),
THREE.ClosedSplineCurve3 = THREE.Curve.create(function(e) {
    this.points = void 0 == e ? [] : e
},
function(e) {
    var t = this.points;
    e *= t.length - 0;
    var r = Math.floor(e);
    e -= r;
    var r = r + (r > 0 ? 0 : (Math.floor(Math.abs(r) / t.length) + 1) * t.length),
    i = t[(r - 1) % t.length],
    n = t[r % t.length],
    o = t[(r + 1) % t.length],
    t = t[(r + 2) % t.length],
    r = THREE.CurveUtils.interpolate;
    return new THREE.Vector3(r(i.x, n.x, o.x, t.x, e), r(i.y, n.y, o.y, t.y, e), r(i.z, n.z, o.z, t.z, e))
}),
THREE.BoxGeometry = function(e, t, r, i, n, o) {
    function a(e, t, r, i, n, o, a, h) {
        var c, l = s.widthSegments,
        u = s.heightSegments,
        p = n / 2,
        E = o / 2,
        d = s.vertices.length;
        "x" === e && "y" === t || "y" === e && "x" === t ? c = "z": "x" === e && "z" === t || "z" === e && "x" === t ? (c = "y", u = s.depthSegments) : ("z" === e && "y" === t || "y" === e && "z" === t) && (c = "x", l = s.depthSegments);
        var f = l + 1,
        m = u + 1,
        T = n / l,
        v = o / u,
        g = new THREE.Vector3;
        for (g[c] = a > 0 ? 1 : -1, n = 0; m > n; n++) for (o = 0; f > o; o++) {
            var y = new THREE.Vector3;
            y[e] = (o * T - p) * r,
            y[t] = (n * v - E) * i,
            y[c] = a,
            s.vertices.push(y)
        }
        for (n = 0; u > n; n++) for (o = 0; l > o; o++) E = o + f * n,
        e = o + f * (n + 1),
        t = o + 1 + f * (n + 1),
        r = o + 1 + f * n,
        i = new THREE.Vector2(o / l, 1 - n / u),
        a = new THREE.Vector2(o / l, 1 - (n + 1) / u),
        c = new THREE.Vector2((o + 1) / l, 1 - (n + 1) / u),
        p = new THREE.Vector2((o + 1) / l, 1 - n / u),
        E = new THREE.Face3(E + d, e + d, r + d),
        E.normal.copy(g),
        E.vertexNormals.push(g.clone(), g.clone(), g.clone()),
        E.materialIndex = h,
        s.faces.push(E),
        s.faceVertexUvs[0].push([i, a, p]),
        E = new THREE.Face3(e + d, t + d, r + d),
        E.normal.copy(g),
        E.vertexNormals.push(g.clone(), g.clone(), g.clone()),
        E.materialIndex = h,
        s.faces.push(E),
        s.faceVertexUvs[0].push([a.clone(), c, p.clone()])
    }
    THREE.Geometry.call(this),
    this.type = "BoxGeometry",
    this.parameters = {
        width: e,
        height: t,
        depth: r,
        widthSegments: i,
        heightSegments: n,
        depthSegments: o
    },
    this.widthSegments = i || 1,
    this.heightSegments = n || 1,
    this.depthSegments = o || 1;
    var s = this;
    i = e / 2,
    n = t / 2,
    o = r / 2,
    a("z", "y", -1, -1, r, t, i, 0),
    a("z", "y", 1, -1, r, t, -i, 1),
    a("x", "z", 1, 1, e, r, n, 2),
    a("x", "z", 1, -1, e, r, -n, 3),
    a("x", "y", 1, -1, e, t, o, 4),
    a("x", "y", -1, -1, e, t, -o, 5),
    this.mergeVertices()
},
THREE.BoxGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.BoxGeometry.prototype.constructor = THREE.BoxGeometry,
THREE.BoxGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.BoxGeometry(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments)
},
THREE.CubeGeometry = THREE.BoxGeometry,
THREE.CircleGeometry = function(e, t, r, i) {
    THREE.Geometry.call(this),
    this.type = "CircleGeometry",
    this.parameters = {
        radius: e,
        segments: t,
        thetaStart: r,
        thetaLength: i
    },
    this.fromBufferGeometry(new THREE.CircleBufferGeometry(e, t, r, i))
},
THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.CircleGeometry.prototype.constructor = THREE.CircleGeometry,
THREE.CircleGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.CircleGeometry(e.radius, e.segments, e.thetaStart, e.thetaLength)
},
THREE.CircleBufferGeometry = function(e, t, r, i) {
    THREE.BufferGeometry.call(this),
    this.type = "CircleBufferGeometry",
    this.parameters = {
        radius: e,
        segments: t,
        thetaStart: r,
        thetaLength: i
    },
    e = e || 50,
    t = void 0 !== t ? Math.max(3, t) : 8,
    r = void 0 !== r ? r: 0,
    i = void 0 !== i ? i: 2 * Math.PI;
    var n = t + 2,
    o = new Float32Array(3 * n),
    a = new Float32Array(3 * n),
    n = new Float32Array(2 * n);
    a[2] = 1,
    n[0] = .5,
    n[1] = .5;
    for (var s = 0,
    h = 3,
    c = 2; t >= s; s++, h += 3, c += 2) {
        var l = r + s / t * i;
        o[h] = e * Math.cos(l),
        o[h + 1] = e * Math.sin(l),
        a[h + 2] = 1,
        n[c] = (o[h] / e + 1) / 2,
        n[c + 1] = (o[h + 1] / e + 1) / 2
    }
    for (r = [], h = 1; t >= h; h++) r.push(h, h + 1, 0);
    this.setIndex(new THREE.BufferAttribute(new Uint16Array(r), 1)),
    this.addAttribute("position", new THREE.BufferAttribute(o, 3)),
    this.addAttribute("normal", new THREE.BufferAttribute(a, 3)),
    this.addAttribute("uv", new THREE.BufferAttribute(n, 2)),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
},
THREE.CircleBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.CircleBufferGeometry.prototype.constructor = THREE.CircleBufferGeometry,
THREE.CircleBufferGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.CircleBufferGeometry(e.radius, e.segments, e.thetaStart, e.thetaLength)
},
THREE.CylinderGeometry = function(e, t, r, i, n, o, a, s) {
    THREE.Geometry.call(this),
    this.type = "CylinderGeometry",
    this.parameters = {
        radiusTop: e,
        radiusBottom: t,
        height: r,
        radialSegments: i,
        heightSegments: n,
        openEnded: o,
        thetaStart: a,
        thetaLength: s
    },
    e = void 0 !== e ? e: 20,
    t = void 0 !== t ? t: 20,
    r = void 0 !== r ? r: 100,
    i = i || 8,
    n = n || 1,
    o = void 0 !== o ? o: !1,
    a = void 0 !== a ? a: 0,
    s = void 0 !== s ? s: 2 * Math.PI;
    var h, c, l = r / 2,
    u = [],
    p = [];
    for (c = 0; n >= c; c++) {
        var E = [],
        d = [],
        f = c / n,
        m = f * (t - e) + e;
        for (h = 0; i >= h; h++) {
            var T = h / i,
            v = new THREE.Vector3;
            v.x = m * Math.sin(T * s + a),
            v.y = -f * r + l,
            v.z = m * Math.cos(T * s + a),
            this.vertices.push(v),
            E.push(this.vertices.length - 1),
            d.push(new THREE.Vector2(T, 1 - f))
        }
        u.push(E),
        p.push(d)
    }
    for (r = (t - e) / r, h = 0; i > h; h++) for (0 !== e ? (a = this.vertices[u[0][h]].clone(), s = this.vertices[u[0][h + 1]].clone()) : (a = this.vertices[u[1][h]].clone(), s = this.vertices[u[1][h + 1]].clone()), a.setY(Math.sqrt(a.x * a.x + a.z * a.z) * r).normalize(), s.setY(Math.sqrt(s.x * s.x + s.z * s.z) * r).normalize(), c = 0; n > c; c++) {
        var E = u[c][h],
        d = u[c + 1][h],
        f = u[c + 1][h + 1],
        m = u[c][h + 1],
        T = a.clone(),
        v = a.clone(),
        g = s.clone(),
        y = s.clone(),
        R = p[c][h].clone(),
        H = p[c + 1][h].clone(),
        x = p[c + 1][h + 1].clone(),
        b = p[c][h + 1].clone();
        this.faces.push(new THREE.Face3(E, d, m, [T, v, y])),
        this.faceVertexUvs[0].push([R, H, b]),
        this.faces.push(new THREE.Face3(d, f, m, [v.clone(), g, y.clone()])),
        this.faceVertexUvs[0].push([H.clone(), x, b.clone()])
    }
    if (!1 === o && e > 0) for (this.vertices.push(new THREE.Vector3(0, l, 0)), h = 0; i > h; h++) E = u[0][h],
    d = u[0][h + 1],
    f = this.vertices.length - 1,
    T = new THREE.Vector3(0, 1, 0),
    v = new THREE.Vector3(0, 1, 0),
    g = new THREE.Vector3(0, 1, 0),
    R = p[0][h].clone(),
    H = p[0][h + 1].clone(),
    x = new THREE.Vector2(H.x, 0),
    this.faces.push(new THREE.Face3(E, d, f, [T, v, g], void 0, 1)),
    this.faceVertexUvs[0].push([R, H, x]);
    if (!1 === o && t > 0) for (this.vertices.push(new THREE.Vector3(0, -l, 0)), h = 0; i > h; h++) E = u[n][h + 1],
    d = u[n][h],
    f = this.vertices.length - 1,
    T = new THREE.Vector3(0, -1, 0),
    v = new THREE.Vector3(0, -1, 0),
    g = new THREE.Vector3(0, -1, 0),
    R = p[n][h + 1].clone(),
    H = p[n][h].clone(),
    x = new THREE.Vector2(H.x, 1),
    this.faces.push(new THREE.Face3(E, d, f, [T, v, g], void 0, 2)),
    this.faceVertexUvs[0].push([R, H, x]);
    this.computeFaceNormals()
},
THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.CylinderGeometry.prototype.constructor = THREE.CylinderGeometry,
THREE.CylinderGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.CylinderGeometry(e.radiusTop, e.radiusBottom, e.height, e.radialSegments, e.heightSegments, e.openEnded, e.thetaStart, e.thetaLength)
},
THREE.EdgesGeometry = function(e, t) {
    function r(e, t) {
        return e - t
    }
    THREE.BufferGeometry.call(this);
    var i, n = Math.cos(THREE.Math.degToRad(void 0 !== t ? t: 1)),
    o = [0, 0],
    a = {},
    s = ["a", "b", "c"];
    e instanceof THREE.BufferGeometry ? (i = new THREE.Geometry, i.fromBufferGeometry(e)) : i = e.clone(),
    i.mergeVertices(),
    i.computeFaceNormals();
    var h = i.vertices;
    i = i.faces;
    for (var c = 0,
    l = i.length; l > c; c++) for (var u = i[c], p = 0; 3 > p; p++) {
        o[0] = u[s[p]],
        o[1] = u[s[(p + 1) % 3]],
        o.sort(r);
        var E = o.toString();
        void 0 === a[E] ? a[E] = {
            vert1: o[0],
            vert2: o[1],
            face1: c,
            face2: void 0
        }: a[E].face2 = c
    }
    o = [];
    for (E in a) s = a[E],
    (void 0 === s.face2 || i[s.face1].normal.dot(i[s.face2].normal) <= n) && (c = h[s.vert1], o.push(c.x), o.push(c.y), o.push(c.z), c = h[s.vert2], o.push(c.x), o.push(c.y), o.push(c.z));
    this.addAttribute("position", new THREE.BufferAttribute(new Float32Array(o), 3))
},
THREE.EdgesGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.EdgesGeometry.prototype.constructor = THREE.EdgesGeometry,
THREE.ExtrudeGeometry = function(e, t) {
    "undefined" != typeof e && (THREE.Geometry.call(this), this.type = "ExtrudeGeometry", e = Array.isArray(e) ? e: [e], this.addShapeList(e, t), this.computeFaceNormals())
},
THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ExtrudeGeometry.prototype.constructor = THREE.ExtrudeGeometry,
THREE.ExtrudeGeometry.prototype.addShapeList = function(e, t) {
    for (var r = e.length,
    i = 0; r > i; i++) this.addShape(e[i], t)
},
THREE.ExtrudeGeometry.prototype.addShape = function(e, t) {
    function r(e, t, r) {
        return t || console.error("THREE.ExtrudeGeometry: vec does not exist"),
        t.clone().multiplyScalar(r).add(e)
    }

    function i(e, t, r) {
        var i = 1,
        i = e.x - t.x,
        n = e.y - t.y,
        o = r.x - e.x,
        a = r.y - e.y,
        s = i * i + n * n;
        if (Math.abs(i * a - n * o) > Number.EPSILON) {
            var h = Math.sqrt(s),
            c = Math.sqrt(o * o + a * a),
            s = t.x - n / h;
            if (t = t.y + i / h, o = ((r.x - a / c - s) * a - (r.y + o / c - t) * o) / (i * a - n * o), r = s + i * o - e.x, e = t + n * o - e.y, i = r * r + e * e, 2 >= i) return new THREE.Vector2(r, e);
            i = Math.sqrt(i / 2)
        } else e = !1,
        i > Number.EPSILON ? o > Number.EPSILON && (e = !0) : i < -Number.EPSILON ? o < -Number.EPSILON && (e = !0) : Math.sign(n) === Math.sign(a) && (e = !0),
        e ? (r = -n, e = i, i = Math.sqrt(s)) : (r = i, e = n, i = Math.sqrt(s / 2));
        return new THREE.Vector2(r / i, e / i)
    }

    function n(e, t) {
        var r, i;
        for (U = e.length; 0 <= --U;) {
            r = U,
            i = U - 1,
            0 > i && (i = e.length - 1);
            for (var n = 0,
            o = v + 2 * f,
            n = 0; o > n; n++) {
                var a = O * n,
                s = O * (n + 1),
                h = t + r + a,
                a = t + i + a,
                c = t + i + s,
                s = t + r + s,
                h = h + M,
                a = a + M,
                c = c + M,
                s = s + M;
                w.faces.push(new THREE.Face3(h, a, s, null, null, 1)),
                w.faces.push(new THREE.Face3(a, c, s, null, null, 1)),
                h = R.generateSideWallUV(w, h, a, c, s),
                w.faceVertexUvs[0].push([h[0], h[1], h[3]]),
                w.faceVertexUvs[0].push([h[1], h[2], h[3]])
            }
        }
    }

    function o(e, t, r) {
        w.vertices.push(new THREE.Vector3(e, t, r))
    }

    function a(e, t, r) {
        e += M,
        t += M,
        r += M,
        w.faces.push(new THREE.Face3(e, t, r, null, null, 0)),
        e = R.generateTopUV(w, e, t, r),
        w.faceVertexUvs[0].push(e)
    }
    var s, h, c, l, u, p = void 0 !== t.amount ? t.amount: 100,
    E = void 0 !== t.bevelThickness ? t.bevelThickness: 6,
    d = void 0 !== t.bevelSize ? t.bevelSize: E - 2,
    f = void 0 !== t.bevelSegments ? t.bevelSegments: 3,
    m = void 0 !== t.bevelEnabled ? t.bevelEnabled: !0,
    T = void 0 !== t.curveSegments ? t.curveSegments: 12,
    v = void 0 !== t.steps ? t.steps: 1,
    g = t.extrudePath,
    y = !1,
    R = void 0 !== t.UVGenerator ? t.UVGenerator: THREE.ExtrudeGeometry.WorldUVGenerator;
    g && (s = g.getSpacedPoints(v), y = !0, m = !1, h = void 0 !== t.frames ? t.frames: new THREE.TubeGeometry.FrenetFrames(g, v, !1), c = new THREE.Vector3, l = new THREE.Vector3, u = new THREE.Vector3),
    m || (d = E = f = 0);
    var H, x, b, w = this,
    M = this.vertices.length,
    g = e.extractPoints(T),
    T = g.shape,
    S = g.holes;
    if (g = !THREE.ShapeUtils.isClockWise(T)) {
        for (T = T.reverse(), x = 0, b = S.length; b > x; x++) H = S[x],
        THREE.ShapeUtils.isClockWise(H) && (S[x] = H.reverse());
        g = !1
    }
    var _ = THREE.ShapeUtils.triangulateShape(T, S),
    C = T;
    for (x = 0, b = S.length; b > x; x++) H = S[x],
    T = T.concat(H);
    var A, L, P, D, k, V, O = T.length,
    F = _.length,
    g = [],
    U = 0;
    for (P = C.length, A = P - 1, L = U + 1; P > U; U++, A++, L++) A === P && (A = 0),
    L === P && (L = 0),
    g[U] = i(C[U], C[A], C[L]);
    var B, N = [],
    G = g.concat();
    for (x = 0, b = S.length; b > x; x++) {
        for (H = S[x], B = [], U = 0, P = H.length, A = P - 1, L = U + 1; P > U; U++, A++, L++) A === P && (A = 0),
        L === P && (L = 0),
        B[U] = i(H[U], H[A], H[L]);
        N.push(B),
        G = G.concat(B)
    }
    for (A = 0; f > A; A++) {
        for (P = A / f, D = E * (1 - P), L = d * Math.sin(P * Math.PI / 2), U = 0, P = C.length; P > U; U++) k = r(C[U], g[U], L),
        o(k.x, k.y, -D);
        for (x = 0, b = S.length; b > x; x++) for (H = S[x], B = N[x], U = 0, P = H.length; P > U; U++) k = r(H[U], B[U], L),
        o(k.x, k.y, -D)
    }
    for (L = d, U = 0; O > U; U++) k = m ? r(T[U], G[U], L) : T[U],
    y ? (l.copy(h.normals[0]).multiplyScalar(k.x), c.copy(h.binormals[0]).multiplyScalar(k.y), u.copy(s[0]).add(l).add(c), o(u.x, u.y, u.z)) : o(k.x, k.y, 0);
    for (P = 1; v >= P; P++) for (U = 0; O > U; U++) k = m ? r(T[U], G[U], L) : T[U],
    y ? (l.copy(h.normals[P]).multiplyScalar(k.x), c.copy(h.binormals[P]).multiplyScalar(k.y), u.copy(s[P]).add(l).add(c), o(u.x, u.y, u.z)) : o(k.x, k.y, p / v * P);
    for (A = f - 1; A >= 0; A--) {
        for (P = A / f, D = E * (1 - P), L = d * Math.sin(P * Math.PI / 2), U = 0, P = C.length; P > U; U++) k = r(C[U], g[U], L),
        o(k.x, k.y, p + D);
        for (x = 0, b = S.length; b > x; x++) for (H = S[x], B = N[x], U = 0, P = H.length; P > U; U++) k = r(H[U], B[U], L),
        y ? o(k.x, k.y + s[v - 1].y, s[v - 1].x + D) : o(k.x, k.y, p + D)
    } !
    function() {
        if (m) {
            var e;
            for (e = 0 * O, U = 0; F > U; U++) V = _[U],
            a(V[2] + e, V[1] + e, V[0] + e);
            for (e = v + 2 * f, e *= O, U = 0; F > U; U++) V = _[U],
            a(V[0] + e, V[1] + e, V[2] + e)
        } else {
            for (U = 0; F > U; U++) V = _[U],
            a(V[2], V[1], V[0]);
            for (U = 0; F > U; U++) V = _[U],
            a(V[0] + O * v, V[1] + O * v, V[2] + O * v)
        }
    } (),
    function() {
        var e = 0;
        for (n(C, e), e += C.length, x = 0, b = S.length; b > x; x++) H = S[x],
        n(H, e),
        e += H.length
    } ()
},
THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function(e, t, r, i) {
        return e = e.vertices,
        t = e[t],
        r = e[r],
        i = e[i],
        [new THREE.Vector2(t.x, t.y), new THREE.Vector2(r.x, r.y), new THREE.Vector2(i.x, i.y)]
    },
    generateSideWallUV: function(e, t, r, i, n) {
        return e = e.vertices,
        t = e[t],
        r = e[r],
        i = e[i],
        n = e[n],
        .01 > Math.abs(t.y - r.y) ? [new THREE.Vector2(t.x, 1 - t.z), new THREE.Vector2(r.x, 1 - r.z), new THREE.Vector2(i.x, 1 - i.z), new THREE.Vector2(n.x, 1 - n.z)] : [new THREE.Vector2(t.y, 1 - t.z), new THREE.Vector2(r.y, 1 - r.z), new THREE.Vector2(i.y, 1 - i.z), new THREE.Vector2(n.y, 1 - n.z)]
    }
},
THREE.ShapeGeometry = function(e, t) {
    THREE.Geometry.call(this),
    this.type = "ShapeGeometry",
    !1 === Array.isArray(e) && (e = [e]),
    this.addShapeList(e, t),
    this.computeFaceNormals()
},
THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ShapeGeometry.prototype.constructor = THREE.ShapeGeometry,
THREE.ShapeGeometry.prototype.addShapeList = function(e, t) {
    for (var r = 0,
    i = e.length; i > r; r++) this.addShape(e[r], t);
    return this
},
THREE.ShapeGeometry.prototype.addShape = function(e, t) {
    void 0 === t && (t = {});
    var r, i, n, o = t.material,
    a = void 0 === t.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator: t.UVGenerator,
    s = this.vertices.length;
    r = e.extractPoints(void 0 !== t.curveSegments ? t.curveSegments: 12);
    var h = r.shape,
    c = r.holes;
    if (!THREE.ShapeUtils.isClockWise(h)) for (h = h.reverse(), r = 0, i = c.length; i > r; r++) n = c[r],
    THREE.ShapeUtils.isClockWise(n) && (c[r] = n.reverse());
    var l = THREE.ShapeUtils.triangulateShape(h, c);
    for (r = 0, i = c.length; i > r; r++) n = c[r],
    h = h.concat(n);
    for (c = h.length, i = l.length, r = 0; c > r; r++) n = h[r],
    this.vertices.push(new THREE.Vector3(n.x, n.y, 0));
    for (r = 0; i > r; r++) c = l[r],
    h = c[0] + s,
    n = c[1] + s,
    c = c[2] + s,
    this.faces.push(new THREE.Face3(h, n, c, null, null, o)),
    this.faceVertexUvs[0].push(a.generateTopUV(this, h, n, c))
},
THREE.LatheGeometry = function(e, t, r, i) {
    THREE.Geometry.call(this),
    this.type = "LatheGeometry",
    this.parameters = {
        points: e,
        segments: t,
        phiStart: r,
        phiLength: i
    },
    t = t || 12,
    r = r || 0,
    i = i || 2 * Math.PI;
    for (var n = 1 / (e.length - 1), o = 1 / t, a = 0, s = t; s >= a; a++) for (var h = r + a * o * i,
    c = Math.cos(h), l = Math.sin(h), h = 0, u = e.length; u > h; h++) {
        var p = e[h],
        E = new THREE.Vector3;
        E.x = c * p.x - l * p.y,
        E.y = l * p.x + c * p.y,
        E.z = p.z,
        this.vertices.push(E)
    }
    for (r = e.length, a = 0, s = t; s > a; a++) for (h = 0, u = e.length - 1; u > h; h++) {
        t = l = h + r * a,
        i = l + r;
        var c = l + 1 + r,
        l = l + 1,
        p = a * o,
        E = h * n,
        d = p + o,
        f = E + n;
        this.faces.push(new THREE.Face3(t, i, l)),
        this.faceVertexUvs[0].push([new THREE.Vector2(p, E), new THREE.Vector2(d, E), new THREE.Vector2(p, f)]),
        this.faces.push(new THREE.Face3(i, c, l)),
        this.faceVertexUvs[0].push([new THREE.Vector2(d, E), new THREE.Vector2(d, f), new THREE.Vector2(p, f)])
    }
    this.mergeVertices(),
    this.computeFaceNormals(),
    this.computeVertexNormals()
},
THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.LatheGeometry.prototype.constructor = THREE.LatheGeometry,
THREE.PlaneGeometry = function(e, t, r, i) {
    THREE.Geometry.call(this),
    this.type = "PlaneGeometry",
    this.parameters = {
        width: e,
        height: t,
        widthSegments: r,
        heightSegments: i
    },
    this.fromBufferGeometry(new THREE.PlaneBufferGeometry(e, t, r, i))
},
THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.PlaneGeometry.prototype.constructor = THREE.PlaneGeometry,
THREE.PlaneGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.PlaneGeometry(e.width, e.height, e.widthSegments, e.heightSegments)
},
THREE.PlaneBufferGeometry = function(e, t, r, i) {
    THREE.BufferGeometry.call(this),
    this.type = "PlaneBufferGeometry",
    this.parameters = {
        width: e,
        height: t,
        widthSegments: r,
        heightSegments: i
    };
    var n = e / 2,
    o = t / 2;
    r = Math.floor(r) || 1,
    i = Math.floor(i) || 1;
    var a = r + 1,
    s = i + 1,
    h = e / r,
    c = t / i;
    t = new Float32Array(a * s * 3),
    e = new Float32Array(a * s * 3);
    for (var l = new Float32Array(a * s * 2), u = 0, p = 0, E = 0; s > E; E++) for (var d = E * c - o,
    f = 0; a > f; f++) t[u] = f * h - n,
    t[u + 1] = -d,
    e[u + 2] = 1,
    l[p] = f / r,
    l[p + 1] = 1 - E / i,
    u += 3,
    p += 2;
    for (u = 0, n = new(65535 < t.length / 3 ? Uint32Array: Uint16Array)(r * i * 6), E = 0; i > E; E++) for (f = 0; r > f; f++) o = f + a * (E + 1),
    s = f + 1 + a * (E + 1),
    h = f + 1 + a * E,
    n[u] = f + a * E,
    n[u + 1] = o,
    n[u + 2] = h,
    n[u + 3] = o,
    n[u + 4] = s,
    n[u + 5] = h,
    u += 6;
    this.setIndex(new THREE.BufferAttribute(n, 1)),
    this.addAttribute("position", new THREE.BufferAttribute(t, 3)),
    this.addAttribute("normal", new THREE.BufferAttribute(e, 3)),
    this.addAttribute("uv", new THREE.BufferAttribute(l, 2))
},
THREE.PlaneBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.PlaneBufferGeometry.prototype.constructor = THREE.PlaneBufferGeometry,
THREE.PlaneBufferGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.PlaneBufferGeometry(e.width, e.height, e.widthSegments, e.heightSegments)
},
THREE.RingGeometry = function(e, t, r, i, n, o) {
    THREE.Geometry.call(this),
    this.type = "RingGeometry",
    this.parameters = {
        innerRadius: e,
        outerRadius: t,
        thetaSegments: r,
        phiSegments: i,
        thetaStart: n,
        thetaLength: o
    },
    e = e || 0,
    t = t || 50,
    n = void 0 !== n ? n: 0,
    o = void 0 !== o ? o: 2 * Math.PI,
    r = void 0 !== r ? Math.max(3, r) : 8,
    i = void 0 !== i ? Math.max(1, i) : 8;
    var a, s = [],
    h = e,
    c = (t - e) / i;
    for (e = 0; i + 1 > e; e++) {
        for (a = 0; r + 1 > a; a++) {
            var l = new THREE.Vector3,
            u = n + a / r * o;
            l.x = h * Math.cos(u),
            l.y = h * Math.sin(u),
            this.vertices.push(l),
            s.push(new THREE.Vector2((l.x / t + 1) / 2, (l.y / t + 1) / 2))
        }
        h += c
    }
    for (t = new THREE.Vector3(0, 0, 1), e = 0; i > e; e++) for (n = e * (r + 1), a = 0; r > a; a++) o = u = a + n,
    c = u + r + 1,
    l = u + r + 2,
    this.faces.push(new THREE.Face3(o, c, l, [t.clone(), t.clone(), t.clone()])),
    this.faceVertexUvs[0].push([s[o].clone(), s[c].clone(), s[l].clone()]),
    o = u,
    c = u + r + 2,
    l = u + 1,
    this.faces.push(new THREE.Face3(o, c, l, [t.clone(), t.clone(), t.clone()])),
    this.faceVertexUvs[0].push([s[o].clone(), s[c].clone(), s[l].clone()]);
    this.computeFaceNormals(),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, h)
},
THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.RingGeometry.prototype.constructor = THREE.RingGeometry,
THREE.RingGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.RingGeometry(e.innerRadius, e.outerRadius, e.thetaSegments, e.phiSegments, e.thetaStart, e.thetaLength)
},
THREE.SphereGeometry = function(e, t, r, i, n, o, a) {
    THREE.Geometry.call(this),
    this.type = "SphereGeometry",
    this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: r,
        phiStart: i,
        phiLength: n,
        thetaStart: o,
        thetaLength: a
    },
    this.fromBufferGeometry(new THREE.SphereBufferGeometry(e, t, r, i, n, o, a))
},
THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.SphereGeometry.prototype.constructor = THREE.SphereGeometry,
THREE.SphereGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.SphereGeometry(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength)
},
THREE.SphereBufferGeometry = function(e, t, r, i, n, o, a) {
    THREE.BufferGeometry.call(this),
    this.type = "SphereBufferGeometry",
    this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: r,
        phiStart: i,
        phiLength: n,
        thetaStart: o,
        thetaLength: a
    },
    e = e || 50,
    t = Math.max(3, Math.floor(t) || 8),
    r = Math.max(2, Math.floor(r) || 6),
    i = void 0 !== i ? i: 0,
    n = void 0 !== n ? n: 2 * Math.PI,
    o = void 0 !== o ? o: 0,
    a = void 0 !== a ? a: Math.PI;
    for (var s = o + a,
    h = (t + 1) * (r + 1), c = new THREE.BufferAttribute(new Float32Array(3 * h), 3), l = new THREE.BufferAttribute(new Float32Array(3 * h), 3), h = new THREE.BufferAttribute(new Float32Array(2 * h), 2), u = 0, p = [], E = new THREE.Vector3, d = 0; r >= d; d++) {
        for (var f = [], m = d / r, T = 0; t >= T; T++) {
            var v = T / t,
            g = -e * Math.cos(i + v * n) * Math.sin(o + m * a),
            y = e * Math.cos(o + m * a),
            R = e * Math.sin(i + v * n) * Math.sin(o + m * a);
            E.set(g, y, R).normalize(),
            c.setXYZ(u, g, y, R),
            l.setXYZ(u, E.x, E.y, E.z),
            h.setXY(u, v, 1 - m),
            f.push(u),
            u++
        }
        p.push(f)
    }
    for (i = [], d = 0; r > d; d++) for (T = 0; t > T; T++) n = p[d][T + 1],
    a = p[d][T],
    u = p[d + 1][T],
    E = p[d + 1][T + 1],
    (0 !== d || o > 0) && i.push(n, a, E),
    (d !== r - 1 || s < Math.PI) && i.push(a, u, E);
    this.setIndex(new(65535 < c.count ? THREE.Uint32Attribute: THREE.Uint16Attribute)(i, 1)),
    this.addAttribute("position", c),
    this.addAttribute("normal", l),
    this.addAttribute("uv", h),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, e)
},
THREE.SphereBufferGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.SphereBufferGeometry.prototype.constructor = THREE.SphereBufferGeometry,
THREE.SphereBufferGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.SphereBufferGeometry(e.radius, e.widthSegments, e.heightSegments, e.phiStart, e.phiLength, e.thetaStart, e.thetaLength)
},
THREE.TorusGeometry = function(e, t, r, i, n) {
    THREE.Geometry.call(this),
    this.type = "TorusGeometry",
    this.parameters = {
        radius: e,
        tube: t,
        radialSegments: r,
        tubularSegments: i,
        arc: n
    },
    e = e || 100,
    t = t || 40,
    r = r || 8,
    i = i || 6,
    n = n || 2 * Math.PI;
    for (var o = new THREE.Vector3,
    a = [], s = [], h = 0; r >= h; h++) for (var c = 0; i >= c; c++) {
        var l = c / i * n,
        u = h / r * Math.PI * 2;
        o.x = e * Math.cos(l),
        o.y = e * Math.sin(l);
        var p = new THREE.Vector3;
        p.x = (e + t * Math.cos(u)) * Math.cos(l),
        p.y = (e + t * Math.cos(u)) * Math.sin(l),
        p.z = t * Math.sin(u),
        this.vertices.push(p),
        a.push(new THREE.Vector2(c / i, h / r)),
        s.push(p.clone().sub(o).normalize())
    }
    for (h = 1; r >= h; h++) for (c = 1; i >= c; c++) e = (i + 1) * h + c - 1,
    t = (i + 1) * (h - 1) + c - 1,
    n = (i + 1) * (h - 1) + c,
    o = (i + 1) * h + c,
    l = new THREE.Face3(e, t, o, [s[e].clone(), s[t].clone(), s[o].clone()]),
    this.faces.push(l),
    this.faceVertexUvs[0].push([a[e].clone(), a[t].clone(), a[o].clone()]),
    l = new THREE.Face3(t, n, o, [s[t].clone(), s[n].clone(), s[o].clone()]),
    this.faces.push(l),
    this.faceVertexUvs[0].push([a[t].clone(), a[n].clone(), a[o].clone()]);
    this.computeFaceNormals()
},
THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TorusGeometry.prototype.constructor = THREE.TorusGeometry,
THREE.TorusGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.TorusGeometry(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc)
},
THREE.TorusKnotGeometry = function(e, t, r, i, n, o, a) {
    function s(e, t, r, i, n) {
        var o = Math.cos(e),
        a = Math.sin(e);
        return e *= t / r,
        t = Math.cos(e),
        o *= i * (2 + t) * .5,
        a = i * (2 + t) * a * .5,
        i = n * i * Math.sin(e) * .5,
        new THREE.Vector3(o, a, i)
    }
    THREE.Geometry.call(this),
    this.type = "TorusKnotGeometry",
    this.parameters = {
        radius: e,
        tube: t,
        radialSegments: r,
        tubularSegments: i,
        p: n,
        q: o,
        heightScale: a
    },
    e = e || 100,
    t = t || 40,
    r = r || 64,
    i = i || 8,
    n = n || 2,
    o = o || 3,
    a = a || 1;
    for (var h = Array(r), c = new THREE.Vector3, l = new THREE.Vector3, u = new THREE.Vector3, p = 0; r > p; ++p) {
        h[p] = Array(i);
        var E = p / r * 2 * n * Math.PI,
        d = s(E, o, n, e, a),
        E = s(E + .01, o, n, e, a);
        for (c.subVectors(E, d), l.addVectors(E, d), u.crossVectors(c, l), l.crossVectors(u, c), u.normalize(), l.normalize(), E = 0; i > E; ++E) {
            var f = E / i * 2 * Math.PI,
            m = -t * Math.cos(f),
            f = t * Math.sin(f),
            T = new THREE.Vector3;
            T.x = d.x + m * l.x + f * u.x,
            T.y = d.y + m * l.y + f * u.y,
            T.z = d.z + m * l.z + f * u.z,
            h[p][E] = this.vertices.push(T) - 1
        }
    }
    for (p = 0; r > p; ++p) for (E = 0; i > E; ++E) n = (p + 1) % r,
    o = (E + 1) % i,
    e = h[p][E],
    t = h[n][E],
    n = h[n][o],
    o = h[p][o],
    a = new THREE.Vector2(p / r, E / i),
    c = new THREE.Vector2((p + 1) / r, E / i),
    l = new THREE.Vector2((p + 1) / r, (E + 1) / i),
    u = new THREE.Vector2(p / r, (E + 1) / i),
    this.faces.push(new THREE.Face3(e, t, o)),
    this.faceVertexUvs[0].push([a, c, u]),
    this.faces.push(new THREE.Face3(t, n, o)),
    this.faceVertexUvs[0].push([c.clone(), l, u.clone()]);
    this.computeFaceNormals(),
    this.computeVertexNormals()
},
THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TorusKnotGeometry.prototype.constructor = THREE.TorusKnotGeometry,
THREE.TorusKnotGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.TorusKnotGeometry(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.p, e.q, e.heightScale)
},
THREE.TubeGeometry = function(e, t, r, i, n, o) {
    THREE.Geometry.call(this),
    this.type = "TubeGeometry",
    this.parameters = {
        path: e,
        segments: t,
        radius: r,
        radialSegments: i,
        closed: n,
        taper: o
    },
    t = t || 64,
    r = r || 1,
    i = i || 8,
    n = n || !1,
    o = o || THREE.TubeGeometry.NoTaper;
    var a, s, h, c, l, u, p, E, d, f, m = [],
    T = t + 1,
    v = new THREE.Vector3;
    for (E = new THREE.TubeGeometry.FrenetFrames(e, t, n), d = E.normals, f = E.binormals, this.tangents = E.tangents, this.normals = d, this.binormals = f, E = 0; T > E; E++) for (m[E] = [], h = E / (T - 1), p = e.getPointAt(h), a = d[E], s = f[E], l = r * o(h), h = 0; i > h; h++) c = h / i * 2 * Math.PI,
    u = -l * Math.cos(c),
    c = l * Math.sin(c),
    v.copy(p),
    v.x += u * a.x + c * s.x,
    v.y += u * a.y + c * s.y,
    v.z += u * a.z + c * s.z,
    m[E][h] = this.vertices.push(new THREE.Vector3(v.x, v.y, v.z)) - 1;
    for (E = 0; t > E; E++) for (h = 0; i > h; h++) o = n ? (E + 1) % t: E + 1,
    T = (h + 1) % i,
    e = m[E][h],
    r = m[o][h],
    o = m[o][T],
    T = m[E][T],
    v = new THREE.Vector2(E / t, h / i),
    d = new THREE.Vector2((E + 1) / t, h / i),
    f = new THREE.Vector2((E + 1) / t, (h + 1) / i),
    a = new THREE.Vector2(E / t, (h + 1) / i),
    this.faces.push(new THREE.Face3(e, r, T)),
    this.faceVertexUvs[0].push([v, d, a]),
    this.faces.push(new THREE.Face3(r, o, T)),
    this.faceVertexUvs[0].push([d.clone(), f, a.clone()]);
    this.computeFaceNormals(),
    this.computeVertexNormals()
},
THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.TubeGeometry.prototype.constructor = THREE.TubeGeometry,
THREE.TubeGeometry.prototype.clone = function() {
    return new this.constructor(this.parameters.path, this.parameters.segments, this.parameters.radius, this.parameters.radialSegments, this.parameters.closed, this.parameters.taper)
},
THREE.TubeGeometry.NoTaper = function(e) {
    return 1
},
THREE.TubeGeometry.SinusoidalTaper = function(e) {
    return Math.sin(Math.PI * e)
},
THREE.TubeGeometry.FrenetFrames = function(e, t, r) {
    var i = new THREE.Vector3,
    n = [],
    o = [],
    a = [],
    s = new THREE.Vector3,
    h = new THREE.Matrix4;
    t += 1;
    var c, l, u;
    for (this.tangents = n, this.normals = o, this.binormals = a, c = 0; t > c; c++) l = c / (t - 1),
    n[c] = e.getTangentAt(l),
    n[c].normalize();
    for (o[0] = new THREE.Vector3, a[0] = new THREE.Vector3, e = Number.MAX_VALUE, c = Math.abs(n[0].x), l = Math.abs(n[0].y), u = Math.abs(n[0].z), e >= c && (e = c, i.set(1, 0, 0)), e >= l && (e = l, i.set(0, 1, 0)), e >= u && i.set(0, 0, 1), s.crossVectors(n[0], i).normalize(), o[0].crossVectors(n[0], s), a[0].crossVectors(n[0], o[0]), c = 1; t > c; c++) o[c] = o[c - 1].clone(),
    a[c] = a[c - 1].clone(),
    s.crossVectors(n[c - 1], n[c]),
    s.length() > Number.EPSILON && (s.normalize(), i = Math.acos(THREE.Math.clamp(n[c - 1].dot(n[c]), -1, 1)), o[c].applyMatrix4(h.makeRotationAxis(s, i))),
    a[c].crossVectors(n[c], o[c]);
    if (r) for (i = Math.acos(THREE.Math.clamp(o[0].dot(o[t - 1]), -1, 1)), i /= t - 1, 0 < n[0].dot(s.crossVectors(o[0], o[t - 1])) && (i = -i), c = 1; t > c; c++) o[c].applyMatrix4(h.makeRotationAxis(n[c], i * c)),
    a[c].crossVectors(n[c], o[c])
},
THREE.PolyhedronGeometry = function(e, t, r, i) {
    function n(e) {
        var t = e.normalize().clone();
        t.index = h.vertices.push(t) - 1;
        var r = Math.atan2(e.z, -e.x) / 2 / Math.PI + .5;
        return e = Math.atan2( - e.y, Math.sqrt(e.x * e.x + e.z * e.z)) / Math.PI + .5,
        t.uv = new THREE.Vector2(r, 1 - e),
        t
    }

    function o(e, t, r, i) {
        i = new THREE.Face3(e.index, t.index, r.index, [e.clone(), t.clone(), r.clone()], void 0, i),
        h.faces.push(i),
        m.copy(e).add(t).add(r).divideScalar(3),
        i = Math.atan2(m.z, -m.x),
        h.faceVertexUvs[0].push([s(e.uv, e, i), s(t.uv, t, i), s(r.uv, r, i)])
    }

    function a(e, t) {
        for (var r = Math.pow(2, t), i = n(h.vertices[e.a]), a = n(h.vertices[e.b]), s = n(h.vertices[e.c]), c = [], l = e.materialIndex, u = 0; r >= u; u++) {
            c[u] = [];
            for (var p = n(i.clone().lerp(s, u / r)), E = n(a.clone().lerp(s, u / r)), d = r - u, f = 0; d >= f; f++) c[u][f] = 0 === f && u === r ? p: n(p.clone().lerp(E, f / d))
        }
        for (u = 0; r > u; u++) for (f = 0; 2 * (r - u) - 1 > f; f++) i = Math.floor(f / 2),
        0 === f % 2 ? o(c[u][i + 1], c[u + 1][i], c[u][i], l) : o(c[u][i + 1], c[u + 1][i + 1], c[u + 1][i], l)
    }

    function s(e, t, r) {
        return 0 > r && 1 === e.x && (e = new THREE.Vector2(e.x - 1, e.y)),
        0 === t.x && 0 === t.z && (e = new THREE.Vector2(r / 2 / Math.PI + .5, e.y)),
        e.clone()
    }
    THREE.Geometry.call(this),
    this.type = "PolyhedronGeometry",
    this.parameters = {
        vertices: e,
        indices: t,
        radius: r,
        detail: i
    },
    r = r || 1,
    i = i || 0;
    for (var h = this,
    c = 0,
    l = e.length; l > c; c += 3) n(new THREE.Vector3(e[c], e[c + 1], e[c + 2]));
    e = this.vertices;
    for (var u = [], p = c = 0, l = t.length; l > c; c += 3, p++) {
        var E = e[t[c]],
        d = e[t[c + 1]],
        f = e[t[c + 2]];
        u[p] = new THREE.Face3(E.index, d.index, f.index, [E.clone(), d.clone(), f.clone()], void 0, p)
    }
    for (var m = new THREE.Vector3,
    c = 0,
    l = u.length; l > c; c++) a(u[c], i);
    for (c = 0, l = this.faceVertexUvs[0].length; l > c; c++) t = this.faceVertexUvs[0][c],
    i = t[0].x,
    e = t[1].x,
    u = t[2].x,
    p = Math.max(i, e, u),
    E = Math.min(i, e, u),
    p > .9 && .1 > E && (.2 > i && (t[0].x += 1), .2 > e && (t[1].x += 1), .2 > u && (t[2].x += 1));
    for (c = 0, l = this.vertices.length; l > c; c++) this.vertices[c].multiplyScalar(r);
    this.mergeVertices(),
    this.computeFaceNormals(),
    this.boundingSphere = new THREE.Sphere(new THREE.Vector3, r)
},
THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.PolyhedronGeometry.prototype.constructor = THREE.PolyhedronGeometry,
THREE.PolyhedronGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.PolyhedronGeometry(e.vertices, e.indices, e.radius, e.detail)
},
THREE.DodecahedronGeometry = function(e, t) {
    var r = (1 + Math.sqrt(5)) / 2,
    i = 1 / r;
    THREE.PolyhedronGeometry.call(this, [ - 1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -i, -r, 0, -i, r, 0, i, -r, 0, i, r, -i, -r, 0, -i, r, 0, i, -r, 0, i, r, 0, -r, 0, -i, r, 0, -i, -r, 0, i, r, 0, i], [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], e, t),
    this.type = "DodecahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
},
THREE.DodecahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.DodecahedronGeometry.prototype.constructor = THREE.DodecahedronGeometry,
THREE.DodecahedronGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.DodecahedronGeometry(e.radius, e.detail)
},
THREE.IcosahedronGeometry = function(e, t) {
    var r = (1 + Math.sqrt(5)) / 2;
    THREE.PolyhedronGeometry.call(this, [ - 1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, 0, 0, -1, r, 0, 1, r, 0, -1, -r, 0, 1, -r, r, 0, -1, r, 0, 1, -r, 0, -1, -r, 0, 1], [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], e, t),
    this.type = "IcosahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
},
THREE.IcosahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.IcosahedronGeometry.prototype.constructor = THREE.IcosahedronGeometry,
THREE.IcosahedronGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.IcosahedronGeometry(e.radius, e.detail)
},
THREE.OctahedronGeometry = function(e, t) {
    THREE.PolyhedronGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], e, t),
    this.type = "OctahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
},
THREE.OctahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.OctahedronGeometry.prototype.constructor = THREE.OctahedronGeometry,
THREE.OctahedronGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.OctahedronGeometry(e.radius, e.detail)
},
THREE.TetrahedronGeometry = function(e, t) {
    THREE.PolyhedronGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], e, t),
    this.type = "TetrahedronGeometry",
    this.parameters = {
        radius: e,
        detail: t
    }
},
THREE.TetrahedronGeometry.prototype = Object.create(THREE.PolyhedronGeometry.prototype),
THREE.TetrahedronGeometry.prototype.constructor = THREE.TetrahedronGeometry,
THREE.TetrahedronGeometry.prototype.clone = function() {
    var e = this.parameters;
    return new THREE.TetrahedronGeometry(e.radius, e.detail)
},
THREE.ParametricGeometry = function(e, t, r) {
    THREE.Geometry.call(this),
    this.type = "ParametricGeometry",
    this.parameters = {
        func: e,
        slices: t,
        stacks: r
    };
    var i, n, o, a, s = this.vertices,
    h = this.faces,
    c = this.faceVertexUvs[0],
    l = t + 1;
    for (i = 0; r >= i; i++) for (a = i / r, n = 0; t >= n; n++) o = n / t,
    o = e(o, a),
    s.push(o);
    var u, p, E, d;
    for (i = 0; r > i; i++) for (n = 0; t > n; n++) e = i * l + n,
    s = i * l + n + 1,
    a = (i + 1) * l + n + 1,
    o = (i + 1) * l + n,
    u = new THREE.Vector2(n / t, i / r),
    p = new THREE.Vector2((n + 1) / t, i / r),
    E = new THREE.Vector2((n + 1) / t, (i + 1) / r),
    d = new THREE.Vector2(n / t, (i + 1) / r),
    h.push(new THREE.Face3(e, s, o)),
    c.push([u, p, d]),
    h.push(new THREE.Face3(s, a, o)),
    c.push([p.clone(), E, d.clone()]);
    this.computeFaceNormals(),
    this.computeVertexNormals()
},
THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype),
THREE.ParametricGeometry.prototype.constructor = THREE.ParametricGeometry,
THREE.WireframeGeometry = function(e) {
    function t(e, t) {
        return e - t
    }
    THREE.BufferGeometry.call(this);
    var r = [0, 0],
    i = {},
    n = ["a", "b", "c"];
    if (e instanceof THREE.Geometry) {
        var o = e.vertices,
        a = e.faces,
        s = 0,
        h = new Uint32Array(6 * a.length);
        e = 0;
        for (var c = a.length; c > e; e++) for (var l = a[e], u = 0; 3 > u; u++) {
            r[0] = l[n[u]],
            r[1] = l[n[(u + 1) % 3]],
            r.sort(t);
            var p = r.toString();
            void 0 === i[p] && (h[2 * s] = r[0], h[2 * s + 1] = r[1], i[p] = !0, s++)
        }
        for (r = new Float32Array(6 * s), e = 0, c = s; c > e; e++) for (u = 0; 2 > u; u++) i = o[h[2 * e + u]],
        s = 6 * e + 3 * u,
        r[s + 0] = i.x,
        r[s + 1] = i.y,
        r[s + 2] = i.z;
        this.addAttribute("position", new THREE.BufferAttribute(r, 3))
    } else if (e instanceof THREE.BufferGeometry) {
        if (null !== e.index) {
            for (c = e.index.array, o = e.attributes.position, n = e.drawcalls, s = 0, 0 === n.length && e.addGroup(0, c.length), h = new Uint32Array(2 * c.length), a = 0, l = n.length; l > a; ++a) {
                e = n[a],
                u = e.start,
                p = e.count,
                e = u;
                for (var E = u + p; E > e; e += 3) for (u = 0; 3 > u; u++) r[0] = c[e + u],
                r[1] = c[e + (u + 1) % 3],
                r.sort(t),
                p = r.toString(),
                void 0 === i[p] && (h[2 * s] = r[0], h[2 * s + 1] = r[1], i[p] = !0, s++)
            }
            for (r = new Float32Array(6 * s), e = 0, c = s; c > e; e++) for (u = 0; 2 > u; u++) s = 6 * e + 3 * u,
            i = h[2 * e + u],
            r[s + 0] = o.getX(i),
            r[s + 1] = o.getY(i),
            r[s + 2] = o.getZ(i)
        } else for (o = e.attributes.position.array, s = o.length / 3, h = s / 3, r = new Float32Array(6 * s), e = 0, c = h; c > e; e++) for (u = 0; 3 > u; u++) s = 18 * e + 6 * u,
        h = 9 * e + 3 * u,
        r[s + 0] = o[h],
        r[s + 1] = o[h + 1],
        r[s + 2] = o[h + 2],
        i = 9 * e + (u + 1) % 3 * 3,
        r[s + 3] = o[i],
        r[s + 4] = o[i + 1],
        r[s + 5] = o[i + 2];
        this.addAttribute("position", new THREE.BufferAttribute(r, 3))
    }
},
THREE.WireframeGeometry.prototype = Object.create(THREE.BufferGeometry.prototype),
THREE.WireframeGeometry.prototype.constructor = THREE.WireframeGeometry,
THREE.AxisHelper = function(e) {
    e = e || 1;
    var t = new Float32Array([0, 0, 0, e, 0, 0, 0, 0, 0, 0, e, 0, 0, 0, 0, 0, 0, e]),
    r = new Float32Array([1, 0, 0, 1, .6, 0, 0, 1, 0, .6, 1, 0, 0, 0, 1, 0, .6, 1]);
    e = new THREE.BufferGeometry,
    e.addAttribute("position", new THREE.BufferAttribute(t, 3)),
    e.addAttribute("color", new THREE.BufferAttribute(r, 3)),
    t = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    }),
    THREE.LineSegments.call(this, e, t)
},
THREE.AxisHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.AxisHelper.prototype.constructor = THREE.AxisHelper,
THREE.ArrowHelper = function() {
    var e = new THREE.Geometry;
    e.vertices.push(new THREE.Vector3(0, 0, 0), new THREE.Vector3(0, 1, 0));
    var t = new THREE.CylinderGeometry(0, .5, 1, 5, 1);
    return t.translate(0, -.5, 0),
    function(r, i, n, o, a, s) {
        THREE.Object3D.call(this),
        void 0 === o && (o = 16776960),
        void 0 === n && (n = 1),
        void 0 === a && (a = .2 * n),
        void 0 === s && (s = .2 * a),
        this.position.copy(i),
        n > a && (this.line = new THREE.Line(e, new THREE.LineBasicMaterial({
            color: o
        })), this.line.matrixAutoUpdate = !1, this.add(this.line)),
        this.cone = new THREE.Mesh(t, new THREE.MeshBasicMaterial({
            color: o
        })),
        this.cone.matrixAutoUpdate = !1,
        this.add(this.cone),
        this.setDirection(r),
        this.setLength(n, a, s)
    }
} (),
THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.ArrowHelper.prototype.constructor = THREE.ArrowHelper,
THREE.ArrowHelper.prototype.setDirection = function() {
    var e, t = new THREE.Vector3;
    return function(r) {.99999 < r.y ? this.quaternion.set(0, 0, 0, 1) : -.99999 > r.y ? this.quaternion.set(1, 0, 0, 0) : (t.set(r.z, 0, -r.x).normalize(), e = Math.acos(r.y), this.quaternion.setFromAxisAngle(t, e))
    }
} (),
THREE.ArrowHelper.prototype.setLength = function(e, t, r) {
    void 0 === t && (t = .2 * e),
    void 0 === r && (r = .2 * t),
    e > t && (this.line.scale.set(1, e - t, 1), this.line.updateMatrix()),
    this.cone.scale.set(r, t, r),
    this.cone.position.y = e,
    this.cone.updateMatrix()
},
THREE.ArrowHelper.prototype.setColor = function(e) {
    void 0 !== this.line && this.line.material.color.set(e),
    this.cone.material.color.set(e)
},
THREE.BoxHelper = function(e) {
    var t = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]),
    r = new Float32Array(24),
    i = new THREE.BufferGeometry;
    i.setIndex(new THREE.BufferAttribute(t, 1)),
    i.addAttribute("position", new THREE.BufferAttribute(r, 3)),
    THREE.LineSegments.call(this, i, new THREE.LineBasicMaterial({
        color: 16776960
    })),
    void 0 !== e && this.update(e)
},
THREE.BoxHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.BoxHelper.prototype.constructor = THREE.BoxHelper,
THREE.BoxHelper.prototype.update = function() {
    var e = new THREE.Box3;
    return function(t) {
        if (e.setFromObject(t), !e.empty()) {
            t = e.min;
            var r = e.max,
            i = this.geometry.attributes.position,
            n = i.array;
            n[0] = r.x,
            n[1] = r.y,
            n[2] = r.z,
            n[3] = t.x,
            n[4] = r.y,
            n[5] = r.z,
            n[6] = t.x,
            n[7] = t.y,
            n[8] = r.z,
            n[9] = r.x,
            n[10] = t.y,
            n[11] = r.z,
            n[12] = r.x,
            n[13] = r.y,
            n[14] = t.z,
            n[15] = t.x,
            n[16] = r.y,
            n[17] = t.z,
            n[18] = t.x,
            n[19] = t.y,
            n[20] = t.z,
            n[21] = r.x,
            n[22] = t.y,
            n[23] = t.z,
            i.needsUpdate = !0,
            this.geometry.computeBoundingSphere()
        }
    }
} (),
THREE.BoundingBoxHelper = function(e, t) {
    var r = void 0 !== t ? t: 8947848;
    this.object = e,
    this.box = new THREE.Box3,
    THREE.Mesh.call(this, new THREE.BoxGeometry(1, 1, 1), new THREE.MeshBasicMaterial({
        color: r,
        wireframe: !0
    }))
},
THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype),
THREE.BoundingBoxHelper.prototype.constructor = THREE.BoundingBoxHelper,
THREE.BoundingBoxHelper.prototype.update = function() {
    this.box.setFromObject(this.object),
    this.box.size(this.scale),
    this.box.center(this.position)
},
THREE.CameraHelper = function(e) {
    function t(e, t, i) {
        r(e, i),
        r(t, i)
    }

    function r(e, t) {
        i.vertices.push(new THREE.Vector3),
        i.colors.push(new THREE.Color(t)),
        void 0 === o[e] && (o[e] = []),
        o[e].push(i.vertices.length - 1)
    }
    var i = new THREE.Geometry,
    n = new THREE.LineBasicMaterial({
        color: 16777215,
        vertexColors: THREE.FaceColors
    }),
    o = {};
    t("n1", "n2", 16755200),
    t("n2", "n4", 16755200),
    t("n4", "n3", 16755200),
    t("n3", "n1", 16755200),
    t("f1", "f2", 16755200),
    t("f2", "f4", 16755200),
    t("f4", "f3", 16755200),
    t("f3", "f1", 16755200),
    t("n1", "f1", 16755200),
    t("n2", "f2", 16755200),
    t("n3", "f3", 16755200),
    t("n4", "f4", 16755200),
    t("p", "n1", 16711680),
    t("p", "n2", 16711680),
    t("p", "n3", 16711680),
    t("p", "n4", 16711680),
    t("u1", "u2", 43775),
    t("u2", "u3", 43775),
    t("u3", "u1", 43775),
    t("c", "t", 16777215),
    t("p", "c", 3355443),
    t("cn1", "cn2", 3355443),
    t("cn3", "cn4", 3355443),
    t("cf1", "cf2", 3355443),
    t("cf3", "cf4", 3355443),
    THREE.LineSegments.call(this, i, n),
    this.camera = e,
    this.camera.updateProjectionMatrix(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.pointMap = o,
    this.update()
},
THREE.CameraHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.CameraHelper.prototype.constructor = THREE.CameraHelper,
THREE.CameraHelper.prototype.update = function() {
    function e(e, o, a, s) {
        if (i.set(o, a, s).unproject(n), e = r[e], void 0 !== e) for (o = 0, a = e.length; a > o; o++) t.vertices[e[o]].copy(i)
    }
    var t, r, i = new THREE.Vector3,
    n = new THREE.Camera;
    return function() {
        t = this.geometry,
        r = this.pointMap,
        n.projectionMatrix.copy(this.camera.projectionMatrix),
        e("c", 0, 0, -1),
        e("t", 0, 0, 1),
        e("n1", -1, -1, -1),
        e("n2", 1, -1, -1),
        e("n3", -1, 1, -1),
        e("n4", 1, 1, -1),
        e("f1", -1, -1, 1),
        e("f2", 1, -1, 1),
        e("f3", -1, 1, 1),
        e("f4", 1, 1, 1),
        e("u1", .7, 1.1, -1),
        e("u2", -.7, 1.1, -1),
        e("u3", 0, 2, -1),
        e("cf1", -1, 0, 1),
        e("cf2", 1, 0, 1),
        e("cf3", 0, -1, 1),
        e("cf4", 0, 1, 1),
        e("cn1", -1, 0, -1),
        e("cn2", 1, 0, -1),
        e("cn3", 0, -1, -1),
        e("cn4", 0, 1, -1),
        t.verticesNeedUpdate = !0
    }
} (),
THREE.DirectionalLightHelper = function(e, t) {
    THREE.Object3D.call(this),
    this.light = e,
    this.light.updateMatrixWorld(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    t = t || 1;
    var r = new THREE.Geometry;
    r.vertices.push(new THREE.Vector3( - t, t, 0), new THREE.Vector3(t, t, 0), new THREE.Vector3(t, -t, 0), new THREE.Vector3( - t, -t, 0), new THREE.Vector3( - t, t, 0));
    var i = new THREE.LineBasicMaterial({
        fog: !1
    });
    i.color.copy(this.light.color).multiplyScalar(this.light.intensity),
    this.lightPlane = new THREE.Line(r, i),
    this.add(this.lightPlane),
    r = new THREE.Geometry,
    r.vertices.push(new THREE.Vector3, new THREE.Vector3),
    i = new THREE.LineBasicMaterial({
        fog: !1
    }),
    i.color.copy(this.light.color).multiplyScalar(this.light.intensity),
    this.targetLine = new THREE.Line(r, i),
    this.add(this.targetLine),
    this.update()
},
THREE.DirectionalLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.DirectionalLightHelper.prototype.constructor = THREE.DirectionalLightHelper,
THREE.DirectionalLightHelper.prototype.dispose = function() {
    this.lightPlane.geometry.dispose(),
    this.lightPlane.material.dispose(),
    this.targetLine.geometry.dispose(),
    this.targetLine.material.dispose()
},
THREE.DirectionalLightHelper.prototype.update = function() {
    var e = new THREE.Vector3,
    t = new THREE.Vector3,
    r = new THREE.Vector3;
    return function() {
        e.setFromMatrixPosition(this.light.matrixWorld),
        t.setFromMatrixPosition(this.light.target.matrixWorld),
        r.subVectors(t, e),
        this.lightPlane.lookAt(r),
        this.lightPlane.material.color.copy(this.light.color).multiplyScalar(this.light.intensity),
        this.targetLine.geometry.vertices[1].copy(r),
        this.targetLine.geometry.verticesNeedUpdate = !0,
        this.targetLine.material.color.copy(this.lightPlane.material.color)
    }
} (),
THREE.EdgesHelper = function(e, t, r) {
    t = void 0 !== t ? t: 16777215,
    THREE.LineSegments.call(this, new THREE.EdgesGeometry(e.geometry, r), new THREE.LineBasicMaterial({
        color: t
    })),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1
},
THREE.EdgesHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.EdgesHelper.prototype.constructor = THREE.EdgesHelper,
THREE.FaceNormalsHelper = function(e, t, r, i) {
    this.object = e,
    this.size = void 0 !== t ? t: 1,
    e = void 0 !== r ? r: 16776960,
    i = void 0 !== i ? i: 1,
    t = 0,
    r = this.object.geometry,
    r instanceof THREE.Geometry ? t = r.faces.length: console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead."),
    r = new THREE.BufferGeometry,
    t = new THREE.Float32Attribute(6 * t, 3),
    r.addAttribute("position", t),
    THREE.LineSegments.call(this, r, new THREE.LineBasicMaterial({
        color: e,
        linewidth: i
    })),
    this.matrixAutoUpdate = !1,
    this.update()
},
THREE.FaceNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.FaceNormalsHelper.prototype.constructor = THREE.FaceNormalsHelper,
THREE.FaceNormalsHelper.prototype.update = function() {
    var e = new THREE.Vector3,
    t = new THREE.Vector3,
    r = new THREE.Matrix3;
    return function() {
        this.object.updateMatrixWorld(!0),
        r.getNormalMatrix(this.object.matrixWorld);
        for (var i = this.object.matrixWorld,
        n = this.geometry.attributes.position,
        o = this.object.geometry,
        a = o.vertices,
        o = o.faces,
        s = 0,
        h = 0,
        c = o.length; c > h; h++) {
            var l = o[h],
            u = l.normal;
            e.copy(a[l.a]).add(a[l.b]).add(a[l.c]).divideScalar(3).applyMatrix4(i),
            t.copy(u).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e),
            n.setXYZ(s, e.x, e.y, e.z),
            s += 1,
            n.setXYZ(s, t.x, t.y, t.z),
            s += 1
        }
        return n.needsUpdate = !0,
        this
    }
} (),
THREE.GridHelper = function(e, t) {
    var r = new THREE.Geometry,
    i = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors
    });
    this.color1 = new THREE.Color(4473924),
    this.color2 = new THREE.Color(8947848);
    for (var n = -e; e >= n; n += t) {
        r.vertices.push(new THREE.Vector3( - e, 0, n), new THREE.Vector3(e, 0, n), new THREE.Vector3(n, 0, -e), new THREE.Vector3(n, 0, e));
        var o = 0 === n ? this.color1: this.color2;
        r.colors.push(o, o, o, o)
    }
    THREE.LineSegments.call(this, r, i)
},
THREE.GridHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.GridHelper.prototype.constructor = THREE.GridHelper,
THREE.GridHelper.prototype.setColors = function(e, t) {
    this.color1.set(e),
    this.color2.set(t),
    this.geometry.colorsNeedUpdate = !0
},
THREE.HemisphereLightHelper = function(e, t) {
    THREE.Object3D.call(this),
    this.light = e,
    this.light.updateMatrixWorld(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.colors = [new THREE.Color, new THREE.Color];
    var r = new THREE.SphereGeometry(t, 4, 2);
    r.rotateX( - Math.PI / 2);
    for (var i = 0; 8 > i; i++) r.faces[i].color = this.colors[4 > i ? 0 : 1];
    i = new THREE.MeshBasicMaterial({
        vertexColors: THREE.FaceColors,
        wireframe: !0
    }),
    this.lightSphere = new THREE.Mesh(r, i),
    this.add(this.lightSphere),
    this.update()
},
THREE.HemisphereLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.HemisphereLightHelper.prototype.constructor = THREE.HemisphereLightHelper,
THREE.HemisphereLightHelper.prototype.dispose = function() {
    this.lightSphere.geometry.dispose(),
    this.lightSphere.material.dispose()
},
THREE.HemisphereLightHelper.prototype.update = function() {
    var e = new THREE.Vector3;
    return function() {
        this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity),
        this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity),
        this.lightSphere.lookAt(e.setFromMatrixPosition(this.light.matrixWorld).negate()),
        this.lightSphere.geometry.colorsNeedUpdate = !0
    }
} (),
THREE.PointLightHelper = function(e, t) {
    this.light = e,
    this.light.updateMatrixWorld();
    var r = new THREE.SphereGeometry(t, 4, 2),
    i = new THREE.MeshBasicMaterial({
        wireframe: !0,
        fog: !1
    });
    i.color.copy(this.light.color).multiplyScalar(this.light.intensity),
    THREE.Mesh.call(this, r, i),
    this.matrix = this.light.matrixWorld,
    this.matrixAutoUpdate = !1
},
THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype),
THREE.PointLightHelper.prototype.constructor = THREE.PointLightHelper,
THREE.PointLightHelper.prototype.dispose = function() {
    this.geometry.dispose(),
    this.material.dispose()
},
THREE.PointLightHelper.prototype.update = function() {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
},
THREE.SkeletonHelper = function(e) {
    this.bones = this.getBoneList(e);
    for (var t = new THREE.Geometry,
    r = 0; r < this.bones.length; r++) this.bones[r].parent instanceof THREE.Bone && (t.vertices.push(new THREE.Vector3), t.vertices.push(new THREE.Vector3), t.colors.push(new THREE.Color(0, 0, 1)), t.colors.push(new THREE.Color(0, 1, 0)));
    t.dynamic = !0,
    r = new THREE.LineBasicMaterial({
        vertexColors: THREE.VertexColors,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0
    }),
    THREE.LineSegments.call(this, t, r),
    this.root = e,
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    this.update()
},
THREE.SkeletonHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.SkeletonHelper.prototype.constructor = THREE.SkeletonHelper,
THREE.SkeletonHelper.prototype.getBoneList = function(e) {
    var t = [];
    e instanceof THREE.Bone && t.push(e);
    for (var r = 0; r < e.children.length; r++) t.push.apply(t, this.getBoneList(e.children[r]));
    return t
},
THREE.SkeletonHelper.prototype.update = function() {
    for (var e = this.geometry,
    t = (new THREE.Matrix4).getInverse(this.root.matrixWorld), r = new THREE.Matrix4, i = 0, n = 0; n < this.bones.length; n++) {
        var o = this.bones[n];
        o.parent instanceof THREE.Bone && (r.multiplyMatrices(t, o.matrixWorld), e.vertices[i].setFromMatrixPosition(r), r.multiplyMatrices(t, o.parent.matrixWorld), e.vertices[i + 1].setFromMatrixPosition(r), i += 2)
    }
    e.verticesNeedUpdate = !0,
    e.computeBoundingSphere()
},
THREE.SpotLightHelper = function(e) {
    THREE.Object3D.call(this),
    this.light = e,
    this.light.updateMatrixWorld(),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1,
    e = new THREE.CylinderGeometry(0, 1, 1, 8, 1, !0),
    e.translate(0, -.5, 0),
    e.rotateX( - Math.PI / 2);
    var t = new THREE.MeshBasicMaterial({
        wireframe: !0,
        fog: !1
    });
    this.cone = new THREE.Mesh(e, t),
    this.add(this.cone),
    this.update()
},
THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype),
THREE.SpotLightHelper.prototype.constructor = THREE.SpotLightHelper,
THREE.SpotLightHelper.prototype.dispose = function() {
    this.cone.geometry.dispose(),
    this.cone.material.dispose()
},
THREE.SpotLightHelper.prototype.update = function() {
    var e = new THREE.Vector3,
    t = new THREE.Vector3;
    return function() {
        var r = this.light.distance ? this.light.distance: 1e4,
        i = r * Math.tan(this.light.angle);
        this.cone.scale.set(i, i, r),
        e.setFromMatrixPosition(this.light.matrixWorld),
        t.setFromMatrixPosition(this.light.target.matrixWorld),
        this.cone.lookAt(t.sub(e)),
        this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity)
    }
} (),
THREE.VertexNormalsHelper = function(e, t, r, i) {
    this.object = e,
    this.size = void 0 !== t ? t: 1,
    e = void 0 !== r ? r: 16711680,
    i = void 0 !== i ? i: 1,
    t = 0,
    r = this.object.geometry,
    r instanceof THREE.Geometry ? t = 3 * r.faces.length: r instanceof THREE.BufferGeometry && (t = r.attributes.normal.count),
    r = new THREE.BufferGeometry,
    t = new THREE.Float32Attribute(6 * t, 3),
    r.addAttribute("position", t),
    THREE.LineSegments.call(this, r, new THREE.LineBasicMaterial({
        color: e,
        linewidth: i
    })),
    this.matrixAutoUpdate = !1,
    this.update()
},
THREE.VertexNormalsHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.VertexNormalsHelper.prototype.constructor = THREE.VertexNormalsHelper,
THREE.VertexNormalsHelper.prototype.update = function() {
    var e = new THREE.Vector3,
    t = new THREE.Vector3,
    r = new THREE.Matrix3;
    return function() {
        var i = ["a", "b", "c"];
        this.object.updateMatrixWorld(!0),
        r.getNormalMatrix(this.object.matrixWorld);
        var n = this.object.matrixWorld,
        o = this.geometry.attributes.position,
        a = this.object.geometry;
        if (a instanceof THREE.Geometry) for (var s = a.vertices,
        h = a.faces,
        c = a = 0,
        l = h.length; l > c; c++) for (var u = h[c], p = 0, E = u.vertexNormals.length; E > p; p++) {
            var d = u.vertexNormals[p];
            e.copy(s[u[i[p]]]).applyMatrix4(n),
            t.copy(d).applyMatrix3(r).normalize().multiplyScalar(this.size).add(e),
            o.setXYZ(a, e.x, e.y, e.z),
            a += 1,
            o.setXYZ(a, t.x, t.y, t.z),
            a += 1
        } else if (a instanceof THREE.BufferGeometry) for (i = a.attributes.position, s = a.attributes.normal, p = a = 0, E = i.count; E > p; p++) e.set(i.getX(p), i.getY(p), i.getZ(p)).applyMatrix4(n),
        t.set(s.getX(p), s.getY(p), s.getZ(p)),
        t.applyMatrix3(r).normalize().multiplyScalar(this.size).add(e),
        o.setXYZ(a, e.x, e.y, e.z),
        a += 1,
        o.setXYZ(a, t.x, t.y, t.z),
        a += 1;
        return o.needsUpdate = !0,
        this
    }
} (),
THREE.WireframeHelper = function(e, t) {
    var r = void 0 !== t ? t: 16777215;
    THREE.LineSegments.call(this, new THREE.WireframeGeometry(e.geometry), new THREE.LineBasicMaterial({
        color: r
    })),
    this.matrix = e.matrixWorld,
    this.matrixAutoUpdate = !1
},
THREE.WireframeHelper.prototype = Object.create(THREE.LineSegments.prototype),
THREE.WireframeHelper.prototype.constructor = THREE.WireframeHelper,
THREE.ImmediateRenderObject = function(e) {
    THREE.Object3D.call(this),
    this.material = e,
    this.render = function(e) {}
},
THREE.ImmediateRenderObject.prototype = Object.create(THREE.Object3D.prototype),
THREE.ImmediateRenderObject.prototype.constructor = THREE.ImmediateRenderObject,
THREE.MorphBlendMesh = function(e, t) {
    THREE.Mesh.call(this, e, t),
    this.animationsMap = {},
    this.animationsList = [];
    var r = this.geometry.morphTargets.length;
    this.createAnimation("__default", 0, r - 1, r / 1),
    this.setAnimationWeight("__default", 1)
},
THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype),
THREE.MorphBlendMesh.prototype.constructor = THREE.MorphBlendMesh,
THREE.MorphBlendMesh.prototype.createAnimation = function(e, t, r, i) {
    t = {
        start: t,
        end: r,
        length: r - t + 1,
        fps: i,
        duration: (r - t) / i,
        lastFrame: 0,
        currentFrame: 0,
        active: !1,
        time: 0,
        direction: 1,
        weight: 1,
        directionBackwards: !1,
        mirroredLoop: !1
    },
    this.animationsMap[e] = t,
    this.animationsList.push(t)
},
THREE.MorphBlendMesh.prototype.autoCreateAnimations = function(e) {
    for (var t, r = /([a-z]+)_?(\d+)/,
    i = {},
    n = this.geometry,
    o = 0,
    a = n.morphTargets.length; a > o; o++) {
        var s = n.morphTargets[o].name.match(r);
        if (s && 1 < s.length) {
            var h = s[1];
            i[h] || (i[h] = {
                start: 1 / 0,
                end: -(1 / 0)
            }),
            s = i[h],
            o < s.start && (s.start = o),
            o > s.end && (s.end = o),
            t || (t = h)
        }
    }
    for (h in i) s = i[h],
    this.createAnimation(h, s.start, s.end, e);
    this.firstAnimation = t
},
THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function(e) { (e = this.animationsMap[e]) && (e.direction = 1, e.directionBackwards = !1)
},
THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function(e) { (e = this.animationsMap[e]) && (e.direction = -1, e.directionBackwards = !0)
},
THREE.MorphBlendMesh.prototype.setAnimationFPS = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.fps = t, r.duration = (r.end - r.start) / r.fps)
},
THREE.MorphBlendMesh.prototype.setAnimationDuration = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.duration = t, r.fps = (r.end - r.start) / r.duration)
},
THREE.MorphBlendMesh.prototype.setAnimationWeight = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.weight = t)
},
THREE.MorphBlendMesh.prototype.setAnimationTime = function(e, t) {
    var r = this.animationsMap[e];
    r && (r.time = t)
},
THREE.MorphBlendMesh.prototype.getAnimationTime = function(e) {
    var t = 0;
    return (e = this.animationsMap[e]) && (t = e.time),
    t
},
THREE.MorphBlendMesh.prototype.getAnimationDuration = function(e) {
    var t = -1;
    return (e = this.animationsMap[e]) && (t = e.duration),
    t
},
THREE.MorphBlendMesh.prototype.playAnimation = function(e) {
    var t = this.animationsMap[e];
    t ? (t.time = 0, t.active = !0) : console.warn("THREE.MorphBlendMesh: animation[" + e + "] undefined in .playAnimation()")
},
THREE.MorphBlendMesh.prototype.stopAnimation = function(e) { (e = this.animationsMap[e]) && (e.active = !1)
},
THREE.MorphBlendMesh.prototype.update = function(e) {
    for (var t = 0,
    r = this.animationsList.length; r > t; t++) {
        var i = this.animationsList[t];
        if (i.active) {
            var n = i.duration / i.length;
            i.time += i.direction * e,
            i.mirroredLoop ? (i.time > i.duration || 0 > i.time) && (i.direction *= -1, i.time > i.duration && (i.time = i.duration, i.directionBackwards = !0), 0 > i.time && (i.time = 0, i.directionBackwards = !1)) : (i.time %= i.duration, 0 > i.time && (i.time += i.duration));
            var o = i.start + THREE.Math.clamp(Math.floor(i.time / n), 0, i.length - 1),
            a = i.weight;
            o !== i.currentFrame && (this.morphTargetInfluences[i.lastFrame] = 0, this.morphTargetInfluences[i.currentFrame] = 1 * a, this.morphTargetInfluences[o] = 0, i.lastFrame = i.currentFrame, i.currentFrame = o),
            n = i.time % n / n,
            i.directionBackwards && (n = 1 - n),
            i.currentFrame !== i.lastFrame ? (this.morphTargetInfluences[i.currentFrame] = n * a, this.morphTargetInfluences[i.lastFrame] = (1 - n) * a) : this.morphTargetInfluences[i.currentFrame] = a
        }
    }
},
THREE.RenderableObject = function() {
    this.id = 0,
    this.object = null,
    this.z = 0,
    this.renderOrder = 0
},
THREE.RenderableFace = function() {
    this.id = 0,
    this.v1 = new THREE.RenderableVertex,
    this.v2 = new THREE.RenderableVertex,
    this.v3 = new THREE.RenderableVertex,
    this.normalModel = new THREE.Vector3,
    this.vertexNormalsModel = [new THREE.Vector3, new THREE.Vector3, new THREE.Vector3],
    this.vertexNormalsLength = 0,
    this.color = new THREE.Color,
    this.material = null,
    this.uvs = [new THREE.Vector2, new THREE.Vector2, new THREE.Vector2],
    this.z = 0,
    this.renderOrder = 0
},
THREE.RenderableVertex = function() {
    this.position = new THREE.Vector3,
    this.positionWorld = new THREE.Vector3,
    this.positionScreen = new THREE.Vector4,
    this.visible = !0
},
THREE.RenderableVertex.prototype.copy = function(e) {
    this.positionWorld.copy(e.positionWorld),
    this.positionScreen.copy(e.positionScreen)
},
THREE.RenderableLine = function() {
    this.id = 0,
    this.v1 = new THREE.RenderableVertex,
    this.v2 = new THREE.RenderableVertex,
    this.vertexColors = [new THREE.Color, new THREE.Color],
    this.material = null,
    this.z = 0,
    this.renderOrder = 0
},
THREE.RenderableSprite = function() {
    this.id = 0,
    this.object = null,
    this.x = 0,
    this.y = 0,
    this.z = 0,
    this.rotation = 0,
    this.scale = new THREE.Vector2,
    this.material = null,
    this.renderOrder = 0
},
THREE.Projector = function() {
    function e() {
        if (h === g) {
            var e = new THREE.RenderableObject;
            return v.push(e),
            g++,
            h++,
            e
        }
        return v[h++]
    }

    function t() {
        if (l === R) {
            var e = new THREE.RenderableVertex;
            return y.push(e),
            R++,
            l++,
            e
        }
        return y[l++]
    }

    function r() {
        if (p === x) {
            var e = new THREE.RenderableFace;
            return H.push(e),
            x++,
            p++,
            e
        }
        return H[p++]
    }

    function i() {
        if (d === w) {
            var e = new THREE.RenderableLine;
            return b.push(e),
            w++,
            d++,
            e
        }
        return b[d++]
    }

    function n() {
        if (m === S) {
            var e = new THREE.RenderableSprite;
            return M.push(e),
            S++,
            m++,
            e
        }
        return M[m++]
    }

    function o(e, t) {
        return e.renderOrder !== t.renderOrder ? e.renderOrder - t.renderOrder: e.z !== t.z ? t.z - e.z: e.id !== t.id ? e.id - t.id: 0
    }

    function a(e, t) {
        var r = 0,
        i = 1,
        n = e.z + e.w,
        o = t.z + t.w,
        a = -e.z + e.w,
        s = -t.z + t.w;
        return n >= 0 && o >= 0 && a >= 0 && s >= 0 ? !0 : 0 > n && 0 > o || 0 > a && 0 > s ? !1 : (0 > n ? r = Math.max(r, n / (n - o)) : 0 > o && (i = Math.min(i, n / (n - o))), 0 > a ? r = Math.max(r, a / (a - s)) : 0 > s && (i = Math.min(i, a / (a - s))), r > i ? !1 : (e.lerp(t, r), t.lerp(e, 1 - i), !0))
    }
    var s, h, c, l, u, p, E, d, f, m, T, v = [],
    g = 0,
    y = [],
    R = 0,
    H = [],
    x = 0,
    b = [],
    w = 0,
    M = [],
    S = 0,
    _ = {
        objects: [],
        lights: [],
        elements: []
    },
    C = new THREE.Vector3,
    A = new THREE.Vector4,
    L = new THREE.Box3(new THREE.Vector3( - 1, -1, -1), new THREE.Vector3(1, 1, 1)),
    P = new THREE.Box3,
    D = new Array(3),
    k = (new Array(4), new THREE.Matrix4),
    V = new THREE.Matrix4,
    O = new THREE.Matrix4,
    F = new THREE.Matrix3,
    U = new THREE.Frustum,
    B = new THREE.Vector4,
    N = new THREE.Vector4;
    this.projectVector = function(e, t) {
        console.warn("THREE.Projector: .projectVector() is now vector.project()."),
        e.project(t)
    },
    this.unprojectVector = function(e, t) {
        console.warn("THREE.Projector: .unprojectVector() is now vector.unproject()."),
        e.unproject(t)
    },
    this.pickingRay = function(e, t) {
        console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().")
    };
    var G = function() {
        var e = [],
        n = [],
        o = null,
        a = null,
        s = new THREE.Matrix3,
        h = function(t) {
            o = t,
            a = o.material,
            s.getNormalMatrix(o.matrixWorld),
            e.length = 0,
            n.length = 0
        },
        l = function(e) {
            var t = e.position,
            r = e.positionWorld,
            i = e.positionScreen;
            r.copy(t).applyMatrix4(T),
            i.copy(r).applyMatrix4(V);
            var n = 1 / i.w;
            i.x *= n,
            i.y *= n,
            i.z *= n,
            e.visible = i.x >= -1 && i.x <= 1 && i.y >= -1 && i.y <= 1 && i.z >= -1 && i.z <= 1
        },
        p = function(e, r, i) {
            c = t(),
            c.position.set(e, r, i),
            l(c)
        },
        d = function(t, r, i) {
            e.push(t, r, i)
        },
        f = function(e, t) {
            n.push(e, t)
        },
        m = function(e, t, r) {
            return e.visible === !0 || t.visible === !0 || r.visible === !0 ? !0 : (D[0] = e.positionScreen, D[1] = t.positionScreen, D[2] = r.positionScreen, L.isIntersectionBox(P.setFromPoints(D)))
        },
        v = function(e, t, r) {
            return (r.positionScreen.x - e.positionScreen.x) * (t.positionScreen.y - e.positionScreen.y) - (r.positionScreen.y - e.positionScreen.y) * (t.positionScreen.x - e.positionScreen.x) < 0
        },
        g = function(e, t) {
            var r = y[e],
            n = y[t];
            E = i(),
            E.id = o.id,
            E.v1.copy(r),
            E.v2.copy(n),
            E.z = (r.positionScreen.z + n.positionScreen.z) / 2,
            E.renderOrder = o.renderOrder,
            E.material = o.material,
            _.elements.push(E)
        },
        R = function(t, i, h) {
            var c = y[t],
            l = y[i],
            p = y[h];
            if (m(c, l, p) !== !1 && (a.side === THREE.DoubleSide || v(c, l, p) === !0)) {
                u = r(),
                u.id = o.id,
                u.v1.copy(c),
                u.v2.copy(l),
                u.v3.copy(p),
                u.z = (c.positionScreen.z + l.positionScreen.z + p.positionScreen.z) / 3,
                u.renderOrder = o.renderOrder,
                u.normalModel.fromArray(e, 3 * t),
                u.normalModel.applyMatrix3(s).normalize();
                for (var E = 0; 3 > E; E++) {
                    var d = u.vertexNormalsModel[E];
                    d.fromArray(e, 3 * arguments[E]),
                    d.applyMatrix3(s).normalize();
                    var f = u.uvs[E];
                    f.fromArray(n, 2 * arguments[E])
                }
                u.vertexNormalsLength = 3,
                u.material = o.material,
                _.elements.push(u)
            }
        };
        return {
            setObject: h,
            projectVertex: l,
            checkTriangleVisibility: m,
            checkBackfaceCulling: v,
            pushVertex: p,
            pushNormal: d,
            pushUv: f,
            pushLine: g,
            pushTriangle: R
        }
    },
    I = new G;
    this.projectScene = function(c, v, g, R) {
        p = 0,
        d = 0,
        m = 0,
        _.elements.length = 0,
        c.autoUpdate === !0 && c.updateMatrixWorld(),
        null === v.parent && v.updateMatrixWorld(),
        k.copy(v.matrixWorldInverse.getInverse(v.matrixWorld)),
        V.multiplyMatrices(v.projectionMatrix, k),
        U.setFromMatrix(V),
        h = 0,
        _.objects.length = 0,
        _.lights.length = 0,
        c.traverseVisible(function(t) {
            if (t instanceof THREE.Light) _.lights.push(t);
            else if (t instanceof THREE.Mesh || t instanceof THREE.Line || t instanceof THREE.Sprite) {
                var r = t.material;
                if (r.visible === !1) return; (t.frustumCulled === !1 || U.intersectsObject(t) === !0) && (s = e(), s.id = t.id, s.object = t, C.setFromMatrixPosition(t.matrixWorld), C.applyProjection(V), s.z = C.z, s.renderOrder = t.renderOrder, _.objects.push(s))
            }
        }),
        g === !0 && _.objects.sort(o);
        for (var H = 0,
        x = _.objects.length; x > H; H++) {
            var b = _.objects[H].object,
            w = b.geometry;
            if (I.setObject(b), T = b.matrixWorld, l = 0, b instanceof THREE.Mesh) {
                if (w instanceof THREE.BufferGeometry) {
                    var M = w.attributes,
                    S = w.groups;
                    if (void 0 === M.position) continue;
                    for (var L = M.position.array,
                    P = 0,
                    D = L.length; D > P; P += 3) I.pushVertex(L[P], L[P + 1], L[P + 2]);
                    if (void 0 !== M.normal) for (var G = M.normal.array,
                    P = 0,
                    D = G.length; D > P; P += 3) I.pushNormal(G[P], G[P + 1], G[P + 2]);
                    if (void 0 !== M.uv) for (var z = M.uv.array,
                    P = 0,
                    D = z.length; D > P; P += 2) I.pushUv(z[P], z[P + 1]);
                    if (null !== w.index) {
                        var j = w.index.array;
                        if (S.length > 0) for (var H = 0; H < S.length; H++) for (var W = S[H], P = W.start, D = W.start + W.count; D > P; P += 3) I.pushTriangle(j[P], j[P + 1], j[P + 2]);
                        else for (var P = 0,
                        D = j.length; D > P; P += 3) I.pushTriangle(j[P], j[P + 1], j[P + 2])
                    } else for (var P = 0,
                    D = L.length / 3; D > P; P += 3) I.pushTriangle(P, P + 1, P + 2)
                } else if (w instanceof THREE.Geometry) {
                    var X = w.vertices,
                    q = w.faces,
                    Y = w.faceVertexUvs[0];
                    F.getNormalMatrix(T);
                    for (var K = b.material,
                    Q = K instanceof THREE.MeshFaceMaterial,
                    Z = Q === !0 ? b.material: null, J = 0, $ = X.length; $ > J; J++) {
                        var ee = X[J];
                        if (C.copy(ee), K.morphTargets === !0) for (var te = w.morphTargets,
                        re = b.morphTargetInfluences,
                        ie = 0,
                        ne = te.length; ne > ie; ie++) {
                            var oe = re[ie];
                            if (0 !== oe) {
                                var ae = te[ie],
                                se = ae.vertices[J];
                                C.x += (se.x - ee.x) * oe,
                                C.y += (se.y - ee.y) * oe,
                                C.z += (se.z - ee.z) * oe
                            }
                        }
                        I.pushVertex(C.x, C.y, C.z)
                    }
                    for (var he = 0,
                    ce = q.length; ce > he; he++) {
                        var le = q[he];
                        if (K = Q === !0 ? Z.materials[le.materialIndex] : b.material, void 0 !== K) {
                            var ue = K.side,
                            pe = y[le.a],
                            Ee = y[le.b],
                            de = y[le.c];
                            if (I.checkTriangleVisibility(pe, Ee, de) !== !1) {
                                var fe = I.checkBackfaceCulling(pe, Ee, de);
                                if (ue !== THREE.DoubleSide) {
                                    if (ue === THREE.FrontSide && fe === !1) continue;
                                    if (ue === THREE.BackSide && fe === !0) continue
                                }
                                u = r(),
                                u.id = b.id,
                                u.v1.copy(pe),
                                u.v2.copy(Ee),
                                u.v3.copy(de),
                                u.normalModel.copy(le.normal),
                                fe !== !1 || ue !== THREE.BackSide && ue !== THREE.DoubleSide || u.normalModel.negate(),
                                u.normalModel.applyMatrix3(F).normalize();
                                for (var me = le.vertexNormals,
                                Te = 0,
                                ve = Math.min(me.length, 3); ve > Te; Te++) {
                                    var ge = u.vertexNormalsModel[Te];
                                    ge.copy(me[Te]),
                                    fe !== !1 || ue !== THREE.BackSide && ue !== THREE.DoubleSide || ge.negate(),
                                    ge.applyMatrix3(F).normalize()
                                }
                                u.vertexNormalsLength = me.length;
                                var ye = Y[he];
                                if (void 0 !== ye) for (var Re = 0; 3 > Re; Re++) u.uvs[Re].copy(ye[Re]);
                                u.color = le.color,
                                u.material = K,
                                u.z = (pe.positionScreen.z + Ee.positionScreen.z + de.positionScreen.z) / 3,
                                u.renderOrder = b.renderOrder,
                                _.elements.push(u)
                            }
                        }
                    }
                }
            } else if (b instanceof THREE.Line) {
                if (w instanceof THREE.BufferGeometry) {
                    var M = w.attributes;
                    if (void 0 !== M.position) {
                        for (var L = M.position.array,
                        P = 0,
                        D = L.length; D > P; P += 3) I.pushVertex(L[P], L[P + 1], L[P + 2]);
                        if (null !== w.index) for (var j = w.index.array,
                        P = 0,
                        D = j.length; D > P; P += 2) I.pushLine(j[P], j[P + 1]);
                        else for (var He = b instanceof THREE.LineSegments ? 2 : 1, P = 0, D = L.length / 3 - 1; D > P; P += He) I.pushLine(P, P + 1)
                    }
                } else if (w instanceof THREE.Geometry) {
                    O.multiplyMatrices(V, T);
                    var X = b.geometry.vertices;
                    if (0 === X.length) continue;
                    pe = t(),
                    pe.positionScreen.copy(X[0]).applyMatrix4(O);
                    for (var He = b instanceof THREE.LineSegments ? 2 : 1, J = 1, $ = X.length; $ > J; J++) pe = t(),
                    pe.positionScreen.copy(X[J]).applyMatrix4(O),
                    (J + 1) % He > 0 || (Ee = y[l - 2], B.copy(pe.positionScreen), N.copy(Ee.positionScreen), a(B, N) === !0 && (B.multiplyScalar(1 / B.w), N.multiplyScalar(1 / N.w), E = i(), E.id = b.id, E.v1.positionScreen.copy(B), E.v2.positionScreen.copy(N), E.z = Math.max(B.z, N.z), E.renderOrder = b.renderOrder, E.material = b.material, b.material.vertexColors === THREE.VertexColors && (E.vertexColors[0].copy(b.geometry.colors[J]), E.vertexColors[1].copy(b.geometry.colors[J - 1])), _.elements.push(E)))
                }
            } else if (b instanceof THREE.Sprite) {
                A.set(T.elements[12], T.elements[13], T.elements[14], 1),
                A.applyMatrix4(V);
                var xe = 1 / A.w;
                A.z *= xe,
                A.z >= -1 && A.z <= 1 && (f = n(), f.id = b.id, f.x = A.x * xe, f.y = A.y * xe, f.z = A.z, f.renderOrder = b.renderOrder, f.object = b, f.rotation = b.rotation, f.scale.x = b.scale.x * Math.abs(f.x - (A.x + v.projectionMatrix.elements[0]) / (A.w + v.projectionMatrix.elements[12])), f.scale.y = b.scale.y * Math.abs(f.y - (A.y + v.projectionMatrix.elements[5]) / (A.w + v.projectionMatrix.elements[13])), f.material = b.material, _.elements.push(f))
            }
        }
        return R === !0 && _.elements.sort(o),
        _
    }
},
THREE.SpriteCanvasMaterial = function(e) {
    THREE.Material.call(this),
    this.type = "SpriteCanvasMaterial",
    this.color = new THREE.Color(16777215),
    this.program = function(e, t) {},
    this.setValues(e)
},
THREE.SpriteCanvasMaterial.prototype = Object.create(THREE.Material.prototype),
THREE.SpriteCanvasMaterial.prototype.constructor = THREE.SpriteCanvasMaterial,
THREE.SpriteCanvasMaterial.prototype.clone = function() {
    var e = new THREE.SpriteCanvasMaterial;
    return e.copy(this),
    e.color.copy(this.color),
    e.program = this.program,
    e
},
THREE.CanvasRenderer = function(e) {
    function t() {
        Te.setRGB(0, 0, 0),
        ve.setRGB(0, 0, 0),
        ge.setRGB(0, 0, 0);
        for (var e = 0,
        t = H.length; t > e; e++) {
            var r = H[e],
            i = r.color;
            r instanceof THREE.AmbientLight ? Te.add(i) : r instanceof THREE.DirectionalLight ? ve.add(i) : r instanceof THREE.PointLight && ge.add(i)
        }
    }

    function r(e, t, r) {
        for (var i = 0,
        n = H.length; n > i; i++) {
            var o = H[i];
            if (pe.copy(o.color), o instanceof THREE.DirectionalLight) {
                var a = ye.setFromMatrixPosition(o.matrixWorld).normalize(),
                s = t.dot(a);
                if (0 >= s) continue;
                s *= o.intensity,
                r.add(pe.multiplyScalar(s))
            } else if (o instanceof THREE.PointLight) {
                var a = ye.setFromMatrixPosition(o.matrixWorld),
                s = t.dot(ye.subVectors(a, e).normalize());
                if (0 >= s) continue;
                if (s *= 0 == o.distance ? 1 : 1 - Math.min(e.distanceTo(a) / o.distance, 1), 0 == s) continue;
                s *= o.intensity,
                r.add(pe.multiplyScalar(s))
            }
        }
    }

    function i(e, t, r) {
        p(r.opacity),
        E(r.blending);
        var i = t.scale.x * W,
        n = t.scale.y * X,
        o = .5 * Math.sqrt(i * i + n * n);
        if (me.min.set(e.x - o, e.y - o), me.max.set(e.x + o, e.y + o), r instanceof THREE.SpriteMaterial) {
            var a = r.map;
            if (null !== a) {
                var s = Ee[a.id];
                if ((void 0 === s || s.version !== a.version) && (s = c(a), Ee[a.id] = s), void 0 !== s.canvas) {
                    v(s.canvas);
                    var h = a.image,
                    l = h.width * a.offset.x,
                    u = h.height * a.offset.y,
                    d = h.width * a.repeat.x,
                    f = h.height * a.repeat.y,
                    m = i / d,
                    g = n / f;
                    J.save(),
                    J.translate(e.x, e.y),
                    0 !== r.rotation && J.rotate(r.rotation),
                    J.translate( - i / 2, -n / 2),
                    J.scale(m, g),
                    J.translate( - l, -u),
                    J.fillRect(l, u, d, f),
                    J.restore()
                }
            } else v(r.color.getStyle()),
            J.save(),
            J.translate(e.x, e.y),
            0 !== r.rotation && J.rotate(r.rotation),
            J.scale(i, -n),
            J.fillRect( - .5, -.5, 1, 1),
            J.restore()
        } else r instanceof THREE.SpriteCanvasMaterial && (T(r.color.getStyle()), v(r.color.getStyle()), J.save(), J.translate(e.x, e.y), 0 !== r.rotation && J.rotate(r.rotation), J.scale(i, n), r.program(J), J.restore())
    }

    function n(e, t, r, i) {
        if (p(i.opacity), E(i.blending), J.beginPath(), J.moveTo(e.positionScreen.x, e.positionScreen.y), J.lineTo(t.positionScreen.x, t.positionScreen.y), i instanceof THREE.LineBasicMaterial) {
            if (d(i.linewidth), f(i.linecap), m(i.linejoin), i.vertexColors !== THREE.VertexColors) T(i.color.getStyle());
            else {
                var n = r.vertexColors[0].getStyle(),
                o = r.vertexColors[1].getStyle();
                if (n === o) T(n);
                else {
                    try {
                        var a = J.createLinearGradient(e.positionScreen.x, e.positionScreen.y, t.positionScreen.x, t.positionScreen.y);
                        a.addColorStop(0, n),
                        a.addColorStop(1, o)
                    } catch(s) {
                        a = n
                    }
                    T(a)
                }
            }
            J.stroke(),
            me.expandByScalar(2 * i.linewidth)
        } else i instanceof THREE.LineDashedMaterial && (d(i.linewidth), f(i.linecap), m(i.linejoin), T(i.color.getStyle()), g([i.dashSize, i.gapSize]), J.stroke(), me.expandByScalar(2 * i.linewidth), g([]))
    }

    function o(e, t, i, n, o, c, u, d) {
        if (N.info.render.vertices += 3, N.info.render.faces++, p(d.opacity), E(d.blending), S = e.positionScreen.x, _ = e.positionScreen.y, C = t.positionScreen.x, A = t.positionScreen.y, L = i.positionScreen.x, P = i.positionScreen.y, a(S, _, C, A, L, P), (d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshPhongMaterial) && null === d.map) le.copy(d.color),
        ue.copy(d.emissive),
        d.vertexColors === THREE.FaceColors && le.multiply(u.color),
        ce.copy(Te),
        Re.copy(e.positionWorld).add(t.positionWorld).add(i.positionWorld).divideScalar(3),
        r(Re, u.normalModel, ce),
        ce.multiply(le).add(ue),
        d.wireframe === !0 ? s(ce, d.wireframeLinewidth, d.wireframeLinecap, d.wireframeLinejoin) : h(ce);
        else if (d instanceof THREE.MeshBasicMaterial || d instanceof THREE.MeshLambertMaterial || d instanceof THREE.MeshPhongMaterial) if (null !== d.map) {
            var f = d.map.mapping;
            f === THREE.UVMapping && (D = u.uvs, l(S, _, C, A, L, P, D[n].x, D[n].y, D[o].x, D[o].y, D[c].x, D[c].y, d.map))
        } else null !== d.envMap ? d.envMap.mapping === THREE.SphericalReflectionMapping && (He.copy(u.vertexNormalsModel[n]).applyMatrix3(xe), k = .5 * He.x + .5, V = .5 * He.y + .5, He.copy(u.vertexNormalsModel[o]).applyMatrix3(xe), O = .5 * He.x + .5, F = .5 * He.y + .5, He.copy(u.vertexNormalsModel[c]).applyMatrix3(xe), U = .5 * He.x + .5, B = .5 * He.y + .5, l(S, _, C, A, L, P, k, V, O, F, U, B, d.envMap)) : (ce.copy(d.color), d.vertexColors === THREE.FaceColors && ce.multiply(u.color), d.wireframe === !0 ? s(ce, d.wireframeLinewidth, d.wireframeLinecap, d.wireframeLinejoin) : h(ce));
        else d instanceof THREE.MeshNormalMaterial ? (He.copy(u.normalModel).applyMatrix3(xe), ce.setRGB(He.x, He.y, He.z).multiplyScalar(.5).addScalar(.5), d.wireframe === !0 ? s(ce, d.wireframeLinewidth, d.wireframeLinecap, d.wireframeLinejoin) : h(ce)) : (ce.setRGB(1, 1, 1), d.wireframe === !0 ? s(ce, d.wireframeLinewidth, d.wireframeLinecap, d.wireframeLinejoin) : h(ce))
    }

    function a(e, t, r, i, n, o) {
        J.beginPath(),
        J.moveTo(e, t),
        J.lineTo(r, i),
        J.lineTo(n, o),
        J.closePath()
    }

    function s(e, t, r, i) {
        d(t),
        f(r),
        m(i),
        T(e.getStyle()),
        J.stroke(),
        me.expandByScalar(2 * t)
    }

    function h(e) {
        v(e.getStyle()),
        J.fill()
    }

    function c(e) {
        if (0 === e.version || e instanceof THREE.CompressedTexture || e instanceof THREE.DataTexture) return {
            canvas: void 0,
            version: e.version
        };
        var t = e.image,
        r = document.createElement("canvas");
        r.width = t.width,
        r.height = t.height;
        var i = r.getContext("2d");
        i.setTransform(1, 0, 0, -1, 0, t.height),
        i.drawImage(t, 0, 0);
        var n = e.wrapS === THREE.RepeatWrapping,
        o = e.wrapT === THREE.RepeatWrapping,
        a = "no-repeat";
        return n === !0 && o === !0 ? a = "repeat": n === !0 ? a = "repeat-x": o === !0 && (a = "repeat-y"),
        {
            canvas: J.createPattern(r, a),
            version: e.version
        }
    }

    function l(e, t, r, i, n, o, a, s, h, l, u, p, E) {
        var d = Ee[E.id];
        if ((void 0 === d || d.version !== E.version) && (d = c(E), Ee[E.id] = d), void 0 === d.canvas) return v("rgba( 0, 0, 0, 1)"),
        void J.fill();
        v(d.canvas);
        var f, m, T, g, y, R, H, x, b = E.offset.x / E.repeat.x,
        w = E.offset.y / E.repeat.y,
        M = E.image.width * E.repeat.x,
        S = E.image.height * E.repeat.y;
        a = (a + b) * M,
        s = (s + w) * S,
        h = (h + b) * M,
        l = (l + w) * S,
        u = (u + b) * M,
        p = (p + w) * S,
        r -= e,
        i -= t,
        n -= e,
        o -= t,
        h -= a,
        l -= s,
        u -= a,
        p -= s,
        H = h * p - u * l,
        0 !== H && (x = 1 / H, f = (p * r - l * n) * x, m = (p * i - l * o) * x, T = (h * n - u * r) * x, g = (h * o - u * i) * x, y = e - f * a - T * s, R = t - m * a - g * s, J.save(), J.transform(f, m, T, g, y, R), J.fill(), J.restore())
    }

    function u(e, t, r) {
        var i, n = t.x - e.x,
        o = t.y - e.y,
        a = n * n + o * o;
        0 !== a && (i = r / Math.sqrt(a), n *= i, o *= i, t.x += n, t.y += o, e.x -= n, e.y -= o)
    }

    function p(e) {
        te !== e && (J.globalAlpha = e, te = e)
    }

    function E(e) {
        re !== e && (e === THREE.NormalBlending ? J.globalCompositeOperation = "source-over": e === THREE.AdditiveBlending ? J.globalCompositeOperation = "lighter": e === THREE.SubtractiveBlending && (J.globalCompositeOperation = "darker"), re = e)
    }

    function d(e) {
        oe !== e && (J.lineWidth = e, oe = e)
    }

    function f(e) {
        ae !== e && (J.lineCap = e, ae = e)
    }

    function m(e) {
        se !== e && (J.lineJoin = e, se = e)
    }

    function T(e) {
        ie !== e && (J.strokeStyle = e, ie = e)
    }

    function v(e) {
        ne !== e && (J.fillStyle = e, ne = e)
    }

    function g(e) {
        he.length !== e.length && (J.setLineDash(e), he = e)
    }
    console.log("THREE.CanvasRenderer", THREE.REVISION),
    e = e || {};
    var y, R, H, x, b, w, M, S, _, C, A, L, P, D, k, V, O, F, U, B, N = this,
    G = new THREE.Projector,
    I = void 0 !== e.canvas ? e.canvas: document.createElement("canvas"),
    z = I.width,
    j = I.height,
    W = Math.floor(z / 2),
    X = Math.floor(j / 2),
    q = 0,
    Y = 0,
    K = z,
    Q = j,
    Z = 1,
    J = I.getContext("2d", {
        alpha: e.alpha === !0
    }),
    $ = new THREE.Color(0),
    ee = e.alpha === !0 ? 0 : 1,
    te = 1,
    re = 0,
    ie = null,
    ne = null,
    oe = null,
    ae = null,
    se = null,
    he = [],
    ce = (new THREE.RenderableVertex, new THREE.RenderableVertex, new THREE.Color),
    le = (new THREE.Color, new THREE.Color, new THREE.Color, new THREE.Color, new THREE.Color),
    ue = new THREE.Color,
    pe = new THREE.Color,
    Ee = {},
    de = new THREE.Box2,
    fe = new THREE.Box2,
    me = new THREE.Box2,
    Te = new THREE.Color,
    ve = new THREE.Color,
    ge = new THREE.Color,
    ye = new THREE.Vector3,
    Re = new THREE.Vector3,
    He = new THREE.Vector3,
    xe = new THREE.Matrix3;
    void 0 === J.setLineDash && (J.setLineDash = function() {}),
    this.domElement = I,
    this.autoClear = !0,
    this.sortObjects = !0,
    this.sortElements = !0,
    this.info = {
        render: {
            vertices: 0,
            faces: 0
        }
    },
    this.supportsVertexTextures = function() {},
    this.setFaceCulling = function() {},
    this.getContext = function() {
        return J
    },
    this.getContextAttributes = function() {
        return J.getContextAttributes()
    },
    this.getPixelRatio = function() {
        return Z
    },
    this.setPixelRatio = function(e) {
        void 0 !== e && (Z = e)
    },
    this.setSize = function(e, t, r) {
        z = e * Z,
        j = t * Z,
        I.width = z,
        I.height = j,
        W = Math.floor(z / 2),
        X = Math.floor(j / 2),
        r !== !1 && (I.style.width = e + "px", I.style.height = t + "px"),
        de.min.set( - W, -X),
        de.max.set(W, X),
        fe.min.set( - W, -X),
        fe.max.set(W, X),
        te = 1,
        re = 0,
        ie = null,
        ne = null,
        oe = null,
        ae = null,
        se = null,
        this.setViewport(0, 0, e, t)
    },
    this.setViewport = function(e, t, r, i) {
        q = e * Z,
        Y = t * Z,
        K = r * Z,
        Q = i * Z
    },
    this.setScissor = function() {},
    this.enableScissorTest = function() {},
    this.setClearColor = function(e, t) {
        $.set(e),
        ee = void 0 !== t ? t: 1,
        fe.min.set( - W, -X),
        fe.max.set(W, X)
    },
    this.setClearColorHex = function(e, t) {
        console.warn("THREE.CanvasRenderer: .setClearColorHex() is being removed. Use .setClearColor() instead."),
        this.setClearColor(e, t)
    },
    this.getClearColor = function() {
        return $
    },
    this.getClearAlpha = function() {
        return ee
    },
    this.getMaxAnisotropy = function() {
        return 0
    },
    this.clear = function() {
        fe.empty() === !1 && (fe.intersect(de), fe.expandByScalar(2), fe.min.x = fe.min.x + W, fe.min.y = -fe.min.y + X, fe.max.x = fe.max.x + W, fe.max.y = -fe.max.y + X, 1 > ee && J.clearRect(0 | fe.min.x, 0 | fe.max.y, fe.max.x - fe.min.x | 0, fe.min.y - fe.max.y | 0), ee > 0 && (E(THREE.NormalBlending), p(1), v("rgba(" + Math.floor(255 * $.r) + "," + Math.floor(255 * $.g) + "," + Math.floor(255 * $.b) + "," + ee + ")"), J.fillRect(0 | fe.min.x, 0 | fe.max.y, fe.max.x - fe.min.x | 0, fe.min.y - fe.max.y | 0)), fe.makeEmpty())
    },
    this.clearColor = function() {},
    this.clearDepth = function() {},
    this.clearStencil = function() {},
    this.render = function(e, r) {
        if (r instanceof THREE.Camera == !1) return void console.error("THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.");
        this.autoClear === !0 && this.clear(),
        N.info.render.vertices = 0,
        N.info.render.faces = 0,
        J.setTransform(K / z, 0, 0, -Q / j, q, j - Y),
        J.translate(W, X),
        y = G.projectScene(e, r, this.sortObjects, this.sortElements),
        R = y.elements,
        H = y.lights,
        x = r,
        xe.getNormalMatrix(r.matrixWorldInverse),
        t();
        for (var a = 0,
        s = R.length; s > a; a++) {
            var h = R[a],
            c = h.material;
            if (void 0 !== c && 0 !== c.opacity) {
                if (me.makeEmpty(), h instanceof THREE.RenderableSprite) b = h,
                b.x *= W,
                b.y *= X,
                i(b, h, c);
                else if (h instanceof THREE.RenderableLine) b = h.v1,
                w = h.v2,
                b.positionScreen.x *= W,
                b.positionScreen.y *= X,
                w.positionScreen.x *= W,
                w.positionScreen.y *= X,
                me.setFromPoints([b.positionScreen, w.positionScreen]),
                de.isIntersectionBox(me) === !0 && n(b, w, h, c);
                else if (h instanceof THREE.RenderableFace) {
                    if (b = h.v1, w = h.v2, M = h.v3, b.positionScreen.z < -1 || b.positionScreen.z > 1) continue;
                    if (w.positionScreen.z < -1 || w.positionScreen.z > 1) continue;
                    if (M.positionScreen.z < -1 || M.positionScreen.z > 1) continue;
                    b.positionScreen.x *= W,
                    b.positionScreen.y *= X,
                    w.positionScreen.x *= W,
                    w.positionScreen.y *= X,
                    M.positionScreen.x *= W,
                    M.positionScreen.y *= X,
                    c.overdraw > 0 && (u(b.positionScreen, w.positionScreen, c.overdraw), u(w.positionScreen, M.positionScreen, c.overdraw), u(M.positionScreen, b.positionScreen, c.overdraw)),
                    me.setFromPoints([b.positionScreen, w.positionScreen, M.positionScreen]),
                    de.isIntersectionBox(me) === !0 && o(b, w, M, 0, 1, 2, h, c)
                }
                fe.union(me)
            }
        }
        J.setTransform(1, 0, 0, 1, 0, 0)
    }
};
var SEPARATION = 200,
AMOUNTX = 60,
AMOUNTY = 18,
CAMERAY = 355,
CAMERAZ = 122,
R = .4,
$container = $(".wave-canvas-wrapper"),
camera,
scene,
renderer,
particles,
particle,
count = 0;
init(),
animate()
