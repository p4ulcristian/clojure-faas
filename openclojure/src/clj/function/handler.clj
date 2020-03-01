(ns function.handler
    (:require
      [hiccup.page :refer [include-js include-css html5]]
      [reitit.ring :as reitit-ring]))

(def mount-target
  "Loading screen for mounting"
  [:div#app
   [:h1 "Something is not in balance."]])

(defn html-head [req]
      "Head with some metatags"
       [:head
        [:title "(simple-code)"]
        [:link {:rel "icon" :href "/favicon.png" :type "image/png"}]
        [:meta {:charset "utf-8"}]
        [:meta {:name "viewport"
                :content "width=device-width, initial-scale=1"}]])


(defn html-page [req]
      "The client's page"
      (html5
        (html-head req)
        [:body {:class "body-container"}
         mount-target
         (include-js "/js/app.js")]))

(defn request-wrap [status content-type body]
      "wrap request with status and headers"
      {:status status
       :headers {"Content-Type" content-type}
       :body body})

(defn html-wrap [content]
      "Wrap Html"
      (request-wrap 200 "text/html" content))

(def app
  (do
    (reitit-ring/ring-handler
      (reitit-ring/router
        [["/" {:get {:handler (fn [req] (html-wrap (html-page req)))}}]])
      (reitit-ring/routes
        (reitit-ring/create-resource-handler {:path "/" :root "/public"})
        (reitit-ring/create-default-handler))
      {:middleware
       []})));ring.middleware.keyword-params/wrap-keyword-params]})))
  ;      ring.middleware.params/wrap-params]})))
  ;      #(wrap-transit-params % {:opts {}})
  ;      #(wrap-authentication % backend)
  ;      #(wrap-authorization % backend)
  ;      #(wrap-defaults % (assoc-in site-defaults [:security :anti-forgery] true))
  ;      #(wrap-shop-id %)]})))
