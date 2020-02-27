(ns handler.core)

(defn handler [req]
  {:status 200
   :body "Hwllodsad"
   :headers {}})

(def function
  (-> handler))
