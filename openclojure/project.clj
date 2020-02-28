(defproject function "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :main function.main
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [metosin/reitit "0.3.7"]

                 ;Backend-side
                 [hiccup "1.0.5"]
                 [ring/ring-jetty-adapter "1.8.0"]

                 ;Client-side
                 [reagent-utils "0.3.3"]
                 [pez/clerk "1.0.0"]
                 [venantius/accountant "0.2.4"
                  :exclusions [org.clojure/tools.reader]]
                 [reagent "0.9.1"]

                 ;Shadow Cljs libraries
                 [thheller/shadow-cljs "2.8.83"]
                 [com.google.javascript/closure-compiler-unshaded "v20190325"]
                 [org.clojure/google-closure-library "0.0-20190213-2033d5d9"]]
                 ;Shadow Cljs libraries]


  :plugins [[lein-shadow "0.1.6"]]
  :ring {:handler function.handler/app}
  :clean-targets ^{:protect false}
  [:target-path
   "resources/public/js/"
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :source-paths ["src/clj" "src/cljc" "src/cljs"]
  :resource-paths ["resources" "target/cljsbuild"]

  :shadow-cljs {:builds
                {:app {:target :browser
                       :modules {:app {:init-fn function.core/init!}}
                       :output-dir       "resources/public/js"
                       :devtools {:watch-dir "resources/public"
                                  :after-load function.core/mount-root}}}}


  :profiles {:uberjar {:source-paths ["src/function/clj"]
                       :prep-tasks ["clean"
                                    "compile"
                                    ["shadow" "compile" "app"]]
                         :aot :all
                         :omit-source true}}

  :uberjar-name "function.jar")
