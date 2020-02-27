(ns handler.core)

(defn handler [req]
  {:status 200
   :body "dsadsaa"
   :headers {}})

(def function
  (-> handler))
