(ns handler.core)

(defn handler [req]
  {:status 200
   :body "pff"
   :headers {}})

(def function
  (-> handler))
