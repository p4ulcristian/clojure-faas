(ns function.core
  (:require
    [reagent.core :as reagent :refer [atom]]
    [reagent.session :as session]
    [reitit.frontend :as reitit]
    [clerk.core :as clerk]
    [accountant.core :as accountant]
    [cljs.reader :refer [read-string]]))

(def router
  (reitit/router
    [["/" :index]]))

(defn client-page []
  [:div {:style {:min-height "100vh"}}
    [:h1 "Reagent"]
    [:h3 "It should still work."]])

(defn mount-root []
  (reagent/render [client-page] (.getElementById js/document "app")))

(defn init! []

  (clerk/initialize!)
  (accountant/configure-navigation!
    {:nav-handler
     (fn [path]
       (let [match (reitit/match-by-path router path)
             current-page (:name (:data  match))
             route-params (:path-params match)]
         (reagent/after-render clerk/after-render!)
         ;(dispatch [:add-to-db {:current-page current-page
         ;                       :route-params route-params)
         (clerk/navigate-page! path)))

     :path-exists?
     (fn [path]
       (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
