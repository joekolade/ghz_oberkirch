
/**
 * Logo
 */
lib.logo = COA
lib.logo {
    stdWrap.typolink.parameter = 1
    10 = IMAGE
    10 {
        file = EXT:ghz_oberkirch/Resources/Public/Images/GM_Logo.svg
        altText = {$ghzok.title}
    }
}

/**
 * Top Navi
 */
lib.topNavi = HMENU
lib.topNavi {
    special = directory
    special.value = {$ghzok.pids.topnavi}

    wrap = <ul id="quickNavi">|</ul>

    1 = TMENU
    1 {
        expAll = 1

        NO = 1
        NO.wrapItemAndSub = <li>|</li> |*| <li>|</li> |*| <li class="emergency">|</li>
        NO.stdWrap.innerWrap = | |*| | |*| <span class="alt">|</span>
    }
}

TEMP.menuItem = COA
TEMP.menuItem {
    10 = TEXT
    10.field = title
    10.wrap = <span class="navTitle">|</span>

    10.wrap {
        override = <span class="navTitle" data-nohover>|</span>
        override.if.isFalse.field = nav_title
    }


    20 = TEXT
    20.field = nav_title // title
    20.wrap = <span class="navSubtitle">|</span>
}

lib {
    eg = HMENU
    eg {
        special = directory
        special.value = {$ghzok.pids.eg}
        wrap = <h1 class="floor">EG</h1><ul class="eg">|</ul>

        1 = TMENU
        1 {
            NO {
                #doNotLinkIt = 1 || 1 |*| |*|
                #allWrap = <li class="eg">|</li>
                allWrap = <li>|</li>
                stdWrap.cObject < TEMP.menuItem
            }
            ACT = 1
            #ACT.allWrap = <li class="eg active">|</li>
            ACT.allWrap = <li class="active">|</li>
        }

    }

    eg_links < .eg
    eg_links {
        special.value = {$ghzok.pids.eg_links}
        wrap = |</ul>
        stdWrap.prepend = TEXT
        stdWrap.prepend {
            wrap = <h1 class="floor">|</h1><ul class="eg_links">
            data.dataWrap = DB:pages:{$ghzok.pids.eg_links}:title
        }
    }
    og1 < .eg
    og1 {
        special.value = {$ghzok.pids.og1}
        wrap = <h1 class="floor">1.OG</h1><ul class="og1">|</ul>
    }
    og2 < .eg
    og2 {
        special.value = {$ghzok.pids.og2}
        wrap = <h1 class="floor">2.OG</h1><ul class="og2">|</ul>
    }
    og3 < .eg
    og3 {
        special.value = {$ghzok.pids.og3}
        wrap = <h1 class="floor">3.OG</h1><ul class="og3">|</ul>
    }
}

lib.news = COA
lib.news {

}

lib.footer = COA
lib.footer {

    stdWrap.wrap = <div class="footerInner">|</span>

    10 = HMENU
    10 {

        special = directory
        special.value = {$ghzok.pids.footernavi}


        1 = TMENU
        1 {
            NO = 1
            NO.wrapItemAndSub = <span>|</span>
        }
    }
    20 = TEXT
    20 {
        data = date:U
        strftime =%Y
        noTrimWrap= |<span class="copyright">&copy; | {$ghzok.title}</span>|
    }
}
