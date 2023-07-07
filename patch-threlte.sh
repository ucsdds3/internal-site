#!/usr/bin/env bash

filepath="node_modules/three/examples/jsm/objects"
target="GroundProjectedSkybox"
replace="GroundProjectedEnv"

sed "s/$target/$replace/" "$filepath/$target.js" > "$filepath/$replace.js"