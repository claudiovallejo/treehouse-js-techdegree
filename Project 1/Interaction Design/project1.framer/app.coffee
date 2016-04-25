# Import file "interaction"
sketch = Framer.Importer.load("imported/interaction@1x")

# Laptop Cursor
document.body.style.cursor = "auto"

# Shortcut Layer Names from sketch["myLayer"] -> sketch
for layerGroupName of sketch
	window[layerGroupName] = sketch[layerGroupName]
	# Store original position of all elements from PSD/Sketch file
	sketch[layerGroupName].originalFrame = window[layerGroupName].frame

# Group layers into Arrays by Type
authors = [a1, a2]
ids = [i1, i2]
lines = [l1, l2]
quotes = [q1, q2]
images = [image1, image2]
captions = [c1, c2]

# Layer Arrays
quoteA = [a1, i1, l1, q1, image1, c1]
quoteB = [a2, i2, l2, q2, image2, c2]

# Animation Variables
animationCurve = "bezier-curve(0.45, 0.25, 0.25, 1)"
animationTime = 0.75
delta = 5

# Button States
next.states.add
	visible:
		x: next.x
		opacity: 1
	hidden:
		x: next.x - 5
		opacity: 0

next.states.animationOptions = 
	curve: "ease-in-out"
	time: 1

next.states.switchInstant('hidden')

# Author States
for layer in authors
	layer.states.add
		visible:
			x: layer.x
			opacity: 1
		hidden:
			x: layer.x + delta
			opacity: 0
		
	layer.states.animationOptions = 
		curve: animationCurve
		time: animationTime

	layer.states.switchInstant('hidden')

# ID States
for layer in ids
	layer.states.add
		visible:
			x: layer.x
			opacity: 1
		hidden:
			x: layer.x + delta
			opacity: 0
		
	layer.states.animationOptions = 
		curve: animationCurve
		time: animationTime

	layer.states.switchInstant('hidden')

# Line States
for layer in lines
	layer.states.add
		visible:
			x: layer.x
			opacity: 1
		hidden:
			x: layer.x + delta
			opacity: 0
		
	layer.states.animationOptions = 
		curve: animationCurve
		time: animationTime

	layer.states.switchInstant('hidden')

# Quote States
for layer in quotes
	layer.states.add
		visible:
			x: layer.x
			opacity: 1
		hidden:
			x: layer.x + delta
			opacity: 0
		
	layer.states.animationOptions = 
		curve: animationCurve
		time: animationTime

	layer.states.switchInstant('hidden')

# Image States
for layer in images
	layer.states.add
		visible:
			x: layer.x
			opacity: 1
		hidden:
			x: layer.x - delta
			opacity: 0
		
	layer.states.animationOptions = 
		curve: animationCurve
		time: animationTime

	layer.states.switchInstant('hidden')

# Caption States
for layer in captions
	layer.states.add
		visible:
			x: layer.x
			opacity: 1
		hidden:
			x: layer.x - delta
			opacity: 0
		
	layer.states.animationOptions = 
		curve: animationCurve
		time: animationTime

	layer.states.switchInstant('hidden')
	
# On Page Load, do the following animations
Utils.delay 0.75, ->
	for layer in quoteA
		layer.states.switch('visible')
	
	Utils.delay .25, ->
		next.states.switch('visible')

# Switch
initialState = true

# Interaction
next.on Events.Click, ->
	
	if initialState
		for layer in quoteA
			layer.states.switch('hidden')
		
		Utils.delay 0.75, ->
			for layer in quoteB
				layer.states.switch('visible')
			initialState = false

	else if !initialState
		for layer in quoteB
			layer.states.switch('hidden')
		
		Utils.delay 0.75, ->
			for layer in quoteA
				layer.states.switch('visible')
			initialState = true

next.on Events.MouseOver, ->
	document.body.style.cursor = "pointer"

next.on Events.MouseOut, ->
	document.body.style.cursor = "auto"