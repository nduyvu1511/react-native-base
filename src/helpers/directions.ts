import { LngLat } from '@/types'
import Geolocation, {
  GeolocationError,
  GeolocationOptions,
  GeolocationResponse,
} from '@react-native-community/geolocation'
import { Linking, Platform } from 'react-native'

type LatLng = {
  latitude: number
  longitude: number
}
type travelMode = 'DRIVING' | 'BICYCLING' | 'TRANSIT' | 'WALKING'
type paramsKeys = 'travelmode' | 'dir_action' | 'origin' | 'destination' | 'waypoints'

interface ParamsProps {
  key: string | paramsKeys
  value: string | travelMode
}

interface GetDirectionsProps {
  destination: LatLng
  source: LatLng
  params: Array<ParamsProps>
  waypoints: LatLng[]
}

export const openGoogleMap = ({ latitude, longitude }: LngLat) => {
  var scheme = Platform.OS === 'ios' ? 'maps:' : 'geo:'
  var url = scheme + `${latitude},${longitude}`
  Linking.openURL(url)
}

const isValidLatLng = (num: number, range: number) =>
  typeof num === 'number' && num <= range && num >= -1 * range

const isValidCoordinates = (coords: LatLng) =>
  isValidLatLng(coords.latitude, 90) && isValidLatLng(coords.longitude, 180)

const getParams = (params: ParamsProps[]) => {
  return params
    .map(({ key, value }) => {
      return `${key}=${value}`
    })
    .join('&')
}

const getWaypoints = (waypoints: LatLng[]) => {
  if (waypoints.length === 0) {
    return ''
  }

  const params = waypoints.map((value) => `${value.latitude},${value.longitude}`).join('|')

  return `&waypoints=${params}`
}

export const getDirections = async ({
  destination,
  source,
  params,
  waypoints,
}: GetDirectionsProps) => {
  if (destination && isValidCoordinates(destination)) {
    params.push({
      key: 'destination',
      value: `${destination.latitude},${destination.longitude}`,
    })
  }

  if (source && isValidCoordinates(source)) {
    params.push({
      key: 'origin',
      value: `${source.latitude},${source.longitude}`,
    })
  }

  const url = `https://www.google.com/maps/dir/?api=1&${getParams(params)}${getWaypoints(
    waypoints
  )}`

  return Linking.canOpenURL(url).then((supported) => {
    if (!supported) {
      return Promise.reject(new Error(`Could not open the url: ${url}`))
    } else {
      return Linking.openURL(url)
    }
  })
}

export const getCurrentLocation = (
  onSuccess?: (_: LngLat) => void,
  onErr?: (_: GeolocationError) => void,
  options?: GeolocationOptions
) => {
  Geolocation.getCurrentPosition(
    (data) => {
      onSuccess?.({ latitude: data.coords.latitude, longitude: data.coords.longitude })
    },
    (err) => {
      console.log('get current location: ', err)
      onErr?.(err)
    },
    {
      enableHighAccuracy: true,
      // timeout: 10000,
      // maximumAge: 1000,
      ...options,
    }
  )
}

export const watchLocation = (
  onSuccess?: (_: GeolocationResponse) => void,
  onErr?: (_: GeolocationError) => void,
  options?: GeolocationOptions
): number => {
  return Geolocation.watchPosition(
    (res) => {
      onSuccess?.(res)
    },
    (err) => {
      console.log('watch position: ', err)
      onErr?.(err)
    },
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0, distanceFilter: 0, ...options }
  )
}
