!function(e) {
  e.fn.lazyLoad = function(t) {
    var n = e.extend({
      onImgLoad: !1,
      buffer: 2
    }, t);
    return this.each(function(t) {
      var i = e(this)
        , s = i.find(".lazyload-item")
        , a = s.outerHeight()
        , o = 0
        , r = 0
        , l = i.offset().top
        , c = !1;
      function u() {
        var t = function() {
          if (null != window.pageYOffset)
            return window.pageYOffset;
          var e = window.document;
          return "CSS1Compat" == document.compatMode ? e.documentElement.scrollTop : e.body.scrollTop
        }()
          , i = e(window).height() + t
          , c = Math.max(0, parseInt((t - l) / a) - n.buffer)
          , u = parseInt((i - l) / a) + n.buffer;
        (c = c > 0 ? c : 0) != (u = u > s.length ? s.length : u) && (u > o || c < r) && (s.slice(c, u).trigger("appear"),
          o = u,
          r = c)
      }
      s.one("appear", function() {
        var t = function(e, t) {
          "function" == typeof n.onImgLoad && n.onImgLoad(e, t)
        };
        e(this).find("[data-imgsrc]").each(function() {
          var n = e(this)
            , i = n.attr("data-imgsrc");
          if (n.attr("data-imgsrcretina"))
            var s = n.attr("data-imgsrcretina");
          if (n.attr("data-imgstyle"))
            var a = n.attr("data-imgstyle");
          var o = new Image;
          o.src = i,
          void 0 !== s && (o.srcset = s),
          void 0 !== a && (o.style = a),
            o.complete ? t(n, o) : o.onload = function() {
              t(n, o)
            }
        })
      }),
        e(window).on("load pageshow", function() {
          u(),
          c || (c = window.setInterval(function() {
            u()
          }, 100),
            window.setTimeout(function() {
              c && (window.clearInterval(c),
                c = !1)
            }, 1e3))
        }),
        e(window).on("scroll touchmove resize", function() {
          c && (window.clearInterval(c),
            c = !1),
            u()
        }),
        u()
    })
  }
}($),
  function(e) {
    e.fn.listoverlay = function(t) {
      var n = e.extend({
        viewAllLinkActionClass: "j-listoverlay-viewall",
        viewAllLinkCssClass: "j-action",
        viewAllLinkMessage: "Alle anzeigen",
        overlayClass: "listoverlay",
        overlayListClass: "listoverlay-list",
        overlayHeadlineCssClass: "listoverlay-headline",
        overlayHeadline: "Headline",
        overlayListHeight: 300,
        overlayListItemCssClass: "text-nobreak",
        overlayWidthOldBrowser: 180,
        position: "left",
        positionXOffset: 20,
        positionYOffset: 10,
        closeButtonCssClass: "c-btn-ovrly-close",
        sortListItemsEnabled: !1
      }, t);
      return this.each(function() {
        var t = e(this);
        if (t.children("li:hidden").length) {
          var i = e("<li>", {}).appendTo(t);
          e("<a>").addClass(n.viewAllLinkActionClass).addClass(n.viewAllLinkCssClass).html(n.viewAllLinkMessage).click(function(i) {
            i.preventDefault();
            var s = e("a." + n.viewAllLinkActionClass).index(this)
              , a = !1;
            if (e("." + n.overlayClass).each(function() {
              e(this).data("viewAllLinkIndex") != s ? e(this).fadeOut("fast", function() {
                e(this).remove()
              }) : a = !0
            }),
              !a) {
              var o = e("<div>").addClass(n.overlayClass).data("viewAllLinkIndex", s).html('<div class="clearfix"><h3 class="' + n.overlayHeadlineCssClass + '">' + n.overlayHeadline + '</h3> <a class="' + n.closeButtonCssClass + '" href="#"><i class="icon icon-close"></i></a></div>')
                , r = t.clone().height(n.overlayListHeight).removeAttr("class").addClass(n.overlayListClass).appendTo(o);
              e("li:last", r).remove(),
                e("li", r).removeAttr("class").addClass(n.overlayListItemCssClass),
              n.sortListItemsEnabled && function(t) {
                var n = e("li", t);
                e.each(n, function(t, n) {
                  n.sortKey = e.trim(e(n).text().toLowerCase()),
                    n.sortKey = n.sortKey.replace(/\u00fc/g, "ue"),
                    n.sortKey = n.sortKey.replace(/\u00f6/g, "oe"),
                    n.sortKey = n.sortKey.replace(/\u00e4/g, "ae"),
                    n.sortKey = n.sortKey.replace(/\u00df/g, "ss")
                }),
                  n.sort(function(e, t) {
                    var n = e.sortKey
                      , i = t.sortKey;
                    return n < i ? -1 : n > i ? 1 : 0
                  }),
                  t.html(n)
              }(r);
              var l = e(window).height()
                , c = i.pageY - n.positionYOffset
                , u = "right" === n.position ? i.pageX - n.positionXOffset : i.pageX + n.positionXOffset
                , d = e(document).scrollTop()
                , h = c - d + n.overlayListHeight;
              h > l && (c = c < d ? d : c - (h - l + 60)),
                e("a." + n.closeButtonCssClass, o).click(function(t) {
                  t.preventDefault(),
                    o.fadeOut("fast", function() {
                      e(this).remove()
                    })
                }),
                o.css("top", c + "px").css("left", u + "px").prependTo("body").fadeIn(),
                o.width(r.parent("div").outerWidth())
            }
          }).appendTo(i)
        }
      })
    }
  }(jQuery),
  Belen.Common.Browsebox = function() {
    return {
      init: function(e, t) {
        !function(e, t) {
          const n = $(".browsebox-attribute .suggestionbox");
          $("ul.browsebox-itemlist").each(function() {
            $(this).listoverlay({
              overlayHeadline: $(this).attr("data-overlayheadline"),
              viewAllLinkMessage: "Alle anzeigen",
              overlayWidthOldBrowser: 180,
              sortListItemsEnabled: !0
            })
          }),
            $("ul[data-hiddenItems]").each(function() {
              const t = $(this)
                , n = JSON.parse(t.attr("data-hiddenItems") || null)
                , i = t.hasClass("is-root") ? "Alle Kategorien" : "mehr";
              n && n.length > 0 && e && $('<li class="is-clickable"><a class="link-open-section">' + i + "</a></li>").click(function() {
                const i = $(this)
                  , s = [];
                $.each(n, function(e, t) {
                  s.push(t.categoryId)
                }),
                  $.ajax({
                    url: e,
                    data: {
                      catIds: s
                    },
                    success: function(e) {
                      $.each(n, function(n, i) {
                        $.each(e, function(e, n) {
                          n.categoryId === i.categoryId && $('<li><a href="' + n.url + '">' + n.localizedName + "</a> <span>(" + i.count + ")</span></li>").appendTo(t)
                        })
                      }),
                        i.hide().remove()
                    }
                  })
              }).appendTo(t)
            }),
            n.suggestionbox({
              suggestionsMinLength: 1,
              submitOnClick: !1,
              takeTxtValIfKeyValIsEmpty: !0
            }),
            $("#browsebox-searchform").submit(function(e) {
              e.preventDefault();
              const n = $("#browsebox-field-categoryid");
              function i(e) {
                return e.replace(",", ".")
              }
              if ($(".j-fld-type-INT").each(function() {
                if ("" !== $(this).val()) {
                  let e = $(this).next(".j-suggstnbx-key").val();
                  "" === e && (e = $(this).val()),
                    isNaN(parseInt(e)) ? ($(this).val(""),
                      $(this).next(".j-suggstnbx-key").val("")) : $(this).next(".j-suggstnbx-key").val(parseInt(e))
                }
              }),
                $(".j-fld-type-DECIMAL").each(function() {
                  if ("" !== $(this).val()) {
                    let e = i($(this).next(".j-suggstnbx-key").val());
                    "" === e && (e = $(this).val()),
                      isNaN(parseFloat(e)) ? ($(this).val(""),
                        $(this).next(".j-suggstnbx-key").val("")) : $(this).next(".j-suggstnbx-key").val(i(e))
                  }
                }),
                t) {
                let e = !1;
                $('.browsebox-attribute input[type="hidden"]').each(function() {
                  this.name.match(/^attributeMap.*/) && this.value && (e = !0)
                }),
                e && n.val(t)
              }
              this.submit()
            })
        }(e, t),
          function() {
            const e = $("#site-search-query")
              , t = $("#browse-search-query")
              , n = $("#srch-ctgry-inpt")
              , i = $("#browsebox-field-categoryid");
            let s, a;
            const o = t.val();
            function r() {
              s = n.val(),
                a = $.isNumeric(i.val()) ? i.val() : 0
            }
            r(),
              $("#browse-search-query-wrp").suggestionbox({
                inputHandler: function(o) {
                  const r = o.data("suggestion")
                    , l = void 0 === r.categoryId ? a : r.categoryId
                    , c = void 0 === r.categoryName ? s : r.categoryName;
                  t.val(r.searchQuery),
                    e.val(r.searchQuery),
                    n.val(c),
                    i.val(l)
                },
                dropdownBuilder: function(e) {
                  const n = $('<ul class="dropdown-list suggestionbox-list">')
                    , i = t.val();
                  return $.each(e, function(e, t) {
                    let s = function(e, t) {
                      let n = t;
                      return 0 === t.toLowerCase().indexOf(e.toLowerCase()) && (n = "<b>" + t.substr(0, e.length) + "</b>" + t.substr(e.length)),
                        n
                    }(i, t.searchQuery);
                    null !== t.categoryName && "string" == typeof t.categoryName && (s += ' <span class="dropdown-category">in ' + t.categoryName + "</span>");
                    const a = $('<li class="suggestionbox-option">').data("suggestion", t).html(s).appendTo(n);
                    t.categoryName || o !== t.searchQuery || a.addClass("is-selected")
                  }),
                    n
                }
              }).click(r)
          }()
      }
    }
  }(),
  Belen.Search.ResultListView = function() {
    let e, t, n;
    const i = {
      initResultTable: function() {
        Belen.Common.Security.initAjaxTokenCSRF(),
          Belen.Common.CommonView.initAdTable("#srchrslt-adtable"),
          Belen.Common.CommonView.initAdTable("#srchrslt-adtable-topads"),
          Belen.Common.CommonView.initAdTable("#srchrslt-adtable-altads")
      },
      init: function() {
        const e = $("#sortingField-selector");
        this.initResultTable(),
          e.textdropdown(),
          e.find('input[name="sortingField"]').change(function() {
            $("#browsebox-field-sorting").attr("value", $(this).val()),
              Belen.Tracking.trackGoogleAnalyticsEvent(window.pageType + ",ResultsSortSuccess," + $(this).val()),
              $("#browsebox-searchform").submit()
          }),
          $("#srchrslt-shngls-more").click(function(e) {
            e.preventDefault(),
              $(this).hide(),
              $(this).parents("ul:eq(0)").children("li:hidden").fadeIn("fast")
          })
      }
    }
      , s = function(e) {
      const t = encodeURIComponent("&" + e.serializedSearchFormData);
      let n = "";
      return e.$clickableOptions.each(function(e, t) {
        t.checked && (n += "&clickableOptions=" + t.value)
      }),
      e.baseUrl + t + encodeURIComponent("&" + n)
    }
      , a = function(t) {
      const n = $("#j-srchrslt-header-savedsearch-subscribe")
        , i = $("#j-srchrslt-header-savedsearch-unsubscribe")
        , s = $("#j-srchrslt-header-savedsearch-subscribe-zsrp-infobox")
        , a = $("#j-srchrslt-header-savedsearch-unsubscribe-zsrp-infobox");
      t.options.isUserLoggedIn ? (s.on("click", function(e) {
        e.preventDefault(),
          n.click()
      }),
        $(".j-subscribe-link").on("click", function(s) {
          s.preventDefault(),
            $.post({
              url: n.attr("href"),
              data: e.serializeArray().concat(t.clickableOptionsSerializedArray)
            }).done(function() {
              n.addClass("is-hidden"),
                i.removeClass("is-hidden"),
                $(".j-savedsearch-subscribe-infobox").addClass("is-hidden"),
                $(".j-savedsearch-unsubscribe-infobox").removeClass("is-hidden"),
                Belen.Tracking.trackGoogleAnalyticsEvent(window.eventCategory + ",SaveSearchSuccess")
            }).fail(function() {
              Belen.Tracking.trackGoogleAnalyticsEvent(window.eventCategory + ",SaveSearchFail")
            })
        }),
        a.on("click", function(e) {
          e.preventDefault(),
            i.click()
        }),
        $(".j-unsubscribe-link").on("click", function(t) {
          t.preventDefault(),
            Belen.Tracking.trackGoogleAnalyticsEvent(window.eventCategory + ",SavedSearchDeleteBegin"),
            $.post({
              url: i.attr("href"),
              data: e.serializeArray()
            }).done(function() {
              n.removeClass("is-hidden"),
                i.addClass("is-hidden"),
                $(".j-savedsearch-subscribe-infobox").removeClass("is-hidden"),
                $(".j-savedsearch-unsubscribe-infobox").addClass("is-hidden"),
                $(".j-unsubscribe-link").addClass("is-hidden"),
                Belen.Tracking.trackGoogleAnalyticsEvent(window.eventCategory + ",SavedSearchDeleteSuccess")
            }).fail(function() {
              Belen.Tracking.trackGoogleAnalyticsEvent(window.eventCategory + ",SavedSearchDeleteFail")
            })
        })) : (n.attr("href", t.savedSearchesUrl),
        s.attr("href", t.options.savedSearchLoginUrl + encodeURIComponent("&" + t.serializedSearchFormData)))
    }
      , o = function() {
      $("#srchrslt-content").find(".ad-listitem").each(function(e) {
        $(this).data("position", e + 1);
        let t = !1;
        $(this).find("a").not(".j-dont-follow-vip").on("click", function(e) {
          if (!function(e) {
            return 1 === e.which && !(e.ctrlKey || e.metaKey || e.shiftKey || e.altKey)
          }(e))
            return;
          if (t)
            return;
          e.preventDefault();
          const n = function(e) {
            let t = !1;
            function n() {
              t || (t = !0,
                e())
            }
            return setTimeout(n, 100),
              n
          }(function() {
            t = !0;
            const n = function(e) {
              let t;
              try {
                t = new MouseEvent(e.type,e)
              } catch (n) {
                (t = document.createEvent("MouseEvent")).initMouseEvent(e.type, e.bubbles, e.cancelable, e.view, e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget)
              }
              return t
            }(e.originalEvent);
            e.target.dispatchEvent(n)
          })
            , i = $(this).parents(".ad-listitem").hasClass("is-topad") ? "topad" : "organic"
            , s = l.nextClick()
            , a = l.clickTimeSinceLoad()
            , o = {
            id: $(this).parents(".aditem").data("adid") || "Null",
            name: i,
            partner: i,
            creative: "",
            position: $(this).parents(".ad-listitem").data("position"),
            clickPosition: s,
            clickTimeSinceLoad: a
          };
          Belen.Tracking.trackSearchResultsClick(window.eventCategory, o, n)
        })
      })
    }
      , r = function() {
      const e = $('input[name="clickableOptions"]');
      if (0 === e.length)
        return;
      const t = $(".j-copts-button");
      let n = e.filter(":checked");
      const i = [];
      $(".j-clickable-options").revokeHidden(),
        n.each(function() {
          i.push($(this).val())
        }),
        e.on("change", function() {
          !function(t) {
            const i = [];
            return (n = e.filter(":checked")).each(function() {
              i.push($(this).val())
            }),
            JSON.stringify(i) === JSON.stringify(t)
          }(i) ? t.revokeHidden() : t.makeHidden()
        }),
        $(".j-copts-scrollable").slimScroll({
          position: "right",
          height: "150px",
          railVisible: !0,
          alwaysVisible: !0
        })
    }
      , l = {
      resetCount: function() {
        sessionStorage && sessionStorage.setItem("srpClicksCount", "0")
      },
      nextClick: function() {
        if (sessionStorage) {
          const e = sessionStorage.getItem("srpClicksCount");
          let t = e ? parseInt(e) : 0;
          return t += 1,
            sessionStorage.setItem("srpClicksCount", t),
            t
        }
        return 1
      },
      clickTimeSinceLoad: function() {
        return Date.now() - n
      }
    }
      , c = {
      saveLastSearch: function(e) {
        sessionStorage && sessionStorage.setItem("lastSearch", e)
      },
      hasChanged: function(e) {
        let t = !0;
        if (sessionStorage) {
          const n = sessionStorage.getItem("lastSearch");
          n && (t = this.removePageNum(e) !== this.removePageNum(n))
        }
        return t
      },
      removePageNum: function(e) {
        return e.replace(/pageNum=\d+/, "")
      }
    }
      , u = {
      init: function() {
        const e = $("#srchrslt-seo-extra-content")
          , t = $("#srchrslt-seo-content-toggle-button");
        u.closeContent(e),
          $('[href="#srchrslt-seo-content"]').on("click", function() {
            u.openContent(e),
              t.text("^ Weniger anzeigen")
          }),
          t.on("click", function() {
            e.hasClass("toggled") ? (u.openContent(e),
              t.text("^ Weniger anzeigen")) : (u.closeContent(e),
              t.text("v Mehr erfahren"))
          })
      },
      closeContent: function(e) {
        e.addClass("toggled")
      },
      openContent: function(e) {
        e.removeClass("toggled")
      }
    }
      , d = function() {
      const e = $("#j-sorting-info-button");
      e.hover(function() {
        $(this).css("cursor", "pointer")
      }),
        e.css("display", "flex"),
        e.on("click", function() {
          $.magnificPopup.open({
            items: {
              src: "#sorting-info-wrapper"
            },
            type: "inline",
            preloader: !1
          })
        })
    };
    return {
      init: function(h) {
        t = h,
          e = $("#site-search-form");
        const f = $('input[name="clickableOptions"]');
        i.init(),
          Belen.Common.Browsebox.init(t.browseCategoryAjaxUrl, t.suggestedCategoryId);
        const g = e.serialize()
          , b = s({
          baseUrl: h.savedSearchLoginUrl,
          $clickableOptions: f,
          serializedSearchFormData: g
        });
        a({
          options: h,
          savedSearchesUrl: b,
          clickableOptionsSerializedArray: f.serializeArray(),
          serializedSearchFormData: g
        }),
          r(),
          u.init(),
          o(),
        c.hasChanged(g) && (l.resetCount(),
          c.saveLastSearch(g)),
          Belen.Tracking.trackCriteoItemPage({
            event: "viewList",
            item: t.criteoItems,
            user_segment: "1"
          }),
          d(),
          n = Date.now()
      }
    }
  }(),
  Belen.Search.BrowseLocationsView = {
    init: function() {
      const e = $("#brwslctns-lctns-list");
      e.listoverlay({
        overlayHeadline: e.prev("h3").text(),
        viewAllLinkMessage: "Alle anzeigen",
        overlayWidthOldBrowser: 180
      })
    }
  },
  Belen.Search.PopularSearchView = {
    init: function() {
      const e = $("#popsrch-lctns-list");
      e.listoverlay({
        overlayHeadline: e.prev("h3").text(),
        viewAllLinkMessage: "Alle anzeigen",
        overlayWidthOldBrowser: 180
      })
    }
  },
  Belen.Search.PostersAdListView = function() {
    const e = "commercial"
      , t = "private";
    function n(n, i, s, a) {
      return "rating" === i ? function(e, n, i) {
        const s = i === t ? "dir" : "Ihnen";
        return 2 === e ? {
          subtitle: `Mit ${n} läuft es bestens`,
          description: `Welche Erfahrungen andere Nutzer mit ${n} gemacht haben, zeigt ${s} unser Zufriedenheits-Abzeichen. ${n} hat das Top-Level von 3 erreicht, das geht nur mit den allerbesten Bewertungen.`
        } : 1 === e ? {
          subtitle: `Mit ${n} läuft es okay`,
          description: `Welche Erfahrungen andere Nutzer mit ${n} gemacht haben, zeigt ${s} unser Zufriedenheits-Abzeichen. Mit ${n} läuft es gut, die zweite von 3 Stufen ist erreicht. `
        } : {
          subtitle: `Mit ${n} könnte es besser laufen`,
          description: `Welche Erfahrungen andere Nutzer mit ${n} gemacht haben, zeigt ${s} unser Zufriedenheits-Abzeichen. Hier lief nicht immer alles ganz reibungslos. Damit steigt ${n} auf Stufe 1 ein.`
        }
      }(s, n, a) : "friendliness" === i ? function(e, t) {
        return 2 === e ? {
          subtitle: `${t} ist besonders freundlich`,
          description: `Wofür wir unser Freundlichkeits-Abzeichen vergeben, spricht wohl für sich. ${t} ist die Freundlichkeit in Person. Dafür sprechen mindestens 6 Bewertungen zur freundlichen Art – und die beste von 3 Freundlichkeits-Stufen!`
        } : 1 === e ? {
          subtitle: `${t} ist sehr freundlich`,
          description: `Wofür wir unser Freundlichkeits-Abzeichen vergeben, spricht wohl für sich. Mindestens 3 Bewertungen hat ${t} für freundliches Verhalten bereits erhalten.`
        } : {
          subtitle: `${t} ist freundlich`,
          description: `Wofür wir unser Freundlichkeits-Abzeichen vergeben, spricht wohl für sich. Bei ${t} haben bis zu 2 Nutzer die freundliche Art betont.`
        }
      }(s, n) : "reliability" === i ? function(t, n, i) {
        return i === e ? 2 === t ? {
          subtitle: `${n} ist besonders zuverlässig`,
          description: `Wie gut sich jemand an Abmachungen hält, erkennen Sie an unserem Zuverlässigkeits-Abzeichen. ${n} hat einen besonders guten Ruf – die Bewertungen von mindestens 6 Nutzern bringen einen Platz auf der besten von 3 Stufen.`
        } : 1 === t ? {
          subtitle: `${n} ist sehr zuverlässig`,
          description: `Wie gut sich jemand an Abmachungen hält, erkennen Sie an unserem Zuverlässigkeits-Abzeichen. Dass auf ${n} Verlass ist, erkennen Sie an der Bewertung von mind. 3 Nutzern. `
        } : {
          subtitle: `${n} ist zuverlässig`,
          description: `Wie gut sich jemand an Abmachungen hält, erkennen Sie an unserem Zuverlässigkeits-Abzeichen. ${n} hält Wort, das ist bis zu 2 Nutzern positiv aufgefallen. `
        } : 2 === t ? {
          subtitle: `${n} ist besonders zuverlässig`,
          description: `Wie gut sich jemand an Abmachungen hält, erkennst du an unserem Zuverlässigkeits-Abzeichen. ${n} hat einen besonders guten Ruf – die Bewertungen von mindestens 6 Nutzern bringen einen Platz auf der besten von 3 Stufen.`
        } : 1 === t ? {
          subtitle: `${n} ist sehr zuverlässig`,
          description: `Wie gut sich jemand an Abmachungen hält, erkennst du an unserem Zuverlässigkeits-Abzeichen. Dass auf ${n} Verlass ist, können mindestens 3 Nutzer bestätigen. `
        } : {
          subtitle: `${n} ist zuverlässig`,
          description: `Wie gut sich jemand an Abmachungen hält, erkennst du an unserem Zuverlässigkeits-Abzeichen. ${n} hält Wort, das ist bis zu 2 Nutzern positiv aufgefallen. `
        }
      }(s, n, a) : "replyRate" === i ? function(t, n, i) {
        if (i === e) {
          if (2 === t)
            return {
              subtitle: "Die Chance auf eine Antwort ist besonders hoch",
              description: `Wetten, dass ${n} keine Ihrer Fragen offen lässt? Wer mehr als 90% der Anfragen beantwortet, bekommt das beste von 3 Antwortrate-Abzeichen.`
            };
          if (1 === t)
            return {
              subtitle: "Die Chance auf eine Antwort ist hoch",
              description: `Auf Ihre Anfrage erhalten Sie in der Regel auch eine Antwort. Dafür hat ${n} das zweitbeste von 3 Antwortrate-Abzeichen bekommen.`
            };
          throw new Error("Reply rate badge should not be visible in the public profile if it's lower than level 1")
        }
        if (2 === t)
          return {
            subtitle: `${n} ist ein Nachrichten-Profi`,
            description: `Wetten, dass ${n} keine deiner Fragen offen lässt? Wer mehr als 90% der Anfragen beantwortet, bekommt das beste von 3 Antwortrate-Abzeichen.`
          };
        if (1 === t)
          return {
            subtitle: `${n} ist ein Kommunikationstalent`,
            description: `Auf deine Anfrage erhältst du in der Regel auch eine Antwort. Dafür hat ${n} das zweitbeste von 3 Antwortrate-Abzeichen bekommen.`
          };
        throw new Error("Reply rate badge should not be visible in the public profile if it's lower than level 1")
      }(s, n, a) : "replySpeed" === i ? function(t, n, i) {
        return i === e ? 2 === t ? {
          subtitle: `${n} antwortet sehr schnell`,
          description: `So macht handeln Spaß: Die Antwortzeit von ${n} liegt bei unter 1 Stunde! Das ist Bestzeit, die mit dem besten von 3 Abzeichen ausgezeichnet wird.`
        } : 1 === t ? {
          subtitle: `${n} hat ein solides Antwortverhalten`,
          description: `Eine Antwort von ${n} kommt innerhalb von 24h. Damit kann man arbeiten, deshalb liegt ${n} in Sachen Antwortzeit auf Stufe 2 von 3.`
        } : {
          subtitle: `${n} antwortet etwas langsamer`,
          description: `Für ${n} gibt es das erste von 3 Antwortzeit-Abzeichen. Rechnen Sie damit, dass die Antwort in diesem Fall etwas länger auf sich warten lässt. `
        } : 2 === t ? {
          subtitle: `${n} ist auf zack`,
          description: `So macht handeln Spaß: Die Antwortzeit von ${n} liegt bei unter 1 Stunde! Das ist Bestzeit, die mit dem besten von 3 Abzeichen ausgezeichnet wird.`
        } : 1 === t ? {
          subtitle: `${n} hat ein solides Antwortverhalten`,
          description: `Eine Antwort von ${n} kommt innerhalb von 24h. Damit kann man arbeiten, deshalb liegt ${n} in Sachen Antwortzeit auf Stufe 2 von 3.`
        } : {
          subtitle: `${n} ist eher gemütlich`,
          description: `Für ${n} gibt es das erste von 3 Antwortzeit-Abzeichen. Rechne damit, dass die Antwort in diesem Fall etwas länger auf sich warten lässt. `
        }
      }(s, n, a) : "followers" === i ? function(t, n, i) {
        return i === e ? 2 === t ? {
          subtitle: `${n} ist besonders gefragt`,
          description: `Mehr als 100 Nutzer möchten über die Anzeigen von ${n} auf dem Laufenden bleiben. Ein klarer Fall für die beste von 3 Stufen.`
        } : 1 === t ? {
          subtitle: `${n} ist sehr gefragt`,
          description: `Für mehr als 5 Nutzer sind die Anzeigen von ${n} schon interessant. Und es werden immer mehr. Das bringt ${n} auf Stufe 2 von 3. `
        } : {
          subtitle: `${n} ist gefragt`,
          description: `Die Anzeigen von ${n} kommen gut an - es gibt schon erste Personen, die sich ${n} gemerkt haben.`
        } : 2 === t ? {
          subtitle: `${n} ist ein Promi`,
          description: `Mehr als 100 Nutzer möchten über die Anzeigen von ${n} auf dem Laufenden bleiben. Ein klarer Fall für die beste von 3 Stufen.  `
        } : 1 === t ? {
          subtitle: `${n} ist ein Aufsteiger`,
          description: `Für mehr als 5 Nutzer sind die Anzeigen von ${n} schon interessant. Und es werden immer mehr. Das bringt ${n} auf Stufe 2 von 3. `
        } : {
          subtitle: `${n} ist beliebt`,
          description: `Die Anzeigen von ${n} kommen gut an - es gibt schon erste Personen, die sich ${n} gemerkt haben.`
        }
      }(s, n, a) : void 0
    }
    function i(i, s) {
      i.on("click", function() {
        const i = $(this).data("badgeLevel")
          , a = $(this).data("badgeLabelLocal")
          , o = $(this).data("badgeName")
          , r = n($(this).data("contactName"), o, i, $(this).data("isCommercialViewer") ? e : t)
          , l = `\n          <div id="userbadges-public-profile-popup" class="modal-dialog mfp-popup-badges">\n                      <header>\n                         <div class="badgelist-item">\n                            <div class="badgelist-icon-bg" badge-level="${i}">\n                              <i class="iconlist-icon icon-${o}-badge-${i}"></i>\n                             </div>\n                          </div>\n                          <div class="headline-container">\n                          <p class="label">${a}</p>\n                          <p class="subtitle">${r.subtitle}</p>\n                          </div>\n                      </header>\n                      <div class="modal-dialog-content">\n                          <p class="description">${r.description}</p>\n                          <div class="modal-dialog--buttons">\n                              <a id="help-center-${o}" class="button-secondary">Mehr Erfahren</a>\n                          </div>\n                      </div>\n          </div>`;
        $.magnificPopup.open({
          items: {
            src: l
          }
        }),
          $("#help-center-" + o).click(s)
      })
    }
    return {
      init: function() {
        !function() {
          const e = $("#userInventoryForm")
            , t = $("#posterads-pageNum")
            , n = $("#pstrads-sort-field")
            , i = $("#pstrads-sort-select");
          Belen.Common.CommonView.initAdTable(),
            i.textdropdown(),
            i.find('input[name="sortingField"]').change(function() {
              t.val(1),
                n.val($(this).val()),
                e.submit()
            })
        }(),
          i($(".userbadges-profile-rating"), Belen.Common.CommonView.openUserratingHelpPages),
          i($(".userbadges-profile-friendliness"), Belen.Common.CommonView.openFriendlinessHelpPages),
          i($(".userbadges-profile-reliability"), Belen.Common.CommonView.openReliabilityHelpPages),
          i($(".userbadges-profile-replyRate"), Belen.Common.CommonView.openUserProfileHelpPages),
          i($(".userbadges-profile-replySpeed"), Belen.Common.CommonView.openUserProfileHelpPages),
          i($(".userbadges-profile-followers"), Belen.Common.CommonView.openUserProfileHelpPages),
          $(".user-profile-secure-payment").on("click", function() {
            const e = $("#userbadges-secure-payment");
            $.magnificPopup.open({
              items: {
                src: e
              }
            })
          })
      }
    }
  }(),
  Belen.My.FollowUsersAjax = function() {
    let e, t;
    function n(n, a, o) {
      t = n;
      const r = $(".j-followers-counter");
      Belen.Common.Security.initAjaxTokenCSRF(),
        t.on("click", function() {
          t.hasClass("is-toggled") ? s({
            url: e.unfollowUserUrl,
            successCallback: function() {
              t.attr("title", "Folgen").attr("data-ganevent", o + ",FollowUserBegin").data("gaevent", o + ",FollowUserBegin"),
                t.removeClass("is-toggled"),
                t.find("i").removeClass("icon-follow-user-active").addClass("icon-follow-user-green"),
                i("Folgen"),
              a && r.length > 0 && (r.data("value", r.data("value") - 1),
                r.text(r.data("value"))),
                Belen.Tracking.trackGoogleAnalyticsEvent(o + ",UnfollowUserSuccess")
            }
          }) : s({
            url: e.followUserUrl,
            successCallback: function() {
              t.attr("title", "Folge ich").attr("data-gaevent", o + ",UnfollowUserBegin").data("gaevent", o + ",UnfollowUserBegin"),
                t.addClass("is-toggled"),
                t.find("i").removeClass("icon-follow-user-green").addClass("icon-follow-user-active"),
                i("Folge ich"),
              a && r.length > 0 && (r.data("value", r.data("value") + 1),
                r.text(r.data("value"))),
                Belen.Tracking.trackGoogleAnalyticsEvent(o + ",FollowUserSuccess");
              try {
                window.dispatchEvent(new CustomEvent("ekBelenSharedComponents.Toast.show",{
                  detail: "Du erhältst Benachrichtigungen über Anzeigen und Neuigkeiten."
                }))
              } catch (e) {
                console.log(e)
              }
            }
          })
        })
    }
    function i(e) {
      const n = t.find("span");
      n.length > 0 && n.text(e)
    }
    function s(e) {
      $.ajax({
        url: e.url,
        type: "POST",
        data: e.userIdToFollow,
        success: function(t) {
          e.successCallback(t)
        },
        complete: function() {
          t.prop("disabled", !1)
        }
      })
    }
    return {
      init: function(t) {
        e = t
      },
      initViewAdPage: function(t) {
        let i;
        e = t,
          i = void 0 !== window.eventCategory ? window.eventCategory : "VIP",
          n($("#follow-user-button"), !1, i)
      },
      initUserInventoryPage: function(t) {
        e = t,
          n($("#follow-user-button"), !0, "ResultsSeller")
      },
      initShopInventoryPage: function(t) {
        e = t,
          n($("#follow-user-button"), !0, "ResultsSeller")
      }
    }
  }();
