
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